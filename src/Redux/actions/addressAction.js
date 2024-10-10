import { addressEditFail, addressEditRequest, addressEditSuccess, addressGetFail, addressGetRequest, addressGetSuccess, addressPostFail, addressPostRequest, addressPostSuccess, addressRemoveFail, addressRemoveRequest, addressRemoveSuccess } from "../slices/addressSlice";



let URL = "http://localhost:7890/api";



const postAddress = (credential,userInfo) => async(dispatch)=>{
    try {
        dispatch(addressPostRequest());
        const formData = new FormData();
        formData.append("name",credential.name);
        formData.append("district",credential.district);
        formData.append("city",credential.city);
        formData.append("state",credential.state);
        formData.append("country",credential.country);
        formData.append("landmark",credential.landmark);
        formData.append("pincode",credential.pincode);
        formData.append("phoneNumber",credential.phoneNumber);
        formData.append("user", userInfo);
        
        const res = await fetch(`${URL}/address/create/${userInfo}`,{
            method:"POST",
            body:formData,
           
           
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(addressPostSuccess(data))
        }
        else{
            dispatch(addressPostFail(data.message))
        }

    } catch (error) {
        dispatch(addressPostFail(error.message))

    }
}

const getAddress = (userInfo)=>async(dispatch)=>{
    try {
        dispatch(addressGetRequest());
        const res = await fetch(`${URL}/address/get/${userInfo}`,{
            method:"GET",
            // headers:{
            //     "Content-Type":"application/json"
            // }
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(addressGetSuccess(data));
        }
        else{
            dispatch(addressGetFail(data.message))
        }
    } catch (error) {
        dispatch(addressGetFail(error.message))
    }
}
const editAddress = (credential,userInfo)=>async(dispatch)=>{
    try {
        dispatch(addressEditRequest());
        const formData = new FormData();
        formData.append("name",credential.name);
        formData.append("district",credential.district);
        formData.append("city",credential.city);
        formData.append("state",credential.state);
        formData.append("country",credential.country);
        formData.append("pincode",credential.pincode);
        formData.append("landmark",credential.landmark);
        formData.append("phoneNumber",credential.phoneNumber);
        const res = await fetch(`${URL}/address/edit/${userInfo}`,{
            method:"PUT",
            body:formData,
            
        })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            dispatch(addressEditSuccess(data.message))
        }
        else{
            dispatch(addressEditFail(data.message))
        }

    } catch (error) {
        dispatch(addressEditFail(error.message));

    }
}

const removeAddress = (userInfo)=>async(dispatch)=>{
    try {
        dispatch(addressRemoveRequest());
        const res = await fetch(`${URL}/address/remove/${userInfo}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json()
        console.log(data);
        if(res.ok){
            dispatch(addressRemoveSuccess(data))
        }
        else{
            dispatch(addressRemoveFail(data.message))
        }
    } catch (error) {
        dispatch(addressRemoveFail(error.message))
    }
}

export {
    postAddress,
    getAddress,
    editAddress,
    removeAddress
}