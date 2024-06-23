import React from "react";

const Content = ({ items, activeKey }) => {
  const currentContent = items.find((item) => item.key === activeKey).children;
  return <div className="flex-grow">{currentContent}</div>;
};

export default Content;
