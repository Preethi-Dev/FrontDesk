import Image from "next/image";

//data
import people from "../../../../db/people.json";

//icons
import { useEffect, useState } from "react";

import { useAppDispatch } from "@/lib/hooks";
import { updateSearchResult } from "@/lib/peopleSlice";
import findData from "../findData";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const dispatch = useAppDispatch();

  const handleOnChange = (e) => {
    dispatch(updateSearchResult(findData(e.target.value, people)));
    setSearchText(e.target.value);
    setSearchResult(findData(e.target.value, people));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 px-3 py-1 rounded-md border border-stale-200">
        <div className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
              stroke={searchText ? "#0F172A" : "#A1A1AA"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 14.0001L11.1 11.1001"
              stroke={searchText ? "#0F172A" : "#A1A1AA"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search Payer or attendee name"
          className="flex-grow placeholder:text-sm text-gray-900 focus:outline-none"
          onChange={handleOnChange}
          value={searchText}
        />
      </div>
      {searchText && (
        <p className="text-xs text-stale-900 w-full">
          {`Showing ${searchResult.length} results matching '${searchText}'`}
        </p>
      )}
    </div>
  );
};

export default SearchBox;
