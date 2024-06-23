import Image from "next/image";
import { useAppSelector } from "../../../lib/hooks";

//images
import Avatar from "../../assets/images/avatar.svg";

//icons
import ChervonDown from "../../assets/icons/chevron-down.svg";

const UserProfile = () => {
  const isCollapse = useAppSelector((state) => state.config.isCollapse);

  return (
    <div
      className={`flex  gap-2 py-[10px] px-2 text-[12px] ${
        isCollapse ? "justify-center" : "justify-between"
      } bg-white`}
      style={{
        boxShadow: "0px 1px 1px 0px rgba(100, 116, 139, 0.05)",
        borderRadius: "6px",
      }}
    >
      <Image src={Avatar} alt="avatar" />
      {!isCollapse && (
        <>
          <div>
            <p>Admin name</p>
            <p className="text-stale-500">adminname@mail.com</p>
          </div>
          <Image src={ChervonDown} alt="avatar" />
        </>
      )}
    </div>
  );
};

export default UserProfile;
