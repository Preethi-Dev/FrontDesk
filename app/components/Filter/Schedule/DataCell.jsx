import React from "react";

const DataCell = ({ calendarDay }) => {
  return (
    <div
      className={`w-8 h-8 text-sm flex justify-center items-center rounded-md cursor-pointer ${
        calendarDay.currentMonth ? "text-gray-900" : "text-gray-300"
      } ${calendarDay.selected && "bg-stale-900 text-stale-200"} ${
        calendarDay.date.getTime() === new Date().getTime && "bg-stale-200"
      } hover:border border-stale-100`}
    >
      {calendarDay.number}
    </div>
  );
};

export default DataCell;
