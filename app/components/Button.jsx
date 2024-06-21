import Image from "next/image";

const Button = ({ icon, label }) => {
  return (
    <div className=" text-stone-700 inline-flex gap-2 py-[6px] px-3 rounded-md bg-stale-100 ">
      <Image src={icon} alt="icon" />
      <p className="text-xs font-medium">{label}</p>
    </div>
  );
};

export default Button;
