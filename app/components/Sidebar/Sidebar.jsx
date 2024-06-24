"use client";

//components
import MenuItem from "./MenuItem";
import Header from "./Header";
import UserProfile from "./UserProfile";
import TimeLocation from "./TimeLocation";
import HelpCenter from "./HelpCenter";
import DashboardMenuItem from "./DashboardMenuItem";

// import icons
import Inbox from "../../assets/icons/inbox.svg";
import Subscription from "../../assets/icons/subscription.svg";

//import store provider
import StoreProvider from "../../StoreProvider";

export default function Sidebar() {
  return (
    <div className="flex flex-col p-2  h-screen bg-primaryBg">
      <Header />
      <div className="flex flex-col gap-6 p-2 flex-grow">
        <TimeLocation />
        <div className="flex flex-col flex-grow">
          <MenuItem icon={Inbox} name={"Orders"} />
          <MenuItem icon={Subscription} name={"Subscriptions"} />
          <MenuItem icon={Inbox} name={"Calendar"} />
          <MenuItem icon={Inbox} name={"Waitlist"} />
          <DashboardMenuItem />
        </div>
      </div>
      <UserProfile />
      <HelpCenter />
    </div>
  );
}
