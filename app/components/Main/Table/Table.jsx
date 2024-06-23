"use client";

import React, { useEffect, useState } from "react";
import TableColumn from "./TableColumn";

//icons
import Globe from "../../../assets/icons/globe.svg";
import TableFooter from "./TableFooter";
import { useAppSelector } from "@/lib/hooks";
import useGenerateTable from "./useGenerateTable";

const Table = () => {
  const isCollapse = useAppSelector((state) => state.config.isCollapse);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const Table = useGenerateTable();

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.floor(window.innerWidth - (228 + 24 * 2)));
      setHeight(Math.floor(window.innerHeight - 239));
    };

    // Set the initial width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isCollapse]);

  console.log(width, height);

  return (
    <div className="px-4 py-3">
      <div
        className="flex overflow-scroll"
        style={{
          width: `${width}px`,
          minWidth: "100%",
          height: `${height}px`,
        }}
      >
        {Table}
      </div>
      <TableFooter />
    </div>
  );
};

export default Table;
