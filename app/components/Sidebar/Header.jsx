"use client";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { toggleCollapse } from "../../../lib/configSlice";

//icons
import logo from "../../assets/images/logo.svg";
import columns from "../../assets/images/columns.svg";

export default function Header() {
  const dispatch = useAppDispatch();
  const isCollapse = useAppSelector((state) => state.config.isCollapse);

  return (
    <div className="flex gap-2 p-2 items-center justify-center">
      <Image
        src={logo}
        alt="front desk logo"
        className="cursor-pointer"
        onClick={() => dispatch(toggleCollapse())}
      />
      {!isCollapse && (
        <>
          <h1 className="text-[18px]">Front·Desk</h1>
          <div
            className="ml-auto cursor-pointer"
            onClick={() => dispatch(toggleCollapse())}
          >
            <Image src={columns} alt="columns icon" />
          </div>
        </>
      )}
    </div>
  );
}
