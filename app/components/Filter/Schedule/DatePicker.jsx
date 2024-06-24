//icons
import Image from "next/image";
import calendar from "../../../assets/icons/calendar.svg";
import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import { useDispatch } from "react-redux";

export const DatePicker = ({ title, action, selectedDate }) => {
  const [date, setDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    date && setIsCalendarOpen(!isCalendarOpen);
    date && dispatch(action(date));
  }, [date]);

  return (
    <div className="relative inline-flex flex-col gap-2 flex-grow">
      <p className="text-xs font-medium">{title}</p>
      <div
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        className="flex gap-2 px-4 py-2 border border-stale-200 rounded-md cursor-pointer"
      >
        <Image src={calendar} alt="icon" />
        <p className="text-sm text-stale-700">
          {selectedDate || "Pick a date"}
        </p>
      </div>
      {isCalendarOpen && <Calendar setDate={setDate} />}
    </div>
  );
};
