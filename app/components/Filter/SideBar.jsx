//components
import { useEffect } from "react";
import { MenuItem } from "./MenuItem";

import { nanoid } from "nanoid";
import { useAppDispatch } from "@/lib/hooks";
import { clearPeopleResult } from "@/lib/peopleSlice";
import { clearServiceResult } from "@/lib/serviceSlice";

const SideBar = ({ items, activeKey, setActiveKey }) => {
  const handleClick = (e) => {
    const clickedLabel = e.target.innerText;
    const clickedItem = items.find((item) => item.label === clickedLabel);
    clickedItem && setActiveKey(clickedItem.key);
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearServiceResult());
    dispatch(clearPeopleResult());
  }, [activeKey]);

  return (
    <div
      className="flex flex-col gap-2 p-2 min-w-[214px] border-r border-r-stale-200 bg-stale-50"
      onClick={handleClick}
    >
      {items.map((item, index) => (
        <MenuItem
          title={item.label}
          active={item.key === activeKey}
          Icon={item.Icon}
          count={item.count}
          key={nanoid()}
        />
      ))}
    </div>
  );
};

export default SideBar;
