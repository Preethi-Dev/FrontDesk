import React from "react";
import ColumnTitle from "./ColumnTitle";
import FilterColumnFooter from "./FilterColumnFooter";

const FilterColumnModal = () => {
  const modalShadowStyle = {
    boxShadow:
      "0px 4px 4px 0px rgba(100, 116, 139, 0.10), 0px 10px 8px 0px rgba(100, 116, 139, 0.04)",
  };
  return (
    <div
      className="flex flex-col gap-4 p-4 max-w-[325px] bg-stale-50 border border-stale-200 rounded-xl"
      style={modalShadowStyle}
    >
      <div className="flex flex-col gap-2">
        <p className="text-base font-semibold">Edit Columns</p>
        <p className="text-sm text-stale-700">
          Select the columns to rearrange
        </p>
      </div>
      <div className="flex flex-col gap-3 h-[300px] overflow-scroll">
        <ColumnTitle title={"Order Created On"} />
        <ColumnTitle title={"Payer"} />
        <ColumnTitle title={"Status"} />
        <ColumnTitle title={"Email"} />
        <ColumnTitle title={"Payer Phone"} />
        <ColumnTitle title={"Service"} />
        <ColumnTitle title={"Scheduled"} />
      </div>
      <FilterColumnFooter />
    </div>
  );
};

export default FilterColumnModal;
