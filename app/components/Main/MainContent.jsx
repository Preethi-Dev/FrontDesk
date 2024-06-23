import MainHeader from "./MainHeader";
import Table from "./Table/Table";

// store provider
import StoreProvider from "../../StoreProvider";

const MainContent = () => {
  return (
    <div className="flex-grow p-2">
      <StoreProvider>
        <MainHeader />
        <Table />
      </StoreProvider>
    </div>
  );
};

export default MainContent;
