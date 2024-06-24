import Image from "next/image";
import React, { useState } from "react";
import { nanoid } from "nanoid";

//components
import RadioButton from "./RadioButton";
import ServiceName from "./ServiceName";

//hooks
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  clearServiceResult,
  updateSearchResult,
  updateServiceType,
  updateStatus,
} from "@/lib/serviceSlice";

//datas
import findService from "./findService";
import findServiceData from "./findServiceData";

//icons
import Xcircle from "../../../assets/icons/x-circle.svg";
import Dropdown from "../../Dropdown";

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
  const serviceType = useAppSelector((state) => state.service.serviceType);
  const status = useAppSelector((state) => state.service.status);

  const clearSearchTerm = (e) => {
    dispatch(clearServiceResult());
    setSearchText("");
  };

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
      {selectedRadio === "Search by name" && (
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
            {searchText.length > 0 && (
              <Image
                src={Xcircle}
                alt="close"
                className="cursor-pointer"
                onClick={clearSearchTerm}
              />
            )}
          </div>
          {searchText && (
            <p className="text-xs text-stale-900 w-full">
              {`Showing ${searchResult.length} results matching '${searchText}'`}
            </p>
          )}
          <div className="flex flex-col gap-2 max-h-[180px] overflow-scroll">
            {filteredService.map((data) => {
              const service = findServiceData(data);
              return (
                <ServiceName
                  name={service.name}
                  type={service.type}
                  status={service.status}
                  key={nanoid()}
                />
              );
            })}
            {searchResults.map(
              (data) =>
                !filteredService.includes(data.name) && (
                  <ServiceName
                    name={data.name}
                    type={data.type}
                    status={data.status}
                    key={nanoid()}
                  />
                )
            )}
          </div>
        </div>
      )}
      {selectedRadio === "Search by tags" && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-stale-700 font-medium">Service type</p>
            <Dropdown
              menu={[
                {
                  key: "0",
                  label: "Show all service type",
                },
                {
                  key: "1",
                  label: "Class",
                },
                {
                  key: "2",
                  label: "Appointment",
                },
                {
                  key: "3",
                  label: "Facility",
                },
                {
                  key: "4",
                  label: "Class Pack",
                },
                {
                  key: "5",
                  label: "Membership",
                },
                {
                  key: "6",
                  label: "General Items",
                },
              ]}
              action={updateServiceType}
              currentItem={serviceType}
            >
              Select service type
            </Dropdown>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-stale-700 font-medium">Status</p>
            <Dropdown
              menu={[
                {
                  key: "0",
                  label: "Show all",
                },
                {
                  key: "1",
                  label: "Public",
                },
                {
                  key: "2",
                  label: "Private",
                },
                {
                  key: "3",
                  label: "Disabled",
                },
                {
                  key: "4",
                  label: "Draft",
                },
              ]}
              action={updateStatus}
              currentItem={status}
            >
              Select status
            </Dropdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesContent;
