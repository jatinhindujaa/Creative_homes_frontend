"use client";

import Image from "next/image";
import image from "../assets/2.png"
export default function DubaiInvestmentSection() {
  return (
    <section className=" text-white px-6 md:px-20 py-20 space-y-8">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold">
        Smart Property Investing In{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          Dubai
        </span>
        : An Expert Guide
      </h2>

      {/* Image */}
      <div className="w-full h-[300px] md:h-[450px] relative rounded-lg overflow-hidden">
        <Image
          src={image} // Replace with your actual image path in /public
          alt="Dubai Property"
          fill
          className="object-cover"
        />
      </div>

      {/* Intro Paragraph */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed  mx-auto">
        Dubai continues to cement its reputation as one of the world’s most
        attractive destinations for real estate investment in 2025. With its
        cutting-edge infrastructure, investor-friendly laws and strategic
        location, the city has been a magnet for property buyers and investors
        from around the world for decades.
      </p>

      {/* Body Text */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed  mx-auto">
        Thanks to sustained economic growth and a constantly expanding
        population, it’s clear that the property market offers substantial
        opportunities for new and experienced individuals interested in
        investing in Dubai. The absence of property tax is a major attraction,
        as this rarely enhances profitability. Investors also benefit from
        consistently high yields and a young, upwardly mobile population that
        drives ongoing demand for housing.
      </p>

      <p className="text-gray-300 text-sm md:text-base leading-relaxed  mx-auto">
        In this Dubai investment playbook, we’ll walk you through the essentials
        of smart real estate investing in the city. From setting clear
        investment goals to selecting the right strategy and avoiding common
        pitfalls, you’ll get the insights you need to make informed decisions.
      </p>

      {/* Subheading */}
      <h3 className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
        Dubai Property Market Outlook For 2025
      </h3>

      <p className="text-gray-300 text-sm md:text-base leading-relaxed  mx-auto">
        Dubai’s property market entered 2025 on a strong footing, supported by a
        thriving economy, continued population growth and ambitious government
        initiatives such as the Dubai Economic Agenda (D33). Investor confidence
        is reaching new heights.
      </p>

      <p className="text-gray-300 text-sm md:text-base leading-relaxed  mx-auto">
        Market analysts forecasted continued price appreciation across key
        residential sectors, driven by limited supply in prime areas and
        increasing demand. Emerging neighbourhoods such as MBR City and Jumeirah
        Village Circle (JVC), where occupancy rates are high and tenant interest
        remains strong, are expected to perform well.
      </p>

      <p className="text-gray-300 text-sm md:text-base leading-relaxed mx-auto">
        With rental-friendly reforms such as the Ten Year Golden Visa and
        revised residency options for property buyers encouraging longer stays
        and greater capital inflow, 2025 is seen as a window of opportunity for
        Dubai real estate investing. Offering high ROI and long-term benefits,
        the market remains robust and resilient with steady demand.
      </p>
    </section>
  );
}
