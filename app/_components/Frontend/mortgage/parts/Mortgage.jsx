// "use client"
// import React, { useState } from "react";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const MortgageCalculator = () => {
//   const [purchasePrice, setPurchasePrice] = useState(1000000);
//   const [downPayment, setDownPayment] = useState(200000);
//   const [loanPeriod, setLoanPeriod] = useState(25);
//   const [interestRate, setInterestRate] = useState(3.89);

//   const loanAmount = purchasePrice - downPayment;
//   const monthlyInterestRate = interestRate / 100 / 12;
//   const numberOfPayments = loanPeriod * 12;

//   const monthlyPayment =
//     (loanAmount *
//       monthlyInterestRate *
//       Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
//     (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

//   const totalInterest = monthlyPayment * numberOfPayments - loanAmount;
//   const fileCharges = 1291;
//   const insurance = 4491;

//   const data = [
//     { name: "Mortgage Amount", value: loanAmount },
//     { name: "Other Amount", value: downPayment },
//   ];

//   const COLORS = ["#D4AF37", "#806517"];

//   return (
//     <div className="text-white p-6 rounded-lg max-w-4xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold text-center mb-6">
//         Mortgage Calculator
//       </h2>
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm">Purchase Price</label>
//           <input
//             type="number"
//             className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
//             value={purchasePrice}
//             onChange={(e) => setPurchasePrice(Number(e.target.value))}
//           />
//         </div>
//         <div>
//           <label className="block text-sm">Down Payment</label>
//           <input
//             type="number"
//             className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
//             value={downPayment}
//             onChange={(e) => setDownPayment(Number(e.target.value))}
//           />
//         </div>
//         <div>
//           <label className="block text-sm">Loan Period (Years)</label>
//           <input
//             type="number"
//             className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
//             value={loanPeriod}
//             onChange={(e) => setLoanPeriod(Number(e.target.value))}
//           />
//         </div>
//         <div>
//           <label className="block text-sm">Interest Rate (%)</label>
//           <input
//             type="number"
//             className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
//             value={interestRate}
//             onChange={(e) => setInterestRate(Number(e.target.value))}
//           />
//         </div>
//       </div>
//       <div className="flex justify-center items-center mt-6">
//         <button className="bg-yellow-500 px-4 py-2 rounded mr-4">
//           Calculate
//         </button>
//         <button className="bg-gray-700 px-4 py-2 rounded">Reset</button>
//       </div>

//       <div className="grid grid-cols-2 gap-6 mt-6 text-center">
//         <div>
//           <h3 className="text-lg font-semibold">Mortgage Amount</h3>
//           <p className="text-xl">AED {loanAmount.toLocaleString()}</p>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold">Total Interest</h3>
//           <p className="text-xl">AED {totalInterest.toLocaleString()}</p>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold">Monthly Payment</h3>
//           <p className="text-xl">AED {monthlyPayment.toFixed(2)}</p>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold">File Charges</h3>
//           <p className="text-xl">AED {fileCharges.toLocaleString()}</p>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold">Insurance</h3>
//           <p className="text-xl">AED {insurance.toLocaleString()}</p>
//         </div>
//       </div>

//       <div className="mt-10">
//         <ResponsiveContainer width="100%" height={250}>
//           <PieChart>
//             <Pie
//               data={data}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={80}
//             >
//               {data.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default MortgageCalculator;


"use client";
import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const MortgageCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(200000);
  const [loanPeriod, setLoanPeriod] = useState(25);
  const [interestRate, setInterestRate] = useState(3.0);

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

  const data = [
    { name: "Total Interest", value: totalInterest },

    { name: "Mortgage Amount", value: loanAmount },
  ];

  const COLORS = ["#D4AF37", "#806517"];

  return (
    <div className="flex flex-col items-center w-[100%]">
      <div className="text-center">
        <h1 className="text-[#fff] text-[2.5rem] ">Helping You Find The</h1>
        <span className=" leading-10 text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          Right Mortgage
        </span>
      </div>
      <div className="w-[80%] bg-[#202120] flex flex-col items-center my-10 rounded-xl">
        <div className="text-white p-6 rounded-lg w-[100%] mt-7 shadow-lg flex flex-row">
          <div className="w-[50%]">
            <div className="w-[100%]">
              <label className="block text-sm py-3">Purchase Price (AED)</label>
              <input
                type="number"
                className="w-full pl-5 p-2 rounded-[20px] bg-transparent border border-gray-600 "
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
              />
            </div>
            <div className="w-[100%]">
              <label className="block text-sm py-3">Down Payment (AED)</label>
              <input
                type="number"
                className="w-full bg-gray-800 border border-gray-600  bg-transparent pl-5 p-2 rounded-[20px]"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
              />
            </div>
            <div className="w-[100%]">
              <label className="block text-sm py-3">Loan Period (Years)</label>
              <input
                type="number"
                className="w-full bg-gray-800 border  border-gray-600  bg-transparent pl-5 p-2 rounded-[20px]"
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(Number(e.target.value))}
              />
            </div>
            <div className="w-[100%]">
              <label className="block text-sm py-3">Interest Rate (%)</label>
              <input
                type="number"
                className="w-full  bg-transparent border border-gray-600 pl-5 p-2 rounded-[20px]"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
            </div>
          </div>
          {/* <div className="w-[50%] flex justify-center items-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={70} // Creates donut effect
                  outerRadius={100} // Adjust for size
                  startAngle={90} // Start from top
                  endAngle={-270} // Clockwise direction
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`} // Show percentages
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div> */}
          <div className="w-[50%] flex justify-center items-center">
            <ResponsiveContainer width="100%" height={300}>
              {" "}
              {/* Increased height for better visibility */}
              <PieChart>
                {/* Define Gradients */}
                <defs>
                  {/* Gold Gradient for 70% section */}
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

                  {/* Bronze Gradient for 30% section */}
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
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={95} // Reduced to make the bars thicker
                  outerRadius={140} // Increased for larger bars
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
        <div className="flex justify-start items-center w-full p-[1.5rem]">
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

        <div className="flex gap-6 mt-6 text-center py-5 justify-around w-full">
          <div>
            <h3 className="text-lg font-semibold text-[#fff]">
              Mortgage Amount
            </h3>
            <p className="text-xl text-[#fff]">
              AED {loanAmount.toLocaleString()}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#fff]">
              Total Interest
            </h3>
            <p className="text-xl text-[#fff]">
              AED {totalInterest.toLocaleString()}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#fff]">
              Monthly Payment
            </h3>
            <p className="text-xl text-[#fff]">
              AED {monthlyPayment.toFixed(2)}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#fff]">File Charges</h3>
            <p className="text-xl text-[#fff]">
              AED {fileCharges.toLocaleString()}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#fff]">Insurance</h3>
            <p className="text-xl text-[#fff]">
              AED {insurance.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
