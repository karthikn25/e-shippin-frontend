import React from "react";
import Base from "../Base/Base";
import p_img from "../Images/realme-narzo-30-pro-5g (1).jpg";

export default function Cart() {
  return (
    <div className="h-screen w-screen bg-slate-200">
      <Base>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 my-2 md:mx-8 md:my-8 lg:mx-11 lg:my-11 ">
          <div className="">
            <h2 className="font-['Kings'] text-sm lg:text-3xl md:text-xl">
              CART
            </h2>
            <div className="flex justify-between font-['Kings']">
              <h3 className="text-sm md:text-md lg:text-lg">2 ITEMS</h3>
              <h3 className="text-[#C73838] cursor-pointer text-sm md:text-md lg:text-lg">
                EMPTY CART
              </h3>
            </div>
            <div className="overflow-y-scroll h-[calc(87vh-10rem)] hide-scrollbar ">
              <div className="bg-white h-28 md:h-32 md:mt-6 lg:h-36 xl:h-36 lg:mt-10 p-5 flex justify-around">
                <div className="text-[12px] md:text-md lg:text-[16px]">
                  <p>Name</p>
                  <p>Address 1</p>
                  <p>Address 2</p>
                  <p>LandMark</p>
                  <p>Pincode</p>
                </div>
                <div className="flex justify-center items-center">
                  <button className="bg-blue-500 lg:p-1 w-12 lg:w-16 text-white text-[12px] text-md lg:text-lg shadow-lg shadow-[#000000]">
                    EDIT
                  </button>
                </div>
              </div>
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹12000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>{" "}
              <div className="bg-white h-20 md:h-28 mt-2 p-5 flex justify-between">
                <div className="h-12 w-12md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src={p_img} alt="product" className="h-full" />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg">
                  <h3 className="">Realme Narzo 30 5G</h3>
                  <h4 className="text-[#C73838]">category</h4>
                </div>
                <div className="flex gap-0 md:gap-1 lg:gap-2">
                  <i class="bx bx-plus cursor-pointer text-[12px]  lg:text-lg"></i>
                  <p className="text-[12px] lg:text-lg">4</p>
                  <i class="bx bx-minus cursor-pointer text-[12px] lg:text-lg"></i>
                </div>
                <div className="flex flex-col justify-between text-[12px] md:text-[16px] lg:text-lg">
                  <h3>₹15000</h3>
                  <i class="bx bxs-trash-alt text-center cursor-pointer text-red-500"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden flex justify-around my-3">
          <h4 className="">₹15000</h4>
          <button className="bg-red-500 px-2 text-white">PLACE ORDER</button>
          </div>
          <div className="hidden  md:block bg-white md:h-80 lg:h-96 w-5/6 md:mx-10 md:my-14 lg:mx-20 lg:my-10 md:px-10 md:pt-5 lg:px-20 lg:pt-10 overflow-hidden">
            <div className="overflow-y-scroll md:h-40 lg:h-36 hide-scrollbar">
              <div className="flex justify-between text-[15px] lg:text-[16px]">
                <h3 className="">Realme Narzo 30 5G</h3>
                <h2 className="">₹12000</h2>
              </div>
              <div className="flex justify-between text-[15px] lg:text-[16px]">
                <h3 className="">Realme Narzo 30 5G</h3>
                <h2 className="">₹12000</h2>
              </div>
              <div className="flex justify-between text-[15px] lg:text-[16px]">
                <h3 className="">Realme Narzo 30 5G</h3>
                <h2 className="">₹12000</h2>
              </div>
              <div className="flex justify-between text-[15px] lg:text-[16px]">
                <h3 className="">Realme Narzo 30 5G</h3>
                <h2 className="">₹12000</h2>
              </div>
              <div className="flex justify-between text-[15px] lg:text-[16px]">
                <h3 className="">Realme Narzo 30 5G</h3>
                <h2 className="">₹12000</h2>
              </div>
              <div className="flex justify-between text-[15px] lg:text-[16px]">
                <h3 className="">Realme Narzo 30 5G</h3>
                <h2 className="">₹12000</h2>
              </div>
              <div className="flex justify-between text-[15px] lg:text-[16px]">
                <h3 className="">Realme Narzo 30 5G</h3>
                <h2 className="">₹12000</h2>
              </div>
              <div className="flex justify-between text-[15px] lg:text-[16px]">
                <h3 className="">Realme Narzo 30 5G</h3>
                <h2 className="">₹12000</h2>
              </div>
              <div className="flex justify-between text-[15px] lg:text-[16px]">
                <h3 className="">Realme Narzo 30 5G</h3>
                <h2 className="">₹12000</h2>
              </div>
              <div className="flex justify-between text-[15px] lg:text-[16px]">
                <h3 className="">Realme Narzo 30 5G</h3>
                <h2 className="">₹15000</h2>
              </div>
            </div>

            <hr className="border-black" />
            <div className="flex justify-between  pt-8 lg:pt-10">
              <h2 className="">Total</h2>
              <h1>₹15000</h1>
            </div>
            <div className="text-center my-2">
              <button className="bg-blue-500 w-24 text-[12px] lg:text-[16px] lg:w-44 text-white shadow-lg shadow-[#000000] p-2">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}
