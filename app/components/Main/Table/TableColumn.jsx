"use client";

import React from "react";
import { nanoid } from "nanoid";

//component
import TableHeadItem from "./TableHeadItem";
import TableDataItem from "./TableDataItem";

const TableColumn = ({ title, icon, contents = [] }) => {
  return (
    <div className="inline-flex flex-col">
      <div className="py-2 px-4 bg-stale-50">
        <TableHeadItem title={title} icon={icon} />
      </div>
      <div>
        {contents.map((content) => (
          <TableDataItem key={nanoid()} content={content} />
        ))}
      </div>
    </div>
  );
};

export default TableColumn;
