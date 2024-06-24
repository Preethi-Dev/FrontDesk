import MainHeader from "./MainHeader";
import Table from "./Table/Table";

// store provider
import StoreProvider from "../../StoreProvider";

const MainContent = () => {
  return (
    <div className="flex-grow p-2">
      <MainHeader />
      <Table />
    </div>
  );
};

export default MainContent;
