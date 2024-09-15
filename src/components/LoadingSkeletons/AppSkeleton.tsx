import { Component } from "react";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/EmptyCart-dark.svg";

export default class AppSkeleton extends Component {
  render() {
    return (
      <div className="w-full md:w-[90%] m-auto flex flex-col mb-20">
        <div className="mx-2 h-20 flex justify-between items-center">
          <div className="flex hidden md:flex space-x-6 animate-pulse">
            <div className="w-16 h-6 bg-gray-300 rounded"></div>
            <div className="w-16 h-6 bg-gray-300 rounded"></div>
            <div className="w-16 h-6 bg-gray-300 rounded"></div>
          </div>

          <div className="w-12  h-12">
            <img src={logo} alt="logo" />
          </div>

          <div className="w-8 h-8">
            <img src={cartIcon} alt="cart" />
          </div>
        </div>

        <div className=" w-full pt-32 flex flex-wrap justify-around gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-full max-w-sm p-4 flex flex-col items-start bg-white shadow-md rounded-lg animate-pulse h-[444px]"
            >
              <div className="w-full h-5/6 bg-gray-200 rounded-lg mb-4"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
              <div className="w-2/4 h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
