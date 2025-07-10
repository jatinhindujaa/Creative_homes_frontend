import React from "react";

const Banner = () => {
  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="w-full md:w-[80%] relative h-[300px] md:h-[500px]">
        <video
          src="/new.mp4"
          alt="Business Team"
          autoPlay
          loop
          muted
          className="object-fill rounded-lg w-full h-full"
        />
      </div>
    </div>
  );
};

export default Banner;
