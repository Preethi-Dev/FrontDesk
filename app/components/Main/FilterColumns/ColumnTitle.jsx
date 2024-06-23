"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  cancelReset,
  removeColumns,
  updateColumns,
} from "@/lib/filterColumnSlice";

const ColumnTitle = ({ title }) => {
  const [checked, setChecked] = useState(true);
  const dispatch = useAppDispatch();
  const reset = useAppSelector((state) => state.filterColumn.reset);
  const columns = useAppSelector((state) => state.filterColumn.columns);
  useEffect(() => {
    if (reset) {
      setChecked(true);
    }
  }, [reset]);

  useEffect(() => {
    if (!columns.includes(title)) {
      setChecked(false);
    }
  }, []);

  return (
    <div className="flex gap-2 items-center max-w-[242px]">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          dispatch(cancelReset());
          setChecked(!checked);
          !checked && dispatch(updateColumns(title));
          checked && dispatch(removeColumns(title));
        }}
        value={title}
        className="w-4 h-4 accent-stale-900 cursor-pointer"
      />
      <p className="text-sm flex-grow text-stale-700 items-center px-3 py-[6px] border border-stale-200 rounded-md">
        {title}
      </p>
    </div>
  );
};

export default ColumnTitle;
