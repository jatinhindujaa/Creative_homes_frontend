import React from 'react'
import image from "../assets/2.png";
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='w-full flex items-center justify-center py-10'>
      <div className="w-full md:w-[80%] relative h-[300px] md:h-[500px]">
        <Image
          src={image} // Replace with your actual image path
          alt="Business Team"
          fill
          className="object-contain md:object-cover rounded-lg"
          priority
        />
      </div>
    </div>
  );
}

export default Banner