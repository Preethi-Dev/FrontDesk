import { useAppSelector } from "@/lib/hooks";
import React from "react";
import Chips from "./Chips";

const ChipsContainer = () => {
  const scheduleFilter = useAppSelector((state) => state.schedule.dateOrder);
  const peopleFilter = useAppSelector((state) => state.people.filteredPeople);
  const serviceFilter = useAppSelector(
    (state) => state.service.filteredService
  );
  const serviceStatus = useAppSelector((state) => state.service.status);
  const serviceType = useAppSelector((state) => state.service.serviceType);
  const isFilterApplied = useAppSelector(
    (state) => state.filter.isFilterApplied
  );

  return (
    <div className="flex gap-2">
      {isFilterApplied &&
        [
          ...peopleFilter,
          ...serviceFilter,
          scheduleFilter,
          serviceStatus,
          serviceType,
        ].map((data, index) => data && <Chips name={data} key={index} />)}
    </div>
  );
};

export default ChipsContainer;
