

// "use client";

// import { useState } from "react";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import { FaHome, FaHandshake, FaKey } from "react-icons/fa";

// const InterestSection = () => {
//   const [selected, setSelected] = useState(null);

//   const interestOptions = [
//     { id: 1, label: "Buying", icon: <FaHome size={24} /> },
//     { id: 2, label: "Selling", icon: <FaHandshake size={24} /> },
//     { id: 3, label: "Renting", icon: <FaKey size={24} /> },
//   ];

//   return (
//     <div
//       className="w-[90%] bg-cover bg-center flex justify-center items-center rounded-2xl my-16 "
//       style={{
//         backgroundImage: `url('/bg.png')`,
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="w-full bg-black/50 rounded-2xl p-6 sm:p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left Content */}
//         <div className="text-white w-full md:w-[40%] text-center md:text-left">
//           <h2 className="text-[1.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold leading-tight">
//             Got More Questions?
//           </h2>
//           <p className="mt-3 text-base sm:text-lg">
//             Let’s talk about your needs and investment goals
//           </p>
//         </div>

//         {/* Right Box */}
//         <div className="p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full md:w-[50%]">
//           <h3 className="text-[1rem] sm:text-[2.5rem] font-bold text-white">
//             I am interested to
//           </h3>

//           {/* Icon Options */}
//           <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
//             {interestOptions.map((option) => (
//               <div className="flex flex-col items-center">
//               <button
//                 key={option.id}
//                 onClick={() => setSelected(option.id)}
//                 className={`w-14 h-14 flex items-center justify-center rounded-lg transition-all ${
//                   option.id === 2
//                     ? "bg-black text-white"
//                     : "bg-white text-black"
//                 }, ${
//                   selected === option.id
//                     ? "bg-black text-white"
//                     : "bg-white text-black border-black"
//                 }`}
//               >
//                 {option.icon}
//               </button>
//               <p className="text-white">{option.label}</p>
//               </div>
//             ))}
//           </div>

//           {/* Continue Button */}
//           <button className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full hover:bg-white hover:text-black border  transition">
//             Continue <FaExternalLinkAlt />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterestSection;





"use client"

import { useState } from "react";
import { FaExternalLinkAlt, FaHome, FaHandshake, FaKey } from "react-icons/fa";

const InterestSection = () => {
  const [step, setStep] = useState(1); // Track current step
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  // Interest options
  const interestOptions = [
    { id: 1, label: "Buying", icon: <FaHome size={24} /> },
    { id: 2, label: "Selling", icon: <FaHandshake size={24} /> },
    { id: 3, label: "Renting", icon: <FaKey size={24} /> },
  ];

  // Handle form submission
  const handleSubmit = () => {
    console.log(contactDetails); // Handle form data submission here
    setStep(5); // Go to the final step (thank you screen)
  };

  return (
    <div
      className="w-[80%] bg-cover bg-center flex justify-center items-center rounded-2xl my-10"
      style={{ backgroundImage: `url('/bg.png')` }}
    >
      {/* Dark Overlay */}
      <div className="w-full bg-black/50 rounded-2xl p-6 sm:p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="text-white w-full md:w-[40%] text-center md:text-left">
          <h2 className="text-[1.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold leading-tight">
            Got More Questions?
          </h2>
          <p className="mt-3 text-base sm:text-lg">
            Let’s talk about your needs and investment goals
          </p>
        </div>

        {/* Right Box */}
        <div className="p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full md:w-[50%]">
          {/* Step 1: Select Interest */}
          {step === 1 && (
            <>
              <h3 className="text-[1rem] sm:text-[2.5rem] font-bold text-white">
                I am interested to
              </h3>
              <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
                {interestOptions.map((option) => (
                  <div key={option.id} className="flex flex-col items-center">
                    <button
                      onClick={() => setSelectedInterest(option.id)}
                      className={`w-14 h-14 flex items-center justify-center rounded-lg transition-all ${
                        selectedInterest === option.id
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {option.icon}
                    </button>
                    <p className="text-white">{option.label}</p>
                  </div>
                ))}
              </div>
              {/* Continue Button */}
              <button
                onClick={() => {
                  if (selectedInterest) setStep(2);
                }}
                className="mt-6 px-6 py-2 bg-white text-black rounded-full"
                disabled={!selectedInterest} // Disable until an option is selected
              >
                Continue
              </button>
            </>
          )}

          {/* Step 2: Select Property Type */}
          {step === 2 && (
            <>
              <h3 className="text-[1rem] sm:text-[2.5rem] font-bold text-white">
                I am looking for
              </h3>
              <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
                {["Studio", "1 Bed", "2 Bed", "3 Bed", "4 Bed", "5+ Bed"].map(
                  (type, index) => (
                    <button
                      key={index}
                      onClick={() => setPropertyType(type)}
                      className={`w-14 h-14 flex items-center justify-center rounded-lg transition-all ${
                        propertyType === type
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {type}
                    </button>
                  )
                )}
              </div>
              <button
                onClick={() => setStep(3)}
                className="mt-6 px-6 py-2 bg-white text-black rounded-full"
                disabled={!propertyType} // Disable until a property type is selected
              >
                Continue
              </button>
            </>
          )}

          {/* Step 3: Price Range */}
          {step === 3 && (
            <>
              <h3 className="text-[1rem] sm:text-[2.5rem] font-bold text-white">
                Price Range (AED)
              </h3>
              <div className="flex gap-4 md:gap-6 justify-center">
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, min: e.target.value })
                  }
                  placeholder="Min price"
                  className="w-[40%] p-2 rounded-md"
                />
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, max: e.target.value })
                  }
                  placeholder="Max price"
                  className="w-[40%] p-2 rounded-md"
                />
              </div>
              <button
                onClick={() => setStep(4)}
                className="mt-6 px-6 py-2 bg-white text-black rounded-full"
              >
                Continue
              </button>
            </>
          )}

          {/* Step 4: Contact Information */}
          {step === 4 && (
            <>
              <h3 className="text-[1rem] sm:text-[2.5rem] font-bold text-white">
                Amazing, give us a way to contact you
              </h3>
              <input
                type="text"
                placeholder="Name"
                value={contactDetails.name}
                onChange={(e) =>
                  setContactDetails({ ...contactDetails, name: e.target.value })
                }
                className="w-[80%] p-2 rounded-md mt-4"
              />
              <input
                type="email"
                placeholder="Email"
                value={contactDetails.email}
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    email: e.target.value,
                  })
                }
                className="w-[80%] p-2 rounded-md mt-4"
              />
              <input
                type="text"
                placeholder="Mobile"
                value={contactDetails.mobile}
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    mobile: e.target.value,
                  })
                }
                className="w-[80%] p-2 rounded-md mt-4"
              />
              <button
                onClick={handleSubmit}
                className="mt-6 px-6 py-2 bg-white text-black rounded-full"
              >
                Submit
              </button>
            </>
          )}

          {/* Step 5: Thank You */}
          {step === 5 && (
            <>
              <h3 className="text-[1rem] sm:text-[2.5rem] font-bold text-white">
                Thanks for your interest.
              </h3>
              <p className="text-base sm:text-lg">
                One of our representative will contact you soon on the given
                details.
              </p>
              <button
                onClick={() => setStep(1)}
                className="mt-6 px-6 py-2 bg-white text-black rounded-full"
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterestSection;
