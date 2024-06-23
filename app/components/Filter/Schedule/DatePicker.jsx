//icons
import Image from "next/image";
import Calendar from "../../../assets/icons/calendar.svg";

export const DatePicker = ({ title }) => {
  return (
    <div className="flex flex-col gap-2 flex-grow">
      <p className="text-xs font-medium">{title}</p>
      <div className="flex gap-2 px-4 py-2 border border-stale-200 rounded-md cursor-pointer">
        <Image src={Calendar} alt="icon" />
        <p className="text-sm text-stale-700">Pick a date</p>
      </div>
    </div>
  );
};
