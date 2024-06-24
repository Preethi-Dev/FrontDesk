import React from "react";
import generateStatusColor from "./generateStatusColor";

const Badge = ({ data, status = false }) => {
  return (
    <div
      className={`text-[10px] font-medium py-1 px-2 bg-stale-50 rounded-[4px] ${
        status ? generateStatusColor(data) : "text-neutral-600"
      }`}
    >
      {data}
    </div>
  );
};

export default Badge;
