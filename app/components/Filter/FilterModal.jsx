"use client";
import { useState } from "react";
//components
import SideBar from "./SideBar";
import Content from "./Content";
import ScheduleContent from "./Schedule/ScheduleContent";
import PeopleContent from "./People/PeopleContent";
import ServicesContent from "./Services/ServicesContent";
import FilterModalFooter from "./FilterModalFooter";

//icons
import Calendar from "../../assets/icons/calendar.svg";
import Dashboard from "../../assets/icons/layout-dashboard.svg";
import Users from "../../assets/icons/users.svg";
import StoreProvider from "@/app/StoreProvider";

const FilterModal = () => {
  const items = [
    {
      key: "1",
      label: "Scheduled Date",
      children: <ScheduleContent />,
      Icon: Calendar,
      count: 1,
    },
    {
      key: "2",
      label: "People",
      children: <PeopleContent />,
      Icon: Users,
    },
    {
      key: "3",
      label: "Services / Products",
      children: <ServicesContent />,
      Icon: Dashboard,
    },
  ];
  const [activeKey, setActiveKey] = useState(items[0].key);
  const modalShadowStyle = {
    boxShadow: "0px 25px 25px 0px rgba(100, 116, 139, 0.15)",
  };

  return (
    <div
      className="flex flex-col  bg-white w-[612px] rounded-md"
      style={modalShadowStyle}
    >
      <div className="h-[312px] flex overflow-hidden">
        <SideBar
          items={items}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
        />
        <Content items={items} activeKey={activeKey} />
      </div>
      <FilterModalFooter />
    </div>
  );
};

export default FilterModal;
