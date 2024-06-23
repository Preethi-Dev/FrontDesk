"use client";
import Image from "next/image";

//selector
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

// components
import Badge from "../Badge";
import Button from "../Button";
import TextField from "../TextField";

//icons
import Filter from "../../assets/icons/filter.svg";
import Refresh from "../../assets/icons/refresh.svg";
import Download from "../../assets/icons/download.svg";
import Column from "../../assets/icons/column-outlined.svg";
import FilterColumnModal from "./FilterColumns/FilterColumnModal";
import { toggleFilterColumnReveal } from "@/lib/configSlice";

const MainHeader = () => {
  const isFilterColumnReveal = useAppSelector(
    (state) => state.config.isFilterColumnReveal
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2 className="text-xl font-semibold py-3 px-4 text-stale-700">
        Waitlist
      </h2>
      <div className="flex flex-col gap-4 px-4 py-3">
        <div className="flex gap-4 ">
          <Badge title={"All Waitlists"} count={200} active={true} />
          <Badge title={"Newly Added"} count={50} />
          <Badge title={"Leads"} count={20} />
        </div>
        <div className="flex justify-between items-center gap-4 relative">
          <Button label={"Add Filter"} icon={Filter} />
          <div className="ml-auto flex gap-4 text-stale-700">
            <TextField />
            <Image src={Refresh} alt="icon" />
            <Image
              src={Column}
              alt="icon"
              className="cursor-pointer"
              onClick={() => dispatch(toggleFilterColumnReveal())}
            />
            <Image src={Download} alt="icon" />
          </div>
          {isFilterColumnReveal && (
            <div className="absolute top-[44px] right-[12px]">
              <FilterColumnModal />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
