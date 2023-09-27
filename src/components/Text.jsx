import React, { useState } from "react";
import landscape1 from "../Images/landscape1.jpg";
import bulbSvg from "../Images/light-bulb-svgrepo-com.svg";
import { ColorSelector } from "./Mobile/ColorSelector";
import { COLORS, FONTS, LANDSCAPE_BG_PATH } from "../components/Mobile/constants";



const Text = () => {
  const [inputText, setInputText] = useState("");
  const [fontFamily, setFontFamily] = useState("Arial");
  // const [textColor, setTextColor] = useState("black");
  const [color, setColor] = useState();
  

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFontChange = (newFont, ) => {
    setFontFamily(newFont);
    
  };

  const handleColorChange = (newColor) => {
    // setTextColor(newColor);
  };
  const fontButtons = [
    {
      font: "Alexa",
      id: 1,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/alexa.svg",
    },
    {
      font: "barcelona",
      id: 2,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/barcelona.svg",
    },
    {
      font: "bayview",
      id: 3,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/bayview.svg",
    },
    {
      font: "amsterdam",
      id: 4,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/amsterdam.svg",
    },
    {
      font: "greenworld",
      id: 5,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/greenworld.svg",
    },
    {
      font: "newcursive",
      id: 6,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/newcursive.svg",
    },
    {
      font: "vintage",
      id: 7,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/vintage.svg",
    },
    {
      font: "venetian",
      id: 8,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/venetian.svg",
    },
    {
      font: "amanda",
      id: 9,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/amanda.svg",
    },
    {
      font: "austin",
      id: 10,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/austin.svg",
    },
    {
      font: "beachfront",
      id: 11,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/beachfront.svg",
    },
    {
      font: "chelsea",
      id: 12,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/chelsea.svg",
    },
    {
      font: "freehand",
      id: 13,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/freehand.svg",
    },
    {
      font: "freespirit",
      id: 14,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/freespirit.svg",
    },
    {
      font: "lovenote",
      id: 15,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/lovenote.svg",
    },
    {
      font: "neonscript",
      id: 16,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/neonscript.svg",
    },
    {
      font: "northshore",
      id: 17,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/northshore.svg",
    },
    {
      font: "photogenic",
      id: 18,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/photogenic.svg",
    },
    {
      font: "royalty",
      id: 19,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/royalty.svg",
    },
    {
      font: "rocket",
      id: 20,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/rocket.svg",
    },
    {
      font: "signature",
      id: 21,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/signature.svg",
    },
    {
      font: "sorrento",
      id: 22,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/sorrento.svg",
    },
    {
      font: "wildscript",
      id: 23,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/wildscript.svg",
    },
    {
      font: "avante",
      id: 24,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/avante.svg",
    },
    {
      font: "buttercup",
      id: 25,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/buttercup.svg",
    },
    {
      font: "classictype",
      id: 26,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/classictype.svg",
    },
    {
      font: "typewriter",
      id: 27,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/typewriter.svg",
    },
    {
      font: "melbourne",
      id: 28,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/melbourne.svg",
    },
    {
      font: "neotokyo",
      id: 29,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/neotokyo.svg",
    },
    {
      font: "monaco",
      id: 30,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/monaco.svg",
    },
    {
      font: "waikiki",
      id: 31,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/waikiki.svg",
    },
    {
      font: "bellview",
      id: 32,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/bellview.svg",
    },
    {
      font: "loveneon",
      id: 33,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/loveneon.svg",
    },
    {
      font: "marquee",
      id: 34,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/marquee.svg",
    },
    {
      font: "mayfair",
      id: 35,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/mayfair.svg",
    },
    {
      font: "neonglow",
      id: 36,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/neonglow.svg",
    },
    {
      font: "neonlite",
      id: 37,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/neonlite.svg",
    },
    {
      font: "neontrace",
      id: 38,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/neontrace.svg",
    },
    {
      font: "nevada",
      id: 39,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/nevada.svg",
    },
    {
      font: "scifi",
      id: 40,
      imageUrl:
        "https://customneon.com/create-neon-sign/images/fonts/scifi.svg",
    },
    
  ];
  return (
    <>
      
      <div
        className="flex lg:flex-row  justify-end flex-col mt-5 bg-cover   bg-center bg-no-repeat relative "
        style={{
          backgroundImage: `url(${landscape1})`,
        }}
      >
        <div className="text-5xl lg:flex md:hidden hidden bg-white bg-opacity-60 backdrop:blur-md p-5 rounded-lg relative right-[28%] items-center mt-96 h-20 ">
          
            <p
              style={{
                fontFamily: fontFamily,
                color: color?.value,
              }}
            >
              {" "}
              {inputText || "Your Text."}
            </p>
        
        </div>
        
        <div className="lg:flex md:hidden hidden flex-col gap-5  w-[450px]  bg-white  ">
          <div className="">
            <div className="flex  flex-col p-2 gap-2    items-center ">
              <span className="font-bold uppercase  font-poppins text-xl">
                Enter your text
              </span>
              <p className="text-lg">
                you can also{" "}
                <span className="text-[#5761ff]">upload an image</span> or get{" "}
                <span className="text-[#5761ff]">help</span>
              </p>
              <textarea
                className="bg-[#f5f5f5] border outline-none w-full resize-none p-6 rounded-xl text-center placeholder:text-center focus:shadow-custom-shadow-1"
                placeholder={`ENTER TEXT HERE\nPress Enter/Return for a new line`}
                value={inputText}
                onChange={handleTextChange}
              ></textarea>
            </div>
          </div>
          <p className="text-[17px] text-center font-poppins font-[600]">
            Choose Font
          </p>
          <div className="grid grid-cols-4 gap-2 w-min-[450px] p-2">
            {fontButtons.map((button) => (
              <button
                key={button.id}
                className={`${
                  fontFamily === button.font ? "bg-pink-600 text-white" : "!bg-white"
                } hover:!bg-[#5761ff] rounded border  shadow p-2 text-xl`}
                onClick={() => handleFontChange(button.font)}

                style={{fontFamily:button.font}}
              >
                <img
                  src={button.imageUrl}
                  alt={`${button.font}`} />
              </button>
            ))}
          </div>
          <p className="text-[17px] text-center font-poppins font-[600]">
            Choose Color
          </p>
          
          <div className="flex-col  justify-center items-center">
          <div className="bg-white  flex gap-5 rounded-full w-12 h-12 p-2 ">
            <img
              src={bulbSvg}
              alt="Bulb"
              onClick={() => handleColorChange("yellow")}
              className="w-full h-full cursor-pointer bg-yellow-300 rounded-lg"
            />{" "}
            <img
              src={bulbSvg}
              alt="Bulb"
              onClick={() => handleColorChange("red")}
              className="w-full h-full cursor-pointer bg-red-600 rounded-lg"
            />{" "}
            <img
              src={bulbSvg}
              alt="Bulb"
              onClick={() => handleColorChange("green")}
              className="w-full h-full cursor-pointer bg-green-600 rounded-lg"
            />{" "}
            <img
              src={bulbSvg}
              alt="Bulb"
              onClick={() => handleColorChange("blue")}
              className="w-full h-full cursor-pointer bg-blue-600 rounded-lg"
            />{" "}
            <img
              src={bulbSvg}
              alt="Bulb"
              onClick={() => handleColorChange("pink")}
              className="w-full h-full cursor-pointer bg-pink-600 rounded-lg"
            />
           
          </div><div className="bg-white  flex gap-5 rounded-full w-12 h-12 p-2 ">
            <img
              src={bulbSvg}
              alt="Bulb"
              onClick={() => handleColorChange("yellow")}
              className="w-full h-full cursor-pointer bg-yellow-300 rounded-lg"
            />{" "}
            <img
              src={bulbSvg}
              alt="Bulb"
              onClick={() => handleColorChange("red")}
              className="w-full h-full cursor-pointer bg-red-600 rounded-lg"
            />{" "}
            <img
              src={bulbSvg}
              alt="Bulb"
              onClick={() => handleColorChange("green")}
              className="w-full h-full cursor-pointer bg-green-600 rounded-lg"
            />{" "}
            <img
              src={bulbSvg}
              alt="Bulb"
              onClick={() => handleColorChange("blue")}
              className="w-full h-full cursor-pointer bg-blue-600 rounded-lg"
            />{" "}
            <img
              src={bulbSvg}
              alt="Bulb"
              onClick={() => handleColorChange("pink")}
              className="w-full h-full cursor-pointer bg-pink-600 rounded-lg"
            />
           
          </div>
          </div>
          <ColorSelector colors={ COLORS} selected={color}
              onSelect={(color) => setColor(color)}/>
              {/* onSelect={(color) => console.log(color)}/> */}
        </div>
      </div>
    </>
  );
};

export default Text;
