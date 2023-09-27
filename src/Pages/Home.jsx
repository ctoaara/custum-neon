import React from "react";
import girl from "../Images/custom2.jpg";
import fryd from "../Images/custom1.jpg";
import number from "../Images/OneToFive.jpg";
import mid1 from "../Images/custom3.jpg";
import mid2 from "../Images/custom3mobilelandscape.jpg";
import mid3 from "../Images/custom3mob.jpg";
import FAQ from "../components/FAQ";
import videoimg from "../Images/videoimage.jpg";
import CardData from "../Mock/CardData";
import Highlights from "../components/Highlights";
import { Button } from "@mui/material";
import Text from "../components/Text";
// import Text2 from "../components/Text2";
import { CreateTextLandscape } from "../components/Mobile/containers";

const Home = () => {
  return (
    <>
      <Text />
      <div className="flex flex-col lg:hidden ">
        <CreateTextLandscape />
      </div>

      {/* <TextEditor /> */}
      {/* <Text2/> */}
      <div className="flex lg:flex-row flex-col justify-center items-center p-5  gap-5">
        <div className="flex w-full gap-5">
          <Button className="!bg-[#f4f4f4] !text-black !font-[600] w-full lg:!text-lg  !rounded-lg">
            Need Help? Get a Quote
          </Button>
          <Button className="!bg-[#f4f4f4] !text-black !font-[600] w-full lg:!text-lg  !rounded-lg">
            Upload image or Logo{" "}
          </Button>
        </div>

        <Button className="!bg-[#f4f4f4] !text-black !font-[600] lg:w-1/2 w-full lg:!text-lg  !rounded-lg">
          Save/Send my Design
        </Button>
      </div>
      <div className=" flex flex-col justify-center  items-center gap-5 pb-5 bg-white">
        <div className="font-poppins">
          <p className="text-[40px] uppercase text-[#FF7AC7] pt-10 font-[600] text-center mx-2 leading-10 ">
            Create a Custom Neon® sign in 5 easy steps
          </p>
        </div>
        <img src={videoimg} alt="" />
        <img
          src={number}
          width={1200}
          alt="one-five"
          className="lg:flex  hidden p-5"
        />
      </div>
      <div>
        <img src={mid1} alt="" className="object-cover max-lg:hidden" />
        <img src={mid2} alt="" className="max-md:hidden lg:hidden" />
        <img src={mid3} alt="" className="md:hidden" />
      </div>
      <div
        className="flex flex-col  bg-fixed bg-center gap-[600px] bg-cover bg-no-repeat w-screen"
        style={{
          backgroundImage: `url(${girl})`,
        }}
      >
        <Highlights />
        <div
          className="flex flex-col  bg-fixed bg-center gap-[800px] bg-cover bg-no-repeat w-screen"
          style={{
            backgroundImage: `url(${fryd})`,
          }}
        >
          <CardData />

          <FAQ />
        </div>
      </div>
    </>
  );
};

export default Home;
