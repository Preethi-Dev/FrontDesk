import Badge from "../Badge";
import Button from "../Button";
import TextField from "../TextField";

//icons
import Filter from "../../assets/icons/filter.svg";
import Image from "next/image";

const MainHeader = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold py-3 px-4 text-stale-700">
        Waitlist
      </h2>
      <div className="flex flex-col gap-4 px-4 py-3">
        <div className="flex gap-4 ">
          <Badge title={"All Waitlists"} count={200} active={true} />
          <Badge title={"Newly Added"} count={50} />
          <Badge title={"Leads"} count={20} />
        </div>
        <div className="flex justify-between items-center gap-4">
          <Button label={"Add Filter"} icon={Filter} />
          <div className="ml-auto flex gap-4 text-stale-700">
            <TextField />
            <div className="p-2">
              <Image src={Filter} alt="icon" />
            </div>
            <div className="p-2">
              <Image src={Filter} alt="icon" />
            </div>
            <div className="p-2">
              <Image src={Filter} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
