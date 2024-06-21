import Image from "next/image";

const MenuItem = ({ icon, name }) => {
  return (
    <div className="flex gap-2 text-stale p-2 cursor-pointer">
      <Image src={icon} alt="front desk logo" />
      <p className="text-[12px]">{name}</p>
    </div>
  );
};

export default MenuItem;
