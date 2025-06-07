"use client";
import { useState } from "react";
import Image from "next/image";
import qr from "../assets/2.png"; // Replace with your QR image
// import {
//   GiGymBag,
//   GiSecurityGate,
//   GiGolfFlag,
//   GiSwimmingPool,
// } from "react-icons/gi";

export default function OffplanExtras({data}) {
  const [price, setPrice] = useState(29950000);
  const [downPayment, setDownPayment] = useState(500000);
  const [years, setYears] = useState(25);
  const [interest, setInterest] = useState(4.8);
  const [monthly, setMonthly] = useState(null);
  const plans = [
    { percent: `${data?.firstpay}%`, label: "First Installment" },
    { percent: `${data?.underpay}%`, label: "Under Construction" },
    { percent: `${data?.handoverpay}%`, label: "On Handover" },
  ];
  const handleCalculate = () => {
    const principal = price - downPayment;
    const rate = interest / 100 / 12;
    const payments = years * 12;
    const monthlyPayment =
      (principal * rate) / (1 - Math.pow(1 + rate, -payments));
    setMonthly(monthlyPayment.toFixed(0));
  };

  const resetForm = () => {
    setPrice(29950000);
    setDownPayment(500000);
    setYears(25);
    setInterest(4.8);
    setMonthly(null);
  };
const features = [
  {
    icon: "💰",
    text: "No commission",
    bgColor: "bg-blue-500",
    checkColor: "bg-green-500",
  },
  {
    icon: "📊",
    text: "Direct sales",
    bgColor: "bg-blue-500",
    checkColor: "bg-green-500",
  },
  {
    icon: "🛡️",
    text: "Trusted & simple",
    bgColor: "bg-blue-500",
    checkColor: "bg-green-500",
  },
];
  return (
    <div className=" text-white p-6 md:p-10 rounded-xl flex flex-col gap-10">
      <section className="text-white px-6 pt-10">
        <h2 className="text-3xl font-semibold mb-8">
          <span className="ont-medium text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            Payment
          </span>{" "}
          <span className="font-medium text-white">Plans</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="border border-white rounded-md px-6 py-6 text-center w-1/4"
            >
              <p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
                {plan.percent}
              </p>
              <p className="text-md mt-2">{plan.label}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="flex gap-[26px] items-center px-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-xl font-semibold text-white w-1/4"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${feature.bgColor}`}
            >
              <span className="text-white text-xl">{feature.icon}</span>
            </div>
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
      {/* Map */}
      {/* <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Jumeirah%20Dubai&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div> */}
      <div>
        {/* Map Section */}
        <div className="w-full h-[300px] overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Jumeirah%20Dubai&t=k&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>

        {/* Views Section */}
        <div className="p-6 border-r border-l border-b mt-0">
          <h3 className="text-xl font-semibold mt-0 underline">Views</h3>
          <ul className="">
            {data?.views.map((d) => (
              <li className="flex items-center gap-2">
                <span className="text-[#f1c376]">📍</span> {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h2 className="text-2xl font-semibold">
          What <span className="text-[#f1c376]">Amenities</span> You’ll Get?
        </h2>
        <div className="flex flex-wrap gap-6 mt-6 text-center text-sm text-white">
          {data?.amenities?.map((d, i) => (
            <div className="flex flex-col items-center gap-1">
              {/* <GiGymBag size={24} /> */}
              <span>{d}</span>
            </div>
          ))}
        </div>
      </div>
        <div className="px-6 py-4">
      <h2 className="text-4xl font-semibold mb-6">Floor Plans</h2>

      {data?.floorPlanCategories?.map((category) => (
        <div key={category._id} className="mb-6">
          <h3 className="text-xl font-medium mb-4">{category.categoryName}</h3>

          <div className="space-y-4">
            {category.floorPlans.map((floorPlan) => (
              <div
                key={floorPlan._id}
                className="flex justify-between border-b pb-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={floorPlan.icon || "/default-icon.svg"} // Use a default icon if none provided
                    alt="Bed Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-lg">{floorPlan.beds} Beds</span>
                </div>
                <span className="text-sm text-gray-500">
                  {floorPlan.minSizeSqft} - {floorPlan.maxSizeSqft} Sqft
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
