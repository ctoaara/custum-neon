import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

import classNames from "classnames";
import React, { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(false);

  const HandleOpen = () => setOpen(true);
  
  return (
    <>
      <div className="flex flex-col   bg-white font-poppins  ">
        <span className="text-[#5761ff] font-[600] text-center text-[42px]">FAQs</span>
        <div className="flex lg:flex-row flex-col justify-center  ">
          <div className="flex flex-col p-5 ">
            <div
              onClick={HandleOpen}
              className="bg-white flex flex-col p-1 items-center lg:w-[28rem] shadow-lg"
            >
              <div className="flex justify-between w-full items-center">
                <p className="text-[22px] " onClick={HandleOpen}>
                  How Much Does a Custom Neon® Sign Cost?
                </p>{" "}
                {!open ? <ArrowDownward /> : <ArrowUpward />}
              </div>
              <div className="border  w-full"></div>
              <p className={classNames("hidden p-3 pb-[16%]")}>
                The price for custom LED neon signs start at $112 for a sign
                with two letters. Our handmade LED neon signs, lamps and wall
                decor are affordable and we are very competitive on price! In
                addition to great prices, our experienced team also offers
                unparalleled customer support, from the design stage through to
                delivery and aftercare.
              </p>
            </div>
            <div
              onClick={HandleOpen}
              className="bg-white flex flex-col p-1  items-center lg:w-[28rem] shadow-lg"
            >
              <div className="flex justify-between w-full items-center">
                <p className="text-[22px] ">
                  Why Buy a Neon Light Sign from Custom Neon®?
                </p>
                {!open ? <ArrowDownward /> : <ArrowUpward />}
              </div>
              <div className="border  w-full"></div>

              <p className="hidden p-3 pb-[16%]">
                The price for custom LED neon signs start at $112 for a sign
                with two letters. Our handmade LED neon signs, lamps and wall
                decor are affordable and we are very competitive on price! In
                addition to great prices, our experienced team also offers
                unparalleled customer support, from the design stage through to
                delivery and aftercare.
              </p>
            </div>
            <div
              onClick={HandleOpen}
              className="bg-white flex flex-col p-1 items-center lg:w-[28rem] shadow-lg"
            >
              <div className="flex justify-between w-full items-center">
                <p className="text-[22px] ">
                  How Big Can My Custom-made Neon Be?
                </p>
                {!open ? <ArrowDownward /> : <ArrowUpward />}
              </div>

              <div className="border  w-full"></div>
              <p className="hidden p-3 pb-[16%]">
                The price for custom LED neon signs start at $112 for a sign
                with two letters. Our handmade LED neon signs, lamps and wall
                decor are affordable and we are very competitive on price! In
                addition to great prices, our experienced team also offers
                unparalleled customer support, from the design stage through to
                delivery and aftercare.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-5">
            <div
              onClick={HandleOpen}
              className="bg-white flex flex-col p-1 items-center lg:w-[28rem] shadow-lg"
            >
              <div className="flex justify-between w-full items-center">
                <p className="text-[22px] ">Our Design Service</p>
                {!open ? <ArrowDownward /> : <ArrowUpward />}
              </div>
              <div className="border  w-full"></div>
              <p className="hidden p-3 pb-[16%]">
                The price for custom LED neon signs start at $112 for a sign
                with two letters. Our handmade LED neon signs, lamps and wall
                decor are affordable and we are very competitive on price! In
                addition to great prices, our experienced team also offers
                unparalleled customer support, from the design stage through to
                delivery and aftercare.
              </p>
            </div>
            <div
              onClick={HandleOpen}
              className="bg-white flex flex-col p-1 items-center lg:w-[28rem] shadow-lg"
            >
              <div className="flex justify-between w-full items-center">
                <p className="text-[22px] ">
                  What Neon Light Colors Can I Choose?
                </p>
                {!open ? <ArrowDownward /> : <ArrowUpward />}
              </div>
              <div className="border  w-full"></div>
              <p className="hidden p-3 pb-[16%]">
                The price for custom LED neon signs start at $112 for a sign
                with two letters. Our handmade LED neon signs, lamps and wall
                decor are affordable and we are very competitive on price! In
                addition to great prices, our experienced team also offers
                unparalleled customer support, from the design stage through to
                delivery and aftercare.
              </p>
            </div>
            <div
              onClick={HandleOpen}
              className="bg-white flex flex-col p-1 items-center lg:w-[28rem] shadow-lg"
            >
              <div className="flex justify-between w-full items-center">
                <p className="text-[22px] ">What are the Backboard Options?</p>
                {!open ? <ArrowDownward /> : <ArrowUpward />}
              </div>
              <div className="border  w-full"></div>
              <p className="hidden p-3 pb-[16%]">
                The price for custom LED neon signs start at $112 for a sign
                with two letters. Our handmade LED neon signs, lamps and wall
                decor are affordable and we are very competitive on price! In
                addition to great prices, our experienced team also offers
                unparalleled customer support, from the design stage through to
                delivery and aftercare.
              </p>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default FAQ;
