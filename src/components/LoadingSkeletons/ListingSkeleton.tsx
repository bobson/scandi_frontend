import { Component } from "react";

export default class ListingSkeleton extends Component {
  render() {
    return (
      <div className="flex-grow w-full flex flex-wrap justify-around gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-full max-w-sm p-4 flex flex-col items-start bg-white shadow-md animate-pulse h-[444px]"
          >
            <div className="w-full h-5/6 bg-gray-200 mb-4"></div>
            <div className="w-3/4 h-4 bg-gray-200 mb-2"></div>
            <div className="w-2/4 h-4 bg-gray-200"></div>
          </div>
        ))}
      </div>
    );
  }
}
