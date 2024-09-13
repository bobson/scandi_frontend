import { Component } from "react";

export default class Skeleton extends Component {
  render() {
    return (
      <div className="flex-grow w-full pt-32 flex flex-wrap justify-center gap-8">
        <div className="w-4/5 max-w-sm p-4 flex flex-col items-center bg-white shadow-md rounded-lg animate-pulse">
          <div className="w-4/5 h-40 bg-gray-200 rounded-lg mb-4"></div>

          <div className="w-3/4 h-6 bg-gray-200 rounded mb-2"></div>
          <div className="w-2/4 h-6 bg-gray-200 rounded"></div>
        </div>

        <div className="w-4/5 max-w-sm p-4 flex flex-col items-center bg-white shadow-md rounded-lg animate-pulse">
          <div className="w-4/5 h-40 bg-gray-200 rounded-lg mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-200 rounded mb-2"></div>
          <div className="w-2/4 h-6 bg-gray-200 rounded"></div>
        </div>

        <div className="w-4/5 max-w-sm p-4 flex flex-col items-center bg-white shadow-md rounded-lg animate-pulse">
          <div className="w-4/5 h-40 bg-gray-200 rounded-lg mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-200 rounded mb-2"></div>
          <div className="w-2/4 h-6 bg-gray-200 rounded"></div>
        </div>

        <div className="w-4/5 max-w-sm p-4 flex flex-col items-center bg-white shadow-md rounded-lg animate-pulse">
          <div className="w-4/5 h-40 bg-gray-200 rounded-lg mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-200 rounded mb-2"></div>
          <div className="w-2/4 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }
}
