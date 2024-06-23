"use client";

import { nanoid } from "nanoid";
import Image from "next/image";

//components
import ChevronDown from "../assets/icons/chevron-down.svg";

//icons
import Check from "../assets/icons/check.svg";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Dropdown = ({ children, menu, action }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [activeItemKey, setActiveItemKey] = useState(menu[0].key);
  const [isReveal, setIsReveal] = useState(false);
  const dropdownRef = useRef();

  const dispatch = useAppDispatch();
  const dateOrder = useAppSelector((state) => state.schedule.dateOrder);

  console.log(dateOrder);
  const handleDropdownClick = (e) => {
    setIsReveal(!isReveal);
  };

  const handleClick = (e) => {
    const clickedItem = menu.find((item) => item.label === e.target.innerText);
    if (clickedItem) {
      setActiveItemKey(clickedItem.key);
      setActiveItem(clickedItem.label);
      setIsReveal(!isReveal);
      dispatch(action(clickedItem.label));
    }
  };
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsReveal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div
        onClick={handleDropdownClick}
        className="flex justify-between gap-2 py-2 px-3 rounded-md border border-stale-200 cursor-pointer"
      >
        <p className="text-sm">{dateOrder || children}</p>
        <Image src={ChevronDown} alt="icon" />
      </div>
      {isReveal && (
        <div
          onClick={handleClick}
          className="flex flex-col p-2 h-[232px] overflow-scroll rounded-md border-b border-stale-200"
        >
          {menu.map((item) => (
            <div
              key={nanoid()}
              className="flex justify-between cursor-pointer transition-[background-color] hover:bg-slate-100"
            >
              <p className="text-sm p-[6px]  text-stale-700 ">{item.label}</p>
              {item.key === activeItemKey && (
                <Image src={Check} alt="icon" className="text-stale-700" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
