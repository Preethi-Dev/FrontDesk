import Image from "next/image";
import React from "react";

export const MenuItem = ({ title, Icon, count, active = false }) => {
  return (
    <div
      className={`flex gap-2 items-center p-2 cursor-pointer rounded-md ${
        active && "bg-stale-200"
      }`}
    >
      <Image src={Icon} alt="icon" />
      <p className="text-sm font-medium">{title}</p>
      {count && (
        <p className="text-sm font-normal text-stale-500 ml-auto">{count}</p>
      )}
    </div>
  );
};
