"use client";
import React from "react";
import Dropdown from "../../Dropdown";
import {
  updateEndDate,
  updateOrder,
  updateStartDate,
} from "@/lib/scheduleSlice";
import { DatePicker } from "./DatePicker";
import { useAppSelector } from "@/lib/hooks";

const ScheduleContent = () => {
  const dateOrder = useAppSelector((state) => state.schedule.dateOrder);
  const startDate = useAppSelector((state) => state.schedule.startDate);
  const endDate = useAppSelector((state) => state.schedule.endDate);

  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="flex flex-col gap-2">
        <p className="text-xs text-stale-700 font-medium">Show orders for</p>
        <Dropdown
          menu={[
            {
              key: "0",
              label: "All",
            },
            {
              key: "1",
              label: "Custom",
            },
            {
              key: "2",
              label: "Last 30 days",
            },
            {
              key: "3",
              label: "This month",
            },
            {
              key: "4",
              label: "Last month",
            },
            {
              key: "5",
              label: "This quarter",
            },
            {
              key: "6",
              label: "2 quarter ago",
            },
            {
              key: "7",
              label: "This Year",
            },
            {
              key: "8",
              label: "Last Year",
            },
          ]}
          action={updateOrder}
          currentItem={dateOrder}
        >
          All time
        </Dropdown>
      </div>

      {["All", null].includes(dateOrder) && (
        <div className="flex gap-5">
          <DatePicker
            title={"From"}
            action={updateStartDate}
            selectedDate={startDate}
          />

          <DatePicker
            title={"To"}
            action={updateEndDate}
            selectedDate={endDate}
          />
        </div>
      )}
    </div>
  );
};

export default ScheduleContent;
