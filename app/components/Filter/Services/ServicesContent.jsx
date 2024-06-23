import React, { useState } from "react";

//components
import RadioButton from "./RadioButton";

//hooks
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updateSearchResult } from "@/lib/serviceSlice";

//datas
import findService from "./findService";
import ServiceName from "./ServiceName";
import { nanoid } from "nanoid";

const ServicesContent = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("Search by name");

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.nextSibling.innerText);
  };
  const dispatch = useAppDispatch();
  const searchResults = useAppSelector((state) => state.service.searchResult);
  const filteredService = useAppSelector(
    (state) => state.service.filteredService
  );

  const handleOnChange = (e) => {
    dispatch(updateSearchResult(findService(e.target.value)));
    setSearchText(e.target.value);
    setSearchResult(findService(e.target.value));
  };

  return (
    <div className="flex flex-col p-4 gap-5">
      <div className="flex gap-6">
        <RadioButton
          name={"filter"}
          title={"Search by name"}
          checked={selectedRadio === "Search by name"}
          onChange={handleRadioChange}
        />
        <RadioButton
          name={"filter"}
          title={"Search by tags"}
          checked={selectedRadio === "Search by tags"}
          onChange={handleRadioChange}
        />
      </div>
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
      <div className="flex flex-col gap-2">
        {filteredService.map((data) => (
          <ServiceName name={data} key={nanoid()} />
        ))}
        {searchResults.map(
          (data) =>
            !filteredService.includes(data.name) && (
              <ServiceName name={data.name} key={nanoid()} />
            )
        )}
      </div>
    </div>
  );
};

export default ServicesContent;
