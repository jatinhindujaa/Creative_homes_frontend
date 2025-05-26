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

export default function OffplanExtras() {
  const [price, setPrice] = useState(29950000);
  const [downPayment, setDownPayment] = useState(500000);
  const [years, setYears] = useState(25);
  const [interest, setInterest] = useState(4.8);
  const [monthly, setMonthly] = useState(null);

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

  return (
    <div className=" text-white p-6 md:p-10 rounded-xl flex flex-col gap-10">
      {/* Map */}
      <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Jumeirah%20Dubai&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>

      {/* Amenities */}
      <div>
        <h2 className="text-2xl font-semibold">
          What <span className="text-[#f1c376]">Amenities</span> You’ll Get?
        </h2>
        <div className="flex flex-wrap gap-6 mt-6 text-center text-sm text-white">
          <div className="flex flex-col items-center gap-1">
            {/* <GiGymBag size={24} /> */}
            <span>Gym</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            {/* <GiSecurityGate size={24} /> */}
            <span>Security</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            {/* <GiGolfFlag size={24} /> */}
            <span>Golf Course</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            {/* <GiSwimmingPool size={24} /> */}
            <span>Swimming Pool</span>
          </div>
        </div>
      </div>

      {/* Regulatory Info */}
      <div>
        <h2 className="text-2xl font-semibold">
          <span className="text-[#f1c376]">Regulatory</span> Information
        </h2>
        <div className="flex flex-row gap-10 mt-4 items-center">
          <div className="flex flex-col gap-2 text-sm">
            <p>
              <span className="text-gray-400">Reference:</span> DUB214910
            </p>
            <p>
              <span className="text-gray-400">Zone name:</span>{" "}
              <span className="font-semibold text-white">Wadi Al Safa 6</span>
            </p>
            <p>
              <span className="text-gray-400">DLD Permit Number:</span>{" "}
              6914597900
            </p>
          </div>
          <div className="w-[120px] h-[120px]">
            <Image src={qr} alt="QR" className="object-cover rounded-md" />
          </div>
        </div>
      </div>

      {/* Mortgage Calculator */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          How Much Can I <span className="text-[#f1c376]">Borrow?</span>
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Estimate whether you can get a mortgage to buy this Offplan.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Form */}
          <div className="bg-[#2a2a2a] rounded-lg p-6 space-y-4">
            <div>
              <label className="text-sm text-gray-300">Purchase Price</label>
              <input
                type="number"
                className="w-full bg-black border border-gray-600 rounded-md px-4 py-2 mt-1"
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-300">Down Payment</label>
              <input
                type="number"
                className="w-full bg-black border border-gray-600 rounded-md px-4 py-2 mt-1"
                value={downPayment}
                onChange={(e) => setDownPayment(+e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-300">Loan Period</label>
              <input
                type="number"
                className="w-full bg-black border border-gray-600 rounded-md px-4 py-2 mt-1"
                value={years}
                onChange={(e) => setYears(+e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-300">Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                className="w-full bg-black border border-gray-600 rounded-md px-4 py-2 mt-1"
                value={interest}
                onChange={(e) => setInterest(+e.target.value)}
              />
            </div>

            <div className="flex gap-4">
              <button
                className="w-full bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-300"
                onClick={handleCalculate}
              >
                Calculate
              </button>
              <button
                className="w-full border border-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-black"
                onClick={resetForm}
              >
                Reset
              </button>
            </div>
          </div>

          {/* Result */}
          <div className="bg-[#2a2a2a] rounded-lg p-6 flex flex-col gap-4 justify-between">
            {monthly ? (
              <>
                <h3 className="text-3xl font-semibold text-[#f1c376]">
                  AED {monthly}
                </h3>
                <p className="text-sm text-gray-400">Per Month</p>
                <p className="text-sm text-gray-300">
                  AED {price.toLocaleString()}
                  <br />
                  Total Loan Amount
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-400">
                Enter values to calculate estimated mortgage
              </p>
            )}

            <hr className="border-gray-600 my-2" />
            <button className="w-full bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-300">
              Get Pre-Approved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
