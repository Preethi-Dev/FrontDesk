import Image from "next/image";
import { useAppSelector } from "../../../lib/hooks";

const MenuItem = ({ icon, name }) => {
  const isCollapse = useAppSelector((state) => state.config.isCollapse);

  return (
    <div
      className={`flex gap-2 text-stale p-2 cursor-pointer ${
        isCollapse && "justify-center"
      }`}
    >
      <Image src={icon} alt="front desk logo" />
      {!isCollapse && <p className="text-[12px]">{name}</p>}
    </div>
  );
};

export default MenuItem;
