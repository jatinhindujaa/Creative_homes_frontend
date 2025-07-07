"use client";

import Image from "next/image";
import image from "../assets/2.png"
export default function DubaiInvestmentSection({ data }) {
  // console.log("data",data.description)
  return (
    <section className=" text-white px-6 md:px-0 w-[80%] py-8 space-y-8">
      <div className="custom-html-content">
        <div className="text-sm">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.description,
            }}
          />
        </div>
      </div>
    </section>
  );
}
