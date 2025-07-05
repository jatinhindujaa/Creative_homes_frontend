import React from 'react'
import Box from './Box';
import first from "../assets/Box/1.png"
const boxData = [
  {
    title: "Buying Guide",
    imgSrc: first, // Image from public folder
    altText: "buying-guide",
  },
  {
    title: "Off Plan Guide",
    imgSrc: first,
    altText: "off-plan-guide",
  },
  {
    title: "Mortgage Guide",
    imgSrc: first,
    altText: "mortgage-guide",
  },
  {
    title: "Renting Guide",
    imgSrc: first, // Image from public folder
    altText: "renting-guide",
  },
  {
    title: "Selling Guide",
    imgSrc: first,
    altText: "selling-guide",
  },
  // More items can be added here
];
const Dubai = () => {
    
  return (
    <div className='text-center w-full md:my-10 mt-10'>
      <span className="text-[#fff] max-md:text-[1.5rem] text-[2.5rem] text-center">
        Dubai Property {""}
        <span className="leading-10 max-md:text-[1.5rem] text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          Investment Guide
        </span>
      </span>
      <div className={`min-h-screen md:pt-6 pt-0`}>
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