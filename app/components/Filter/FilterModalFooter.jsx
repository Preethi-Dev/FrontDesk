"use client";

import { applyFilter, toggleFilterOpen } from "@/lib/filterSlice";
import { useAppDispatch } from "@/lib/hooks";
import { emptyFilteredPeople } from "@/lib/peopleSlice";
import { clearOrder, removeStartEndDate } from "@/lib/scheduleSlice";
import {
  emptyFilteredService,
  removeServiceTypeStatus,
} from "@/lib/serviceSlice";

const FilterModalFooter = () => {
  const dispatch = useAppDispatch();

  const handleApplyClick = () => {
    dispatch(applyFilter(true));
    dispatch(toggleFilterOpen());
  };
  const handleResetClick = () => {
    dispatch(removeStartEndDate());
    dispatch(emptyFilteredPeople());
    dispatch(emptyFilteredService());
    dispatch(removeServiceTypeStatus());
    dispatch(clearOrder());
    dispatch(toggleFilterOpen());
  };
  return (
    <div className="flex gap-3 justify-end p-3 border-t border-t-stale-200">
      <p
        className="cursor-pointer text-sm text-stale-900 bg-stale-200 rounded-md py-2 px-3"
        onClick={handleResetClick}
      >
        Reset to Default
      </p>
      <p
        className="cursor-pointer text-sm bg-stale-900 text-stale-200 rounded-md py-2 px-3"
        onClick={handleApplyClick}
      >
        Apply
      </p>
    </div>
  );
};

export default FilterModalFooter;
