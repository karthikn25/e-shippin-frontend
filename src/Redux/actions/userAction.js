import {
  editUserFail,
  editUserRequest,
  editUserSuccess,
  forgetPasswordFail,
  forgetPasswordRequest,
  forgetPasswordSuccess,
  getAllUserFail,
  getAllUserRequest,
  getAllUserSuccess,
  getUserFail,
  getUserRequest,
  getUserSuccess,
  loginFail,
  loginRequest,
  loginSuccess,
  otpFail,
  otpRequest,
  otpSuccess,
  resetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  signupFail,
  signupRequest,
  signupSuccess,
} from "../slices/userSlice";
// import { URL } from "../../server";

let URL = "https://e-shipin-backend-b4ro.vercel.app/api";

const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { email, password } = credentials;
    const res = await fetch(`${URL}/user/login`,{
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      dispatch(loginSuccess(data));
      sessionStorage.setItem("id", data.user._id);
      sessionStorage.setItem("token", data.token);
    } else {
      dispatch(loginFail(data.message));
    }
  } catch (error) {
    dispatch(loginFail(error.message));
  }
};

const register = (credentials) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    const { email, password, username } = credentials;
    const res = await fetch(`${URL}/user/register`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      dispatch(signupSuccess(data));
    } else {
      dispatch(signupFail(data.message));
    }
  } catch (error) {
    dispatch(signupFail(error.message));
  }
};

const verifyOtp = (credentials) => async (dispatch) => {
  try {
    dispatch(otpRequest());
    const { otp } = credentials;
    const res = await fetch(`${URL}/user/verify-otp`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      dispatch(otpSuccess(data));
      sessionStorage.setItem("token",data.token);
      sessionStorage.setItem("id",data.user._id);
      
    } else {
      dispatch(otpFail(data.message));
    }
  } catch (error) {
    dispatch(otpFail(error.message));
  }
};

const forget = (credentials) => async (dispatch) => {
  try {
    dispatch(forgetPasswordRequest());
    const { email } = credentials;
    const res = await fetch(`${URL}/user/forget`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      dispatch(forgetPasswordSuccess(data));
    } else {
      dispatch(forgetPasswordFail(data.message));
    }
  } catch (error) {
    dispatch(forgetPasswordFail(error.message));
  }
};
const reset = (credentials, userData) => async (dispatch) => {
  try {
    dispatch(resetPasswordRequest());
    const { password } = credentials;
    const { id, token } = userData;
    console.log(id,token);
    const res = await fetch(`${URL}/user/reset-password/${id}/${token}`, {
      method: "PUT",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      dispatch(resetPasswordSuccess(data));
      sessionStorage.setItem("token",data.token);
      sessionStorage.setItem("id",data.user._id);
    } else {
      dispatch(resetPasswordFail(data.message));
    }
  } catch (error) {
    dispatch(resetPasswordFail(error.message));
  }
};
const getAllUser = () => async (dispatch) => {
  try {
    dispatch(getAllUserRequest());
    const res = await fetch(`${URL}/user/allusers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      dispatch(getAllUserSuccess(data));
    } else {
      dispatch(getAllUserFail(data.message));
    }
  } catch (error) {
    dispatch(getAllUserFail(error.message));
  }
};

const getSingleUser = (userInfo) => async (dispatch) => {
  try {
    dispatch(getUserRequest());
    const { id } = userInfo;

    const res = await fetch(`${URL}/user/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) { 
      dispatch(getUserSuccess(data));
    } else {
      dispatch(getUserFail(data.message));
    }
  } catch (error) {
    dispatch(getUserFail(error.message));
  }
};
const editUser = (credentials, userInfo) => async (dispatch) => {
  try {
    dispatch(editUserRequest());
    const { id } = userInfo;
    const formData = new FormData();
    formData.append("username", credentials.username);
    formData.append("email", credentials.email);
    formData.append("phoneNumber", credentials.phoneNumber);
    
    if (credentials.avatar) {
      formData.append("avatar", credentials.avatar); // Add the image file to FormData
    }
    const res = await fetch(`${URL}/user/edit/${id}`, {
      method: "PUT",
      body: formData,
      
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      dispatch(editUserSuccess(data));
    } else {
      dispatch(editUserFail(data.message));
    }
  } catch (error) {
    dispatch(editUserFail(error.message));
  }
};

export {
  login,
  register,
  verifyOtp,
  forget,
  reset,
  getAllUser,
  getSingleUser,
  editUser,
};

