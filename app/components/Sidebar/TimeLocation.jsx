import Image from "next/image";

//icons
import Arrow from "../../assets/icons/arrow-left-right.svg";
import Globe from "../../assets/icons/globe.svg";
import ChervonDown from "../../assets/icons/chevron-down.svg";

const TimeLocation = () => {
  const shadowStyle = {
    background: "#FFF",
    borderRadius: "6px",
    boxShadow: "0px 4px 8px rgba(100, 116, 139, 0.1)",
  };
  return (
    <div>
      <div className="flex justify-between p-2" style={shadowStyle}>
        <p className="text-[12px]">Location Name</p>
        <Image src={Arrow} alt="arrow" />
      </div>
      <div
        className="flex flex-col gap-2 py-2 px-3 bg-stale-100 mx-1"
        style={{
          boxShadow: "0px 1px 1px 0px rgba(100, 116, 139, 0.05)",
          borderRadius: "4px",
        }}
      >
        <p className="flex gap-2 items-baseline">
          <span className="text-base font-bold">08:30 AM</span>
          <span className="text-[14px]">Tue 20 Jan</span>
        </p>
        <div className="flex gap-1 items-center">
          <Image src={Globe} alt="icon" />
          <p className="text-[10px]" style={{ lineHeight: 0 }}>
            UTC: +5 hours
          </p>
          <Image src={ChervonDown} alt="icon" className="ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default TimeLocation;
