import React from "react";
import DataCell from "./DataCell";
import { nanoid } from "nanoid";

const CalendarDays = (props) => {
  let firstDayOfMonth = new Date(
    props.day.getFullYear(),
    props.day.getMonth(),
    1
  );
  let weekDayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];

  //loop through 42 days (6 weeks)
  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekDayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekDayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }
  return (
    <div className="inline-flex flex-wrap gap-2">
      {currentDays.map((day) => (
        <div key={nanoid()} onClick={() => props.changeCurrentDay(day)}>
          <DataCell calendarDay={day} />
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
