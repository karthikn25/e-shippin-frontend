import {
    getSingleUserProductFail,
    getSingleUserProductRequest,
    getSingleUserProductSuccess,
    productDeleteFail,
    productDeleteRequest,
    productDeleteSuccess,
    productEditFail,
    productEditRequest,
    productEditSuccess,
    productGetAllFail,
    productGetAllRequest,
    productGetAllSuccess,
    productGetSingleFail,
    productGetSingleRequest,
    productGetSingleSuccess,
    productPostFail,
    productPostRequest,
    productPostSuccess,
    searchProductFail,
    searchProductRequest,
    searchProductSuccess
} from "../slices/productSlice";

const productPost = (credential, categoryInfo, userInfo) => async (dispatch) => {
    try {
        dispatch(productPostRequest());
        const { cat_id } = categoryInfo;
        const { id } = userInfo;

        const res = await fetch(`${process.env.REACT_APP_URL}/product/create/${cat_id}/${userInfo}}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credential) // Ensure body is stringified
        });

        const data = await res.json();
        console.log(data);
        if (res.ok) {
            dispatch(productPostSuccess(data));
        } else {
            dispatch(productPostFail(data.message || "Failed to create product"));
        }

    } catch (error) {
        dispatch(productPostFail(error.message));
    }
};

const getAllProduct = () => async (dispatch) => {
    try {
        dispatch(productGetAllRequest());
        const res = await fetch(`${process.env.REACT_APP_URL}/product/getall`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);
        if (res.ok) {
            dispatch(productGetAllSuccess(data));
        } else {
            dispatch(productGetAllFail(data.message || "Failed to fetch products"));
        }
    } catch (error) {
        dispatch(productGetAllFail(error.message));
    }
};

const getSingleProduct = (productInfo) => async (dispatch) => {
    try {
        dispatch(productGetSingleRequest());
        const { p_id } = productInfo;

        const res = await fetch(`${process.env.REACT_APP_URL}/product/getsingle/${productInfo}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);
        if (res.ok) {
            dispatch(productGetSingleSuccess(data));
        } else {
            dispatch(productGetSingleFail(data.message || "Failed to fetch product"));
        }
    } catch (error) {
        dispatch(productGetSingleFail(error.message));
    }
};

const deleteProduct = (productInfo) => async (dispatch) => {
    try {
        dispatch(productDeleteRequest());
        const { id } = productInfo;

        const res = await fetch(`${process.env.REACT_APP_URL}/product/remove/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);
        if (res.ok) {
            dispatch(productDeleteSuccess(data));
        } else {
            dispatch(productDeleteFail(data.message || "Failed to delete product"));
        }
    } catch (error) {
        dispatch(productDeleteFail(error.message));
    }
};

const updateProduct = (credential, productInfo) => async (dispatch) => {
    try {
        dispatch(productEditRequest());
        const { id } = productInfo;

        const res = await fetch(`${process.env.REACT_APP_URL}/product/edit/${productInfo}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credential) // Ensure body is stringified
        });

        const data = await res.json();
        console.log(data);
        if (res.ok) {
            dispatch(productEditSuccess(data));
        } else {
            dispatch(productEditFail(data.message || "Failed to edit product"));
        }
    } catch (error) {
        dispatch(productEditFail(error.message));
    }
};

const getSingleUserProduct = (userInfo) => async (dispatch) => {
    try {
        dispatch(getSingleUserProductRequest());
        const { id } = userInfo;

        const res = await fetch(`${process.env.REACT_APP_URL}/product/getproduct/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);
        if (res.ok) {
            dispatch(getSingleUserProductSuccess(data));
        } else {
            dispatch(getSingleUserProductFail(data.message || "Failed to fetch user products"));
        }
    } catch (error) {
        dispatch(getSingleUserProductFail(error.message));
    }
};

const searchProduct = (query) => async (dispatch) => {
    try {
        dispatch(searchProductRequest());

        const res = await fetch(`${process.env.REACT_APP_URL}/product/search/${query}`, {
            method: "GET"
        });

        const data = await res.json();
        console.log(data);
        if (res.ok) {
            dispatch(searchProductSuccess(data));
        } else {
            dispatch(searchProductFail(data.message || "Failed to search products"));
        }
    } catch (error) {
        dispatch(searchProductFail(error.message));
    }
};

export {
    productPost,
    getAllProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct,
    getSingleUserProduct,
    searchProduct
};
