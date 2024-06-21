import Image from "next/image";

//images
import Avatar from "../../assets/images/avatar.svg";

//icons
import ChervonDown from "../../assets/icons/chevron-down.svg";

const UserProfile = () => {
  return (
    <div
      className="flex gap-2 py-[10px] px-2 text-[12px] justify-between bg-white"
      style={{
        boxShadow: "0px 1px 1px 0px rgba(100, 116, 139, 0.05)",
        borderRadius: "6px",
      }}
    >
      <Image src={Avatar} alt="avatar" />
      <div>
        <p>Admin name</p>
        <p className="text-stale-500">adminname@mail.com</p>
      </div>
      <Image src={ChervonDown} alt="avatar" />
    </div>
  );
};

export default UserProfile;
