import Image from "next/image";
import React from "react";

const TableHeadItem = ({ title, icon }) => {
  return (
    <div className="inline-flex gap-[6px] items-center flex-grow min-w-[146px]">
      <Image src={icon} alt="icon" />
      <p className="text-xs text-stale-500">{title}</p>
    </div>
  );
};

export default TableHeadItem;
