import React from 'react'
import Box from './Box';
import first from "../assets/Box/1.png"
const boxData = [
  {
    title: "Buying Off-Plan Guide",
    imgSrc: first, // Image from public folder
    altText: "Off-plan house model",
  },
  {
    title: "Understanding the Market",
    imgSrc: first,
    altText: "Real estate market trends",
  },
  {
    title: "Financing Your Purchase",
    imgSrc: first,
    altText: "Financial planning for off-plan buying",
  },
  {
    title: "Buying Off-Plan Guide",
    imgSrc: first, // Image from public folder
    altText: "Off-plan house model",
  },
  {
    title: "Understanding the Market",
    imgSrc: first,
    altText: "Real estate market trends",
  },
  {
    title: "Financing Your Purchase",
    imgSrc: first,
    altText: "Financial planning for off-plan buying",
  },
  // More items can be added here
];
const Dubai = () => {
    
  return (
    <div className='text-center w-full'>
      <span className="text-[#fff] max-md:text-[1.2rem] text-[2.5rem] text-center">
        Dubai Property {""}
        <span className="leading-10 max-md:text-[1.2rem] text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          Investment Guide
        </span>
      </span>
      <div className={`min-h-screen p-6`}>
        <div className='flex flex-col items-center justify-center'>
          {boxData.map((box, index) => (
            <Box
              key={index}
              title={box.title}
              imgSrc={box.imgSrc}
              altText={box.altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dubai