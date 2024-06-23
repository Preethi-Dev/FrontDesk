import React from "react";
import PeopleName from "./PeopleName";
import { nanoid } from "nanoid";
import { useAppSelector } from "@/lib/hooks";

const PeopleList = () => {
  const searchResult = useAppSelector((state) => state.people.searchResult);
  const filteredPeople = useAppSelector((state) => state.people.filteredPeople);

  return (
    <div className="flex flex-col gap-2">
      {filteredPeople.map((name) => (
        <PeopleName name={name} key={nanoid()} />
      ))}
      {searchResult.map(
        (name) =>
          !filteredPeople.includes(name) && (
            <PeopleName name={name} key={nanoid()} />
          )
      )}
    </div>
  );
};

export default PeopleList;
