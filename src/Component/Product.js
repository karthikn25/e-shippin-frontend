// import React, { useEffect, useState } from "react";
// import Base from "../Base/Base";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { getSingleProduct } from "../Redux/actions/productAction";
// import { postCart } from "../Redux/actions/cartAction";
// import Loading from "./Loading";

// export default function Product() {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const { singleProduct, error } = useSelector((state) => state.product);
//   const { id, token } = useParams(); // Ensure you're using this correctly
//   const navigate = useNavigate();
//   const [selectedImage, setSelectedImage] = useState(null);


//   useEffect(() => {
//     const fetchProduct = async () => {
//       setLoading(true);
//       await dispatch(getSingleProduct(id, token)); // Ensure id and token are passed correctly
//       setLoading(false);
//     };

//     if (id && token) {
//       fetchProduct();
//     }
//   }, [dispatch, id, token]); // Add id and token as dependencies

//   useEffect(() => {
//     if (singleProduct && singleProduct.product && singleProduct.product.images && singleProduct.product.images.length > 0) {
//       setSelectedImage(singleProduct.product.images[0].image); // Set default image to the first one
//     }
//   }, [singleProduct]);

//   const formatPrice = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0,
//     }).format(amount);
//   };

//   if (loading) {
//     return <div><Loading /></div>; // Show a loading indicator while fetching data
//   }

//   // Ensure productInfo is available and has the expected structure
//   if (!singleProduct) {
//     return <div>No product found.</div>; // Handle case where product is not found
//   }

//   const userInfo = localStorage.getItem("id");
//   const handleCart = (p_id) => {
//     if (loading) return;
//     dispatch(postCart(userInfo, p_id)).then(() => {
//       setLoading(true);
//       setTimeout(() => {
//         navigate(`/cart/${token}`);
//       }, 1000);
//     }).catch(() => {
//       console.log(error);
//     });
//   };

//   const handleBuy = (p_id) => {
//     navigate(`/buy/${p_id}/${token}`);
//   };

//   return (
//     <div className="h-screen w-screen overflow-y-auto">
//       <Base>
//         <div className="grid sm:grid-cols-12 overflow-y-scroll hide-scrollbar pb-80 md:pb-10 lg:mb-6 xl:pb-6">
//           <div className="hidden md:block xl:block lg:block col-span-2 flex flex-col">
//             {singleProduct.product.images && singleProduct.product.images.length > 0 ? (
//               singleProduct.product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image.image} 
//                   alt={`product-thumbnail-${index}`}
//                   className="md:h-16 lg:h-20 xl:h-20 md:w-16 lg:w-20 xl:w-20 mb-5 shadow-lg shadow-black cursor-pointer"
//                   onClick={() => setSelectedImage(image.image)}
//                 />
//               ))
//             ) : (
//               <img
//                 src={singleProduct.product.images[0].image}
//                 alt="default"
//                 className="md:h-16 lg:h-20 xl:h-20 md:w-16 lg:w-20 xl:w-20 mb-5 shadow-lg shadow-black cursor-pointer"
//               />
//             )}
//           </div>

//           <div className="col-span-5 h-4/6 w-4/6 md:h-4/6 lg:h-5/6 xl:h-5/6 md:w-4/6 lg:w-4/6 xl:w-4/6">
//             <img
//               src={selectedImage} // Use the first image or a default image
//               alt="product"
//               className="h-full w-full rounded-2xl shadow-lg shadow-black ml-12 md:ml-0 lg:ml-0 xl:ml-0"
//             />
//           </div>

//           <div className="block md:hidden col-span-2 flex flex-row gap-5 ml-6">
//             {singleProduct.product.images && singleProduct.product.images.length > 0 ? (
//               singleProduct.product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image.image}
//                   alt={`product-thumbnail-${index}`}
//                   className="h-12 w-12 shadow-lg shadow-black cursor-pointer"
//                   onClick={() => setSelectedImage(image.image)}
//                 />
//               ))
//             ) : (
//               <img
//                 src={singleProduct.product.images[0].image}
//                 alt="default"
//                 className="h-12 w-12 shadow-lg shadow-black cursor-pointer"
//               />
//             )}
//           </div>
        
