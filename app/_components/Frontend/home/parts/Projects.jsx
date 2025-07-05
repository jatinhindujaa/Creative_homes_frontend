

"use client"
import React from "react";
import projects_1 from "../assets/projects/3600.jpg";
import projects_2 from "../assets/projects/Project_2.jpg";
import projects_3 from "../assets/projects/Project_3.jpg";
import projects_4 from "../assets/projects/Project_4.jpg";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import { useRouter } from "next/navigation";

const projectList = [
  {
    src: projects_1.src,
    title: "Seacrest",
    radius: "10px 10px 0 0",
    link: "6846c446a627e54705c3b66c",
  },
  {
    src: projects_2.src,
    title: "Jacob & Co Residences",
    radius: "0px 0px 0 0",
    link: "6846cdc0a627e54705c3b71a",
  },
  {
    src: projects_3.src,
    title: "Trump Tower",
    radius: "0px 0px 0 0",
    link: "6846c8aaa627e54705c3b6c0",
  },
  {
    src: projects_4.src,
    title: "Palm Beach Towers",
    radius: "0px 0px 10px 10px",
    link: "6846da81a627e54705c3b853",
  },
];

const Projects = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:gap-[50px] gap-[25px] md:mt-[100px] mt-[40px]">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[1.5rem] lg:text-[2.5rem] lg:leading-[3.3rem] leading-[2] font-semibold mt-4 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold leading-[2.5rem]">
          UPCOMING
        </span>
        <span className="leading-12">PROJECTS</span>
      </div>

      <div className="w-[80%] mx-auto flex flex-col lg:flex-row flex-wrap justify-center">
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
              objectPosition={project.link === "6846c446a627e54705c3b66c"?"bottom":"center"}
              style={{ borderRadius: project.radius }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div
                className="bg-black bg-opacity-30 absolute inset-0 transition-opacity duration-300 hover:opacity-0"
                style={{ borderRadius: project.radius }}
              ></div>
              <div className="text-center text-white text-[1.5rem] md:text-[1.9rem] leading-[2.4rem] space-y-2 z-10 flex flex-col justify-center items-center">
                <span className="font-light">{project.title}</span>
                <Button
                  text="VIEW PROJECT"
                  onClick={() =>
                    router.push(`/off-plan-properties/${project.link}`)
                  }
                  className="px-4 w-fit py-1 text-[0.9rem] uppercase"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Button
          text="VIEW ALL PROJECTS"
          className="px-4 w-fit py-1 text-[0.9rem]"
          onClick={() => router.push("/off-plan-properties")}
        />
      </div>
    </div>
  );
};

export default Projects;
