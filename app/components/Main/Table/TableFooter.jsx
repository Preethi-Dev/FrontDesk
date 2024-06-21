import Image from "next/image";

//icons
import ChervonUpDown from "../../../assets/icons/chevron-up-down.svg";
import TablePagination from "./TablePagination";

const TableFooter = () => {
  return (
    <div className="flex justify-between py-3 px-4">
      <div className="flex items-center gap-[6px] text-sm text-stale-500">
        <p>Displaying</p>
        <div className="flex gap-[6px] px-3 py-[6px] rounded-[6px] bg-stale-50">
          <p>15</p>
          <Image src={ChervonUpDown} alt="icon" />
        </div>
        <p>
          out of <span className="text-black font-semibold">104</span>
        </p>
      </div>
      <TablePagination />
    </div>
  );
};

export default TableFooter;
