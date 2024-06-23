import Image from "next/image";
import { useAppSelector } from "../../../lib/hooks";

//icons
import Inbox from "../../assets/icons/inbox.svg";

const DashboardMenuItem = () => {
  const isCollapse = useAppSelector((state) => state.config.isCollapse);

  return (
    <div
      className={`flex gap-2 text-stale p-2 cursor-pointer mt-auto ${
        isCollapse && "justify-center"
      }`}
    >
      {!isCollapse && (
        <>
          <Image src={Inbox} alt="icon" />
          <p className="text-[12px] mr-auto">Dashboard</p>
        </>
      )}
      <Image src={Inbox} alt="link" />
    </div>
  );
};

export default DashboardMenuItem;
