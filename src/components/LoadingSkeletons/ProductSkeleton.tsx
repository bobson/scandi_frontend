import { Component } from "react";

export default class ProductSkeleton extends Component {
  render() {
    return (
      <div className="w-full h-screen flex justify-center">
        <div className="w-full flex flex-col md:flex-row md:space-x-4 max-w-5xl p-4 flex  animate-pulse">
          <div className="w-full md:w-7/12 h-96 bg-gray-200"></div>

          <div className="w-full md:w-5/12 mb-4 md:mb-0 mt-6 md:mt-0 flex-col space-y-4">
            <div className="w-3/4 h-8 bg-gray-200"></div>

            <div className="w-3/4 h-4 bg-gray-200"></div>
            <div className="w-4/5 h-4 bg-gray-200"></div>
            <div className="w-4/5 h-4 bg-gray-200"></div>
            <div className="w-full h-10 bg-gray-300"></div>
            <div className="w-full h-20 bg-gray-200"></div>
          </div>
        </div>
      </div>
    );
  }
}
