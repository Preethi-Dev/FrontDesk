import { toggleFilterColumnReveal } from "@/lib/configSlice";
import { applyFilter, resetColumns } from "@/lib/filterColumnSlice";
import { useAppDispatch } from "@/lib/hooks";

const FilterColumnFooter = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-3 items-center ">
      <div
        onClick={() => dispatch(resetColumns())}
        className="flex justify-center min-w-[138px] text-sm text-stale-900 px-3 py-2 border rounded-md border-stale-200 cursor-pointer"
      >
        Reset to Default
      </div>
      <div
        onClick={() => {
          dispatch(applyFilter());
          dispatch(toggleFilterColumnReveal());
        }}
        className="flex justify-center min-w-[138px] text-sm bg-stale-900 text-stale-50 px-3 py-2 border rounded-md border-stale-900 cursor-pointer"
      >
        Apply
      </div>
    </div>
  );
};

export default FilterColumnFooter;
