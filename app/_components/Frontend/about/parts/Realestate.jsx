"use client";
import Image from "next/image";
import Link from "next/link";
import image from "../assets/s.png"
export default function RealEstateSection() {
  return (
    <section className=" text-white w-[80%] py-12 px-6 md:px-0 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Image */}
      <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
        <Image
          src={image} // Replace with your actual image path
          alt="Business Team"
          fill
          className="object-contain md:object-cover"
          priority
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 text-left space-y-6">
        <h2 className="text-2xl md:text-4xl font-semibold">
          WE ALWAYS GET YOU <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            THE BEST
          </span>
        </h2>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Our commitment to excellence is reflected in our comprehensive
          services, which include property buying, selling, leasing, and
          investment advisory. By offering easy and hassle-free processes, safe
          and verified sources, and world-class standards in service delivery,
          we ensure a delightful experience for our clients.
        </p>

        <Link
          href="/contact"
          className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
