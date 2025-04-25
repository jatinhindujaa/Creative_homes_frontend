// import React from "react";
// import news_1 from "../assets/news/news_1.png";
// import news_2 from "../assets/news/news_2.png";
// import news_3 from "../assets/news/news_3.png";
// import Image from "next/image";

// const News = () => {
//   return (
//     <div className="w-[90%] h-[900px] mx-auto flex space-x-4 text-[#fff]">
//       <div className="flex flex-col w-[33.33%] space-y-4">
//         <div className="h-[560px] w-full relative">
//           <Image
//             src={news_1.src}
//             alt={news_1}
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             className="rounded-[20px]"
//           />
//         </div>
//         <div className="flex flex-col  text-[1.4rem] leading-[2.3rem] space-y-2">
//           <span className="font-medium">
//             Creative homes wins Town Square Award for the best agent
//           </span>
//           <span className="font-light">1 Nov, 2023</span>
//         </div>
//         <span className="text-[1rem] font-light leading-[1.6rem]">
//           Welcome to the thriving world of Dubai investments, where
//           opportunities abound and financial success beckons. In this quick
//           guide, we’ll explore why investing in Dubai is a game-changer for
//           savvy investors like yourself.
//         </span>
//         <div>
//           <button className="text-[1rem] font-light leading-[1.6rem]">
//             Read more
//             <div className="relative w-full h-[2px]">
//               <div className="absolute inset-0 bg-gradient-to-r from-gold via-bronze to-gold"></div>
//             </div>
//           </button>
//         </div>
//       </div>
//       <div className="flex flex-col w-[33.33%] space-y-4">
//         <div className="h-[560px] w-full relative">
//           <Image
//             src={news_2.src}
//             alt={news_2}
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             className="rounded-[20px]"
//           />
//         </div>
//         <div className="flex flex-col  text-[1.4rem] leading-[2.3rem] space-y-2">
//           <span className="font-medium">
//             Dubai Investments: Your Fast Track to Financial Success
//           </span>
//           <span className="font-light">15 Dec, 2023</span>
//         </div>
//         <span className="text-[1rem] font-light leading-[1.6rem]">
//           Welcome to the thriving world of Dubai investments, where
//           opportunities abound and financial success beckons. In this quick
//           guide, we’ll explore why investing in Dubai is a game-changer for
//           savvy investors like yourself.
//         </span>
//         <div>
//           <button className="text-[1rem] font-light leading-[1.6rem]">
//             Read more
//             <div className="relative w-full h-[2px]">
//               <div className="absolute inset-0 bg-gradient-to-r from-gold via-bronze to-gold"></div>
//             </div>
//           </button>
//         </div>
//       </div>
//       <div className="flex flex-col w-[33.33%] space-y-4">
//         <div className="h-[560px] w-full relative">
//           <Image
//             src={news_3.src}
//             alt={news_3}
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             className="rounded-[20px]"
//           />
//         </div>
//         <div className="flex flex-col text-[1.4rem] leading-[2.3rem] space-y-2">
//           <span className="font-medium">
//             Why invest in Palm Jebel Ali? Life is breathed into island
//             development
//           </span>
//           <span className="font-light">25 Jan, 2024</span>
//         </div>
//         <span className="text-[1rem] font-light leading-[1.6rem]">
//           Welcome to the thriving world of Dubai investments, where
//           opportunities abound and financial success beckons. In this quick
//           guide, we’ll explore why investing in Dubai is a game-changer for
//           savvy investors like yourself.
//         </span>
//         <div>
//           <button className="text-[1rem] font-light leading-[1.6rem]">
//             Read more
//             <div className="relative w-full h-[2px]">
//               <div className="absolute inset-0 bg-gradient-to-r from-gold via-bronze to-gold"></div>
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;



import React from "react";
import news_1 from "../assets/news/news_1.png";
import news_2 from "../assets/news/news_2.png";
import news_3 from "../assets/news/news_3.png";
import Image from "next/image";

const newsData = [
  {
    image: news_1.src,
    title: "Creative homes wins Town Square Award for the best agent",
    date: "1 Nov, 2023",
  },
  {
    image: news_2.src,
    title: "Dubai Investments: Your Fast Track to Financial Success",
    date: "15 Dec, 2023",
  },
  {
    image: news_3.src,
    title: "Why invest in Palm Jebel Ali? Life is breathed into island development",
    date: "25 Jan, 2024",
  },
];

const News = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-8 text-white my-10">
      {newsData.map((item, i) => (
        <div
          key={i}
          className="flex flex-col w-full lg:w-[33.33%] space-y-4"
        >
          {/* Image */}
          <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[560px] w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center rounded-[20px]"
            />
          </div>

          {/* Title + Date */}
          <div className="flex flex-col text-[1.2rem] sm:text-[1.4rem] leading-[2.2rem] space-y-1">
            <span className="font-medium">{item.title}</span>
            <span className="font-light text-sm">{item.date}</span>
          </div>

          {/* Description */}
          <span className="text-[1rem] font-light leading-[1.6rem]">
            Welcome to the thriving world of Dubai investments, where
            opportunities abound and financial success beckons. In this quick
            guide, we’ll explore why investing in Dubai is a game-changer for
            savvy investors like yourself.
          </span>

          {/* Read More */}
      <div>
  <button className="text-[1rem] font-light leading-[1.6rem]">
Read more
<div className="relative w-full h-[2px]">
<div className="absolute inset-0 bg-gradient-to-r from-gold via-bronze to-gold"></div>
</div>
 </button>
</div>
        </div>
      ))}
    </div>
  );
};

export default News;
