import React, { useState } from "react";
import { months, weekdays } from "./Calendar.helper";
import { nanoid } from "nanoid";
import CalendarDays from "./CalendarDays";

const Calendar = ({ setDate }) => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(
    months[currentDay.getMonth()]
  );
  const [selectedDate, setSelectedDate] = useState(currentDay.getDate());
  const [selectedYear, setSelectedYear] = useState(currentDay.getFullYear());

  const changeCurrentDay = (day) => {
    setDate(`${day.number} ${months[day.month]} ${day.year}`);
    setSelectedMonth(months[day.month]);
    setSelectedYear(day.year);
    setSelectedDate(day.number);
    setCurrentDay(new Date(day.year, day.month, day.number));
  };

  const shadowStyle = {
    boxShadow:
      "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
  };

  return (
    <div
      style={shadowStyle}
      className="absolute top-16 bg-white inline-flex flex-col gap-3 p-3 border rounded-md border-stale-200"
    >
      <div className="flex justify-between items-center">
        <p
          onClick={() => {
            setCurrentDay(
              new Date(
                currentDay.getFullYear(),
                Number(currentDay.getMonth()) - 1,
                selectedDate
              )
            );
          }}
          className="cursor-pointer text-gray-300 border rounded-xl border-stale-200 px-4 py-3"
        >
          {"<"}
        </p>
        <h2>{months[currentDay.getMonth()]}</h2>
        <p
          onClick={() => {
            setCurrentDay(
              new Date(
                currentDay.getFullYear(),
                Number(currentDay.getMonth()) + 1,
                selectedDate
              )
            );
          }}
          className="cursor-pointer text-gray-300 border rounded-xl border-stale-200 px-4 py-3"
        >
          {">"}
        </p>
      </div>
      <div className="calendar-body flex flex-col gap-2">
        {/*Table Header */}
        <div className="inline-flex gap-2">
          {weekdays.map((weekday) => {
            return (
              <p
                className="w-8 h-8 text-sm inline-flex justify-center items-center text-stale-500"
                key={nanoid()}
              >
                {weekday}
              </p>
            );
          })}
        </div>
        {/*table */}
        <div className="max-w-[272px]">
          <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
