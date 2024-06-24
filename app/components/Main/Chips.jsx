import Image from "next/image";
import React from "react";

//icons
import Close from "../../assets/icons/close.svg";

const Chips = ({ name = "helo" }) => {
  return (
    <div className="flex gap-2 items-center bg-slate-100 px-3 py-1 rounded-md">
      <p className="text-sm text-stale-500">{name}</p>
      <Image src={Close} alt="close-icon" />
    </div>
  );
};

export default Chips;
