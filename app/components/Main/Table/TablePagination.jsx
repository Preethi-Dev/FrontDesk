import TablePageNo from "./TablePageNo";

const TablePagination = () => {
  return (
    <div className="flex gap-1 items-center px-3 py-1">
      <div className="flex gap-2 px-2 py-1 items-center">
        <p>{"<"}</p>
        <p className="text-xs font-medium">Previous</p>
      </div>
      <TablePageNo number={1} />
      <TablePageNo number={2} active={true} />
      <TablePageNo number={3} />
      <div className="flex gap-2 px-2 py-1 items-center">
        <p className="text-xs font-medium">Next</p>
        <p>{">"}</p>
      </div>
    </div>
  );
};

export default TablePagination;
