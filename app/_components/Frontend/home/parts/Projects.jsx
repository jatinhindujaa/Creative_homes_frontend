// import React from "react";
// import projects_1 from "../assets/projects/projects_1.png";
// import projects_2 from "../assets/projects/projects_2.png";
// import projects_3 from "../assets/projects/projects_3.png";
// import projects_4 from "../assets/projects/projects_4.png";
// import Image from "next/image";
// import Button from "@/app/_components/ui/Button";

// const Projects = () => {
//   return (
//     <div className="flex flex-col gap-10">
//       <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[2.5rem] leading-[3.3rem] font-semibold mt-4">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//           UPCOMING
//         </span>
//         <span>PROJECTS </span>
//       </div>
//       <div className="w-[90%] mx-auto flex mt-4 ">
//         <div className="relative h-[550px] w-[25%]">
//           <Image
//             src={projects_1.src}
//             alt="Serenity Mansions"
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             className="rounded-s-2xl"
//           />
//           <div className="absolute inset-0 flex flex-col justify-center items-center">
//             <div className="bg-black rounded-s-2xl bg-opacity-30 absolute inset-0 transition-opacity duration-300  hover:opacity-0"></div>

//             <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2 flex flex-col justify-center items-center">
//               <span className="font-light">Serenity Mansions</span>
//               <Button
//                 text="VIEW Project"
//                 className="px-4 w-fit py-1 text-[0.9rem] z-10 uppercase"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="relative h-[550px] w-[25%] ">
//           <Image
//             src={projects_2.src}
//             alt="Knightsbridge"
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//           />
//           <div className="absolute inset-0 flex flex-col justify-center items-center">
//             <div className="bg-black bg-opacity-30 absolute inset-0 transition-opacity duration-300  hover:opacity-0"></div>

//             <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2  flex flex-col justify-center items-center">
//               <span className="font-light">Knightsbridge</span>
//               <Button
//                 text="VIEW Project"
//                 className="px-4 w-fit py-1 text-[0.9rem] z-10 uppercase"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="relative h-[550px] w-[25%] ">
//           <Image
//             src={projects_3.src}
//             alt="Farm Grove"
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//           />
//           <div className="absolute inset-0 flex flex-col justify-center items-center">
//             <div className="bg-black bg-opacity-30 absolute inset-0 transition-opacity duration-300  hover:opacity-0"></div>

//             <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2  flex flex-col justify-center items-center">
//               <span className="font-light">Farm Grove</span>
//               <Button
//                 text="VIEW Project"
//                 className="px-4 w-fit py-1 text-[0.9rem] z-10 uppercase"
//               />
//             </div>
//           </div>
//         </div>
//         <div dir="rtl" className="relative h-[550px] w-[25%] ">
//           <Image
//             src={projects_4.src}
//             alt="Damac Islands"
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             className="rounded-s-2xl"
//           />
//           <div className="absolute inset-0 flex flex-col justify-center items-center">
//             <div className="bg-black rounded-s-2xl bg-opacity-30 absolute inset-0 transition-opacity duration-300  hover:opacity-0"></div>

//             <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2  flex flex-col justify-center items-center">
//               <span className="font-light">Damac Islands</span>
//               <Button
//                 text="VIEW Project"
//                 className="px-4 w-fit py-1 text-[0.9rem] z-10 uppercase"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
{/* <div className="h-[30%] w-full flex flex-col justify-start items-center space-y-6 -top-12 relative">
  <span className="text-[1.2rem] leading-[2.3rem]">
    Get the right valuation for your property
  </span>
  <Button text="Submit Property" className="px-3 py-1 font-light" />
</div>; */}
// export default Projects;


import React from "react";
import projects_1 from "../assets/projects/Project_1.jpg";
import projects_2 from "../assets/projects/Project_2.jpg";
import projects_3 from "../assets/projects/Project_3.jpg";
import projects_4 from "../assets/projects/Project_4.jpg";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";

const projectList = [
  {
    src: projects_1.src,
    title: "Seacrest",
    radius: "10px 10px 0 0",
  },
  {
    src: projects_2.src,
    title: "Jacob & Co Residences",
    radius: "0px 0px 0 0",
  },
  { src: projects_3.src, title: "Trump Tower", radius: "0px 0px 0 0" },
  {
    src: projects_4.src,
    title: "Palm Beach Towers",
    radius: "0px 0px 10px 10px",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-[50px] mt-[100px]">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[1.5rem] lg:text-[2.5rem] lg:leading-[3.3rem] leading-[2] font-semibold mt-4 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          UPCOMING
        </span>
        <span>PROJECTS</span>
      </div>

      <div className="w-[90%] mx-auto flex flex-col lg:flex-row flex-wrap justify-center">
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`relative w-full sm:w-[90%] md:w-[70%] lg:w-[25%] h-[400px] md:h-[450px] lg:h-[550px] overflow-hidden`}
            style={{ borderRadius: project.radius }}
          >
            <Image
              src={project.src}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              style={{ borderRadius: project.radius }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div
                className="bg-black bg-opacity-30 absolute inset-0 transition-opacity duration-300 hover:opacity-0"
                style={{ borderRadius: project.radius }}
              ></div>
              <div className="text-white text-[1.5rem] md:text-[1.9rem] leading-[2.4rem] space-y-2 z-10 flex flex-col justify-center items-center">
                <span className="font-light">{project.title}</span>
                <Button
                  text="VIEW PROJECT"
                  className="px-4 w-fit py-1 text-[0.9rem] uppercase"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
