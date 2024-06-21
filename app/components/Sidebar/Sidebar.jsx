import Image from "next/image";

//components
import MenuItem from "./MenuItem";
import Header from "./Header";
import UserProfile from "./UserProfile";
import TimeLocation from "./TimeLocation";
import HelpCenter from "./HelpCenter";

// import icons
import Inbox from "../../assets/icons/inbox.svg";
import Subscription from "../../assets/icons/subscription.svg";

export default function Sidebar() {
  return (
    <div className="flex flex-col p-2 min-w-[228px] h-screen bg-primaryBg">
      <Header />
      <div className="flex flex-col gap-6 p-2 flex-grow">
        <TimeLocation />
        <div className="flex flex-col flex-grow">
          <MenuItem icon={Inbox} name={"Orders"} />
          <MenuItem icon={Subscription} name={"Subscriptions"} />
          <MenuItem icon={Inbox} name={"Calendar"} />
          <MenuItem icon={Inbox} name={"Waitlist"} />
          <div className="flex gap-2 text-stale p-2 cursor-pointer mt-auto">
            <Image src={Inbox} alt="icon" />
            <p className="text-[12px]">Dashboard</p>
            <Image src={Inbox} alt="link" className="ml-auto" />
          </div>
        </div>
      </div>
      <UserProfile />
      <HelpCenter />
    </div>
  );
}
