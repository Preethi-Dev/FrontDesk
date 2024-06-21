import React from "react";

const TableDataItem = ({ content }) => {
  return (
    <p className="flex-grow w-max min-w-[146px] text-xs font-medium p-4 text-gray-700">
      {content}
    </p>
  );
};

export default TableDataItem;