//           <div className="col-span-5 flex flex-col p-2 md:p-3 lg:p-5 xl:p-5">
//             <h1 className="font-bold text-xl px-20 py-8 uppercase">{singleProduct.product.name}</h1>
//             <ul className="list-disc px-0">
//               <li className="text-sm md:text-md lg:text-lg xl:text-lg p-2 md:p-1 lg:p-0 xl:p-0 uppercase">
//                 {singleProduct.product.description1}
//               </li>
//               <li className="text-sm md:text-md lg:text-lg xl:text-lg p-2 md:p-1 lg:p-0 xl:p-0 uppercase">
//                 {singleProduct.product.description2}
//               </li>
//               <li className="text-sm md:text-md lg:text-lg xl:text-lg p-2 md:p-1 lg:p-0 xl:p-0 uppercase">
//                 {singleProduct.product.description3}
//               </li>
//             </ul>
//             <h2 className="text-sm md:text-md lg:text-lg xl:text-lg font-bold px-20 md:px-16 lg:px-28 xl:px-28 py-4">
//               PRICE: {formatPrice(singleProduct.product.price)}
//             </h2>
//             <div className="flex gap-3 mt-5 mx-2">
//               <button className="bg-blue-500 text-white px-4 md:px-2 lg:px-4 xl:px-4 py-2 rounded text-sm lg:text-lg xl:text-lg" onClick={() => handleBuy(singleProduct.product._id)}>
//                 <i className="bx bx-shopping-bag"></i> BUY NOW
//               </button>
//               <button className="bg-green-500 text-white px-4 md:px-2 lg:px-4 xl:px-4 py-2 rounded text-sm lg:text-lg xl:text-lg" onClick={() => handleCart(singleProduct.product._id)}>
//                 <i className="bx bx-cart"></i> ADD TO CART
//               </button>
//             </div>
//           </div>
//         </div>
//       </Base>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Base from "../Base/Base";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/actions/productAction";
import { postCart } from "../Redux/actions/cartAction";
import Loading from "./Loading";

export default function Product() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { singleProduct, error } = useSelector((state) => state.product);
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      await dispatch(getSingleProduct(id, token));
      setLoading(false);
    };

    if (id && token) {
      fetchProduct();
    }
  }, [dispatch, id, token]);

  useEffect(() => {
    if (singleProduct && singleProduct.product && singleProduct.product.images && singleProduct.product.images.length > 0) {
      setSelectedImage(singleProduct.product.images[0].image);
    }
  }, [singleProduct]);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) {
    return <div><Loading /></div>;
  }

  if (!singleProduct) {
    return <div>No product found.</div>;
  }

  const userInfo = localStorage.getItem("id");
  const handleCart = (p_id) => {
    if (loading) return;
    dispatch(postCart(userInfo, p_id)).then(() => {
      setLoading(true);
      setTimeout(() => {
        navigate(`/cart/${token}`);
      }, 1000);
    }).catch(() => {
      console.log(error);
    });
  };

  const handleBuy = (p_id) => {
    navigate(`/buy/${p_id}/${token}`);
  };

  return (
    <Base>
      <div className="flex flex-col h-screen">
        {/* Content area that scrolls */}
        <div className="flex-1 overflow-y-auto pb-32 hide-scrollbar">
          <div className="grid sm:grid-cols-12 gap-4 p-4">
            <div className="hidden md:block col-span-2 flex flex-col">
              {singleProduct.product.images && singleProduct.product.images.length > 0 ? (
                singleProduct.product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.image} 
                    alt={`product-thumbnail-${index}`}
                    className="md:h-16 lg:h-20 xl:h-20 md:w-16 lg:w-20 xl:w-20 mb-5 shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage(image.image)}
                  />
                ))
              ) : (
                <img
                  src={singleProduct.product.images[0].image}
                  alt="default"
                  className="md:h-16 lg:h-20 xl:h-20 md:w-16 lg:w-20 xl:w-20 mb-5 shadow-lg cursor-pointer"
                />
              )}
            </div>

            <div className="col-span-5 h-4/6 w-4/6">
              <img
                src={selectedImage}
                alt="product"
                className="h-full w-full rounded-2xl shadow-lg"
              />
            </div>

            <div className="block md:hidden col-span-2 flex flex-row gap-5">
              {singleProduct.product.images && singleProduct.product.images.length > 0 ? (
                singleProduct.product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.image}
                    alt={`product-thumbnail-${index}`}
                    className="h-12 w-12 shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage(image.image)}
                  />
                ))
              ) : (
                <img
                  src={singleProduct.product.images[0].image}
                  alt="default"
                  className="h-12 w-12 shadow-lg cursor-pointer"
                />
              )}
            </div>

            <div className="col-span-5 flex flex-col p-2 md:p-3 lg:p-5">
              <h1 className="font-bold text-xl py-4 uppercase">{singleProduct.product.name}</h1>
              <ul className="list-disc px-0">
                <li className="text-sm p-2 uppercase">{singleProduct.product.description1}</li>
                <li className="text-sm p-2 uppercase">{singleProduct.product.description2}</li>
                <li className="text-sm p-2 uppercase">{singleProduct.product.description3}</li>
              </ul>
              <h2 className="text-sm font-bold py-4">
                PRICE: {formatPrice(singleProduct.product.price)}
              </h2>
              <div className="flex gap-3 mt-5">
                <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm" onClick={() => handleBuy(singleProduct.product._id)}>
                  <i className="bx bx-shopping-bag"></i> BUY NOW
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded text-sm" onClick={() => handleCart(singleProduct.product._id)}>
                  <i className="bx bx-cart"></i> ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
