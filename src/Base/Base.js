import React from "react";
import Topbar from "./Topbar";
import { useNavigate } from "react-router-dom";

export default function Base({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen overflow-hidden hide-scrollbar">
      <div className="h-18 md:h-20 xl:h-20 lg:h-20 xl:h-20 sticky top-2.5 mx-5 my-0">
        <Topbar />
      </div>
      <div className="mx-1 pt-6 xl:my-5 lg:mx-4 xl:mx-5 md:mx-3 overflow-hidden overflow-x-hidden hide-scrollbar pb-20 xl:mb-10 lg:mb-10">
        {children}
      </div>
      <div className="block sticky bottom-0 md:hidden ">
        <div className="bg-indigo-300">
          <ul className="flex justify-around text-white ">
            <li>
              <i class="bx bx-home-alt hover:text-red-400 cursor-pointer" onClick={()=>navigate(`/home/${token}`)}></i>
            </li>
            <li>
              <i class="bx bx-category hover:text-red-400 cursor-pointer" onClick={()=>navigate(`/category/${token}`)}></i>
            </li>
            <li>
              <i class="bx bx-cart hover:text-red-400 cursor-pointer" onClick={()=>navigate(`/cart/${token}`)}></i>
            </li>
            <li>
              <i class="bx bx-user hover:text-red-400 cursor-pointer"  onClick={()=>navigate(`/profile/${token}`)}></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
