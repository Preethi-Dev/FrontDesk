import SearchBox from "./SearchBox";
import PeopleList from "./PeopleList";

const PeopleContent = () => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <SearchBox />
      <PeopleList />
    </div>
  );
};

export default PeopleContent;
