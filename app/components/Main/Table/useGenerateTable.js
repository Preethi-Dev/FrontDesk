import { nanoid } from "nanoid";

//selector
import { useAppSelector } from "@/lib/hooks";

//data
import data from "@/db/data.json";

//icons
import Globe from "../../../assets/icons/globe.svg";

//components
import TableColumn from "./TableColumn";
import generateColumnContent from "./generateColumnContent";

const useGenerateTable = () => {
  const filteredColumns = useAppSelector((state) => state.filterColumn.columns);

  const titles = Object.keys(data.tableData[0]);
  return titles.map(
    (title) =>
      filteredColumns.includes(title) && (
        <TableColumn
          title={title}
          icon={Globe}
          contents={generateColumnContent(title)}
          key={nanoid()}
        />
      )
  );
};

export default useGenerateTable;
