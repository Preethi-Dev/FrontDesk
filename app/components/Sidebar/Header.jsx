import logo from "../../assets/images/logo.svg";
import columns from "../../assets/images/columns.svg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex gap-2 p-2 items-center">
      <Image src={logo} alt="front desk logo" />
      <h1 className="text-[18px]">Front·Desk</h1>
      <div className="ml-auto cursor-pointer">
        <Image src={columns} alt="columns icon" />
      </div>
    </div>
  );
}
