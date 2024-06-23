"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  removeFilteredService,
  updateFilteredService,
} from "@/lib/serviceSlice";
import { useState } from "react";

const ServiceName = ({ name = "Jack" }) => {
  const filteredService = useAppSelector(
    (state) => state.service.filteredService
  );

  const [active, setActive] = useState(false || filteredService.includes(name));
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setActive(!active);

    if (!active) {
      dispatch(updateFilteredService(name));
    } else {
      dispatch(removeFilteredService(name));
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <div
        className={`w-4 h-4 border border-stale-200 rounded-sm cursor-pointer ${
          active && "bg-stale-900"
        }`}
        onClick={handleClick}
      />
      <p className="text-sm flex-grow text-stale-700 items-center leading-[0px]">
        {name}
      </p>
    </div>
  );
};

export default ServiceName;
