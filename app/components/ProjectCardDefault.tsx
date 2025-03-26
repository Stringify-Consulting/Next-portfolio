"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type ProjectCardDefaultProps = {
  title: string;
  description: string;
  highlightedText: string;
  image: string;
  hoverImage: string;
  year: string;
  logo: string;
  hoverLogo: string;
  defaultUpperRectBg: string;
  hoverUpperRectBg: string;
  hoverLowerTextColor: string;
};

const ProjectCardDefault: React.FC<ProjectCardDefaultProps> = ({
  title,
  description,
  highlightedText,
  image,
  hoverImage,
  year,
  logo,
  hoverLogo,
  defaultUpperRectBg,
  hoverUpperRectBg,
  hoverLowerTextColor,
}) => {
  const defaultLowerTextColor = "#ffffff";
  const [upperBg, setUpperBg] = useState(defaultUpperRectBg);
  const [currentImage, setCurrentImage] = useState(image);
  const [currentLogo, setCurrentLogo] = useState(logo);
  const [lowerTextColor, setLowerTextColor] = useState(defaultLowerTextColor);

  return (
    <motion.div
      className="w-full max-w-[408px] h-auto border border-[#2C2C2C] rounded-[20px] p-[8px] bg-[#0D0D0D] flex flex-col"
      onMouseEnter={() => {
        setCurrentImage(hoverImage);
        setCurrentLogo(hoverLogo);
        setUpperBg(hoverUpperRectBg);
        setLowerTextColor(hoverLowerTextColor);
      }}
      onMouseLeave={() => {
        setCurrentImage(image);
        setCurrentLogo(logo);
        setUpperBg(defaultUpperRectBg);
        setLowerTextColor(defaultLowerTextColor);
      }}
    >
      {/* Parent container for rectangles with gap */}
      <div className="flex flex-col gap-[4px] project-card items-center w-full h-full" style={{ backgroundImage: `url(/assets/image.png)` }}>
        {/* Upper Rectangle */}
        <div
          className="w-full rounded-[12px] flex items-center px-4 justify-between h-[48px] border border-[#2C2C2C]"
          style={{ background: upperBg }}
        >
          <h2 className="font-poppins font-normal text-[16px] text-white">
            {title}
          </h2>
          <span className="w-[43px] h-[17px] bg-[#A4A4A4] text-[#A4A4A4] font-['Bruno_Ace'] font-normal text-[14px] leading-[100%] tracking-[-5%] flex items-center justify-center rounded">
            {year}
          </span>
        </div>
        {/* Gap between rectangles */}
        <div className="h-[4px]"></div>
        {/* Lower Inner Rectangle */}
        <div className="w-full aspect-[4/4.5] border border-[#2C2C2C] rounded-[8px] flex flex-col h-full relative">
          <img
            src={currentLogo}
            alt="logo"
            className="w-[32px] h-[32px] logo absolute top-4 left-4"
          />
          <img
            src={currentImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
          />
          <div className="text-center absolute bottom-4 left-0 right-0 px-4">
            <h3
              className="font-poppins font-bold text-[20px] leading-[24px] mb-[8px]"
              style={{ color: lowerTextColor }}
            >
              {description}
            </h3>
            <p
              className="font-poppins font-normal italic text-[20px] leading-[24px]"
              style={{ color: lowerTextColor }}
            >
              {highlightedText}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCardDefault;
