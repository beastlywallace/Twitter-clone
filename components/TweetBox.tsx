import React, { useState } from "react";
import {
  CalculatorIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchIcon,
} from "@heroicons/react/outline";
export const TweetBox = () => {
  const [input, setInput] = useState("")
  
  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-6 rounded-full object-cover mt-4"
        src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png"
        alt=""
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1  flex-col">
          <input value={input} type="text" placeholder="what's happening" className="h-24 w-full text-xl outline-none placeholder:text-xl" />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon className="h-5 w-5" />
              <SearchIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalculatorIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button disabled={!input}  className="rounded-full bg-twitter px-5 py-2 font-bold text-[#fff] disabled:opacity-403">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
