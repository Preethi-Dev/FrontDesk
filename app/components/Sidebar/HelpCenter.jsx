import Image from "next/image";

//icons
import HelpCircle from "../../assets/icons/help-circle.svg";

const HelpCenter = () => {
  return (
    <div className="flex gap-2 px-2 py-2">
      <Image src={HelpCircle} alt="help-center icon" />
      <div>
        <p className="text-[12px]">Help center</p>
        <p className="text-[10px] text-stale-500">@2024 Omnify.Inc.</p>
      </div>
    </div>
  );
};

export default HelpCenter;
