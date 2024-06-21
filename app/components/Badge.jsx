import React from "react";

const Badge = ({ title, count, active = false }) => {
  return (
    <div
      className={`flex gap-[6px] flex-grow items-center border ${
        active ? "border-stale-500" : "border-stale-100"
      }  py-[10px] px-3 max-w-[380px]`}
      style={{ borderRadius: "6px" }}
    >
      <p className="text-xs font-semibold">{title}</p>
      <p
        className="text-[10px] font-medium text-stale-500"
        style={{ lineHeight: 0 }}
      >
        {count}
      </p>
    </div>
  );
};

export default Badge;
