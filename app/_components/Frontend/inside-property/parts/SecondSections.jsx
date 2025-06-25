"use client";
import { useEffect, useRef, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Image from "next/image";
import qr from "../assets/2.png"; // Replace with your QR image
import MortgageCalculator from "../../mortgage/parts/Mortgage";
// import {
//   GiGymBag,
//   GiSecurityGate,
//   GiGolfFlag,
//   GiSwimmingPool,
// } from "react-icons/gi";

export default function PropertyExtras({data}) {
   const [purchasePrice, setPurchasePrice] = useState(1000000);
    const [downPayment, setDownPayment] = useState(200000);
    const [loanPeriod, setLoanPeriod] = useState(25);
    const [interestRate, setInterestRate] = useState(3.0);
    const userEditedDownPayment = useRef(false);
  
     useEffect(() => {
       if (!userEditedDownPayment.current) {
         const autoDownPayment = Math.round(purchasePrice * 0.2);
         setDownPayment(autoDownPayment);
       }
     }, [purchasePrice]);
  
     // When user changes downPayment manually, set flag to stop auto updates
     const handleDownPaymentChange = (e) => {
       userEditedDownPayment.current = true;
       setDownPayment(e.target.value);
     };
    const loanAmount = purchasePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanPeriod * 12;
  
    const monthlyPayment =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  
    const totalInterest = monthlyPayment * numberOfPayments - loanAmount;
    const fileCharges = 1291;
    const insurance = 4491;
  
    const datas = [
      { name: "Total Interest", value: totalInterest },
      { name: "Mortgage Amount", value: loanAmount },
    ];
  
    const COLORS = ["#D4AF37", "#806517"];
  

  return (
    <div className=" text-white p-6 md:p-10 rounded-xl flex flex-col gap-10">
      {/* Map */}
      {/* <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Jumeirah%20Dubai&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div> */}
      {/* <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Jumeirah%20Dubai&t=m&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div> */}
      {/* <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=${Jumeirah%20Dubai}&t=m&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div> */}
      <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            data?.zone
          )}&t=m&z=13&ie=UTF8&iwloc=&output=embed`}
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>
      {/* <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Sobha%20Orbis&t=m&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div> */}
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

          {/* <div className="flex flex-col items-center gap-1">
            <GiSecurityGate size={24} />
            <span>Security</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <GiGolfFlag size={24} />
            <span>Golf Course</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <GiSwimmingPool size={24} />
            <span>Swimming Pool</span>
          </div> */}
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
              <span className="text-gray-400">Reference:</span>{" "}
              {data?.reference}
            </p>
            {/* <p>
              <span className="text-gray-400">Zone name:</span>{" "}
              <span className="font-semibold text-white">Wadi Al Safa 6</span>
            </p> */}
            <p>
              <span className="text-gray-400">DLD Permit Number:</span>{" "}
              {data?.dld}
            </p>
          </div>
          <div className="flex">
            <Image
              src={data?.image}
              alt="QR"
              className="object-cover rounded-md"
              width={150}
              height={200}
            />
          </div>
        </div>
      </div>
      {/* Mortgage Calculator */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          How Much Can I <span className="text-[#f1c376]">Borrow?</span>
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Estimate whether you can get a mortgage to buy this property.
        </p>

        <div className="lg:w-[80%] w-[100%] bg-[#202120] flex flex-col items-center my-10 rounded-xl">
          <div className="text-white px-6 py-3 rounded-lg w-full flex flex-col md:flex-row">
            <div className="w-full md:w-[50%]">
              <div className="w-full mb-4">
                <label className="block text-sm py-3">
                  Purchase Price (AED)
                </label>
                <input
                  type="number"
                  className="w-full pl-5 p-2 rounded-[20px] bg-transparent border border-gray-600"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                />
              </div>

              <div className="w-full mb-4">
                <label className="block text-sm py-3">Down-payment</label>
                <input
                  type="number"
                  className="w-full bg-gray-800 border border-gray-600 bg-transparent pl-5 p-2 rounded-[20px]"
                  value={downPayment}
                  onChange={handleDownPaymentChange}
                />
              </div>

              <div className="w-full mb-4">
                <label className="block text-sm py-3">
                  Loan Period (Years)
                </label>
                <input
                  type="number"
                  className="w-full bg-gray-800 border border-gray-600 bg-transparent pl-5 p-2 rounded-[20px]"
                  value={loanPeriod}
                  onChange={(e) => setLoanPeriod(e.target.value)}
                />
              </div>

              <div className="w-full mb-4">
                <label className="block text-sm py-3">Interest Rate (%)</label>
                <input
                  type="number"
                  className="w-full bg-transparent border border-gray-600 pl-5 p-2 rounded-[20px]"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full md:w-[50%] md:flex hidden justify-center items-center">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <defs>
                    <linearGradient
                      id="goldGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FFD45C" />
                      <stop offset="52%" stopColor="#A97C50" />
                      <stop offset="100%" stopColor="#FFD45C" />
                    </linearGradient>

                    <linearGradient
                      id="bronzeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#A97C50" />
                      <stop offset="50%" stopColor="#5F4A30" />
                      <stop offset="100%" stopColor="#3D2A17" />
                    </linearGradient>
                  </defs>

                  <Pie
                    data={datas}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={95}
                    outerRadius={140}
                    startAngle={90}
                    endAngle={-270}
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    <Cell key="cell-1" fill="url(#bronzeGradient)" />
                    <Cell key="cell-0" fill="url(#goldGradient)" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-[50%] flex md:hidden justify-center items-center">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <defs>
                    <linearGradient
                      id="goldGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FFD45C" />
                      <stop offset="52%" stopColor="#A97C50" />
                      <stop offset="100%" stopColor="#FFD45C" />
                    </linearGradient>

                    <linearGradient
                      id="bronzeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#A97C50" />
                      <stop offset="50%" stopColor="#5F4A30" />
                      <stop offset="100%" stopColor="#3D2A17" />
                    </linearGradient>
                  </defs>

                  <Pie
                    data={datas}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={95}
                    outerRadius={140}
                    startAngle={90}
                    endAngle={-270}
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    <Cell key="cell-1" fill="url(#bronzeGradient)" />
                    <Cell key="cell-0" fill="url(#goldGradient)" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex lg:justify-start justify-center items-center w-full px-[1.5rem]">
            <button className="bg-white px-6 py-2 rounded-[30px] mr-4 text-[1.2rem]">
              Calculate
            </button>
            <button
              className="bg-transparent px-6 py-2 rounded-[30px] text-[#fff] border border-white"
              onClick={() => window.location.reload()}
            >
              Reset
            </button>
          </div>

          <div className="flex flex-wrap gap-6 mt-6 text-center py-5 justify-around w-full">
            <div>
              <h3 className="text-lg font-semibold text-[#fff]">
                Mortgage Amount
              </h3>
              <p className="text-xl text-[#fff]">{`AED ${loanAmount.toLocaleString()}`}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#fff]">
                Total Interest
              </h3>
              <p className="text-xl text-[#fff]">{`AED ${totalInterest.toLocaleString()}`}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#fff]">
                Monthly Payment
              </h3>
              <p className="text-xl text-[#fff]">{`AED ${monthlyPayment.toFixed(
                2
              )}`}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#fff]">
                File Charges
              </h3>
              <p className="text-xl text-[#fff]">{`AED ${fileCharges.toLocaleString()}`}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#fff]">Insurance</h3>
              <p className="text-xl text-[#fff]">{`AED ${insurance.toLocaleString()}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
