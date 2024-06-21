"use client";

import React, { useEffect, useState } from "react";
import TableColumn from "./TableColumn";

//icons
import Globe from "../../../assets/icons/globe.svg";
import TableFooter from "./TableFooter";

const Table = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.floor(window.innerWidth - (228 + 24 * 2)));
      setHeight(Math.floor(window.innerHeight - 239));
    };

    // Set the initial width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(width, height);

  return (
    <div className="px-4 py-3">
      <div
        className="flex overflow-scroll"
        style={{
          maxWidth: `${width}px`,
          maxHeight: `${height}px`,
        }}
      >
        <TableColumn
          title={"Created On"}
          icon={Globe}
          contents={[
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
          ]}
        />
        <TableColumn
          title={"Payer"}
          icon={Globe}
          contents={[
            "Theodore T.C. Calvin",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
            "Hannibal Smith",
          ]}
        />
        <TableColumn
          title={"Status"}
          icon={Globe}
          contents={[
            "Lead",
            "Lead",
            "Lead",
            "Lead",
            "Lead",
            "Lead",
            "Lead",
            "Lead",
            ,
            "Lead",
            ,
            "Lead",
            ,
            "Lead",
            ,
            "Lead",
            ,
            "Lead",
            ,
            "Lead",
            ,
            "Lead",
            ,
            "Lead",
            ,
            "Lead",
            ,
            "Lead",
            ,
            "Lead",
            ,
            "Lead",
            ,
            "Lead",
          ]}
        />

        <TableColumn
          title={"Email"}
          icon={Globe}
          contents={[
            "theodore@gmail.com",
            "hannibalsmith@gmail.com",
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
            ,
            "hannibalsmith@gmail.com",
          ]}
        />

        <TableColumn
          title={"Payer Phone"}
          icon={Globe}
          contents={[
            "+91 966559186876",
            "+91 966559186876",
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
            ,
            "+91 966559186876",
          ]}
        />

        <TableColumn
          title={"Services"}
          icon={Globe}
          contents={[
            "Private Language Session",
            "Swim beginner for class new Sess...",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
            "Fitness Session",
          ]}
        />

        <TableColumn
          title={"Scheduled"}
          icon={Globe}
          contents={[
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
            "Sun, 07 Jan 2024 2:42 PM",
          ]}
        />
      </div>
      <TableFooter />
    </div>
  );
};

export default Table;
