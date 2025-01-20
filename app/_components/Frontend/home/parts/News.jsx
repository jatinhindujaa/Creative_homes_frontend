import React from "react";
import news_1 from "../assets/news/news_1.png";
import news_2 from "../assets/news/news_2.png";
import news_3 from "../assets/news/news_3.png";
import Image from "next/image";

const News = () => {
  return (
    <div className="w-[90%] h-[900px] mx-auto flex space-x-4">
      <div className="flex flex-col w-[33.33%] space-y-4">
        <div className="h-[560px] w-full relative">
          <Image
            src={news_1.src}
            alt={news_1}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[20px]"
          />
        </div>
        <div className="flex flex-col  text-[1.8rem] leading-[2.3rem] space-y-2">
          <span className="font-medium">
            Creative homes wins Town Square Award for the best agent
          </span>
          <span className="font-light">1 Nov, 2023</span>
        </div>
        <span className="text-[1.3rem] font-light leading-[1.6rem]">
          Welcome to the thriving world of Dubai investments, where
          opportunities abound and financial success beckons. In this quick
          guide, we’ll explore why investing in Dubai is a game-changer for
          savvy investors like yourself.
        </span>
        <div>
          <button className="text-[1.3rem] font-light leading-[1.6rem]">
            Read more
            <div className="relative w-full h-[2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-bronze to-gold"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-[33.33%] space-y-4">
        <div className="h-[560px] w-full relative">
          <Image
            src={news_2.src}
            alt={news_2}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[20px]"
          />
        </div>
        <div className="flex flex-col  text-[1.8rem] leading-[2.3rem] space-y-2">
          <span className="font-medium">
            Dubai Investments: Your Fast Track to Financial Success
          </span>
          <span className="font-light">15 Dec, 2023</span>
        </div>
        <span className="text-[1.3rem] font-light leading-[1.6rem]">
          Welcome to the thriving world of Dubai investments, where
          opportunities abound and financial success beckons. In this quick
          guide, we’ll explore why investing in Dubai is a game-changer for
          savvy investors like yourself.
        </span>
        <div>
          <button className="text-[1.3rem] font-light leading-[1.6rem]">
            Read more
            <div className="relative w-full h-[2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-bronze to-gold"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-[33.33%] space-y-4">
        <div className="h-[560px] w-full relative">
          <Image
            src={news_3.src}
            alt={news_3}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[20px]"
          />
        </div>
        <div className="flex flex-col text-[1.7rem] leading-[2.3rem] space-y-2">
          <span className="font-medium">
            Why invest in Palm Jebel Ali? Life is breathed into island
            development
          </span>
          <span className="font-light">25 Jan, 2024</span>
        </div>
        <span className="text-[1.3rem] font-light leading-[1.6rem]">
          Welcome to the thriving world of Dubai investments, where
          opportunities abound and financial success beckons. In this quick
          guide, we’ll explore why investing in Dubai is a game-changer for
          savvy investors like yourself.
        </span>
        <div>
          <button className="text-[1.3rem] font-light leading-[1.6rem]">
            Read more
            <div className="relative w-full h-[2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-bronze to-gold"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
