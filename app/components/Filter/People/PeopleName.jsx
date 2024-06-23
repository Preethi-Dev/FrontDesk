"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { removeFilteredPeople, updateFilteredPeople } from "@/lib/peopleSlice";
import { useEffect, useState } from "react";

const PeopleName = ({ name = "Jack" }) => {
  const filteredPeople = useAppSelector((state) => state.people.filteredPeople);

  const [active, setActive] = useState(false || filteredPeople.includes(name));
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setActive(!active);
    if (!active) {
      dispatch(updateFilteredPeople(name));
    } else {
      dispatch(removeFilteredPeople(name));
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

export default PeopleName;
