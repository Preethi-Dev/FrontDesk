import datas from "@/db/data.json";

const generateColumnContent = (title) => {
  return datas.tableData.map((data) => data[title]);
};

export default generateColumnContent;
