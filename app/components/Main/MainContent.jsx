import MainHeader from "./MainHeader";
import Table from "./Table/Table";

const MainContent = () => {
  return (
    <div className="flex-grow p-2">
      <MainHeader />
      <Table />
    </div>
  );
};

export default MainContent;
