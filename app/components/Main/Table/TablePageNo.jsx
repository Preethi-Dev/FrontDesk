import React from "react";

const TablePageNo = ({ number, active = false }) => {
  const activeStyles = {
    borderRadius: "6px",
    border: "1px solid #E2E8F0",
    background: "rgba(255, 255, 255, 0.00)",
  };

  const stylesToApply = active ? activeStyles : {};
  return (
    <p className="text-xs font-medium px-3 py-1" style={stylesToApply}>
      {number}
    </p>
  );
};

export default TablePageNo;
