// "use client"
// import { useAgentById } from "@/app/_components/admin/agents/useAgents";
// import { useParams, useRouter } from "next/navigation";
// import React from "react";
// import Popular from "../../news/parts/Popular";
// import InterestSection from "./GotQues";
// import MarqueeSection from "./marque";
// import { usePropertyByAgentId } from "@/app/_components/admin/properties/useProperties";

// const AgentsInner=()=> {

//     const { _id } = useParams();
//       const { data: agents, isLoading: isAgentLoading } = useAgentById(_id);
//       const { data: properties, isLoading: isPropertiesLoading } =
//         usePropertyByAgentId(_id);

//       console.log("properties", properties);
//       const locations = [
//         "3 Bedroom Apartment For Rent",
//         "Dubai Hill Estate",
//         "2 Bedroom Studio For Rent",
//         "Palm Al Jumeriah",
//         "Jumeriah Golf Estate",
//         "Emirate Hills",
//         "Downtown Dubai",
//       ];
//   return (
//     <div className=" mx-auto">
//       <div
//         className="h-48 w-full bg-cover bg-center relative"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
//         }}
//       >
//         <div className="absolute left-52 -bottom-16 w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
//           <img
//             src={agents?.image}
//             alt="Agent"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       <div className="pt-20 px-[9rem] pb-12 bg-[#282927] ">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//           <div>
//             <h1 className="text-4xl font-semibold leading-tight text-white">
//               Hi <span className="inline-block align-middle">👋</span>,<br />I
//               am{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//                 {agents?.name}
//               </span>
//             </h1>
//             <p className="text-lg font-medium mt-2 text-white">
//               {agents?.designation}
//             </p>
//             <p className="text-lg font-medium mt-2 text-white">
//               Years of Experience: {agents?.experience}
//             </p>
//             <div className="text-xl font-normal mt-1 text-white">
//               Languages: {agents?.languages?.join(", ")}
//             </div>
//             <div className="mt-2 flex items-center space-x-1">
//               {[...Array(5)].map((_, i) => (
//                 <svg
//                   key={i}
//                   className="w-5 h-5 text-yellow-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.951a1 1 0 00-.364-1.118L3.668 9.377c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.285-3.95z" />
//                 </svg>
//               ))}
//             </div>
//           </div>

//           {/* Right buttons */}
//           <div className="mt-8 md:mt-0 flex gap-4">
//             <a
//               href={`https://wa.me/${agents?.whatsapp}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <button
//                 type="button"
//                 className="flex items-center gap-2 border bg-white border-black text-black px-5 py-2 rounded-md font-semibold hover:border-white hover:bg-transparent hover:text-white transition"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path d="M20.52 3.483a3.355 3.355 0 00-4.67-.126l-1.012 1.012a.906.906 0 00-.26.682c0 .248.1.48.264.653l1.307 1.56a.835.835 0 01-.006 1.12l-1.59 1.61a4.272 4.272 0 01-5.72 0 8.674 8.674 0 01-3.457-5.78c-.07-.49.3-.937.8-.937h2.08a.793.793 0 01.738.523c.386.88 1.204 1.536 2.129 1.536a2.492 2.492 0 001.74-.788l1.167-1.195a3.348 3.348 0 001.086-2.351 3.35 3.35 0 00-1.08-2.32zM7.33 18.116a7.353 7.353 0 01-4.904-2.13l-1.03 1.032a3.36 3.36 0 005.995 2.206 6.538 6.538 0 01.512-1.108zm8.77 3.483a3.318 3.318 0 01-1.4-.308c-2.038-1.053-5.522-5.182-6.573-7.22a3.317 3.317 0 01-.312-1.415 3.33 3.33 0 011.092-2.407l1.586-1.596a4.564 4.564 0 006.354 6.378l1.61-1.59a.844.844 0 011.14.006l1.536 1.308c.173.165.4.266.65.266a.897.897 0 00.68-.264l1.012-1.012a3.356 3.356 0 00-.13-4.67l-1.048-1.048a.91.91 0 00-1.284 0l-1.5 1.5-1.037-1.037a4.503 4.503 0 00-6.586 0 5.9 5.9 0 00-1.81 4.13c0 .792.218 1.544.63 2.188 1.056 2.05 4.344 5.56 6.467 6.604a3.318 3.318 0 011.4.31l.09.04z" />
//                 </svg>
//                 Whatsapp
//               </button>
//             </a>
//             <a href={`tel:${agents?.phoneNo}`}>
//               <button
//                 type="button"
//                 className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2h-6a2 2 0 01-2-2v-4" />
//                   <path d="M12 12v8m0-8L8 16m4-4l4 4" />
//                 </svg>
//                 Call
//               </button>
//             </a>
//           </div>
//         </div>

//         {/* Services text */}
//         <div className="mt-12 text-left text-white font-semibold text-2xl tracking-wide">
//           My{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//             Services
//           </span>
//           <div className="text-lg font-bold mt-1">
//             {agents?.type?.join(", ")}
//           </div>
//         </div>

//         <div className="mt-8 text-left text-white mx-auto">
//           <h2 className="text-2xl font-semibold mb-2">About Me</h2>
//           <p>{agents?.about}</p>
//         </div>

//         <div className="mt-12 text-left text-white font-semibold text-2xl tracking-wide">
//           My {""}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//             Listing
//           </span>
//           <div className="text-xl font-bold mt-1 flex flex-row flex-wrap gap-4 pt-4">
//             {properties?.map((property, index) => (
//               <PropertyCard key={property.id || index} el={property} />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="pt-20 pb-12 bg-[#282927] flex flex-col items-center">
//         <MarqueeSection />
//         <InterestSection />
//         <Popular locations={locations} />
//       </div>
//     </div>
//   );
// }
// export default AgentsInner
// const PropertyCard = ({ el }) => {
//   const router = useRouter()
//   const {
//     _id,
//   location,
//     name,
//     price,
//     developer,
//     image,
//     handoverDate,
//     phoneNo,
//     email,
//     whatsapp,
//   } = el;

//   const handleCall = () => {
//     window.location.href = `tel:${phoneNo}`;
//   };

//   const handleEmail = () => {
//     window.location.href = `mailto:${email}`;
//   };

//   const handleWhatsapp = () => {
//     window.open(`https://wa.me/${whatsapp}`, "_blank");
//   };

//   return (
//     <div
//       className="flex flex-col gap-4 p-4 border border-white rounded-[20px] w-full sm:w-[45%] md:w-[90%] lg:w-[31%] cursor-pointer"
//       onClick={() => router.push(`/property/${_id}`)}
//     >
//       <div className="relative">
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-[200px] object-cover rounded-[20px]"
//         />
//         <span className="absolute top-4 left-4 bg-gradient-to-r from-[rgba(0,0,0,0.5)_0.07%] to-[rgba(0,0,0,0.3)_97%] text-white text-[1rem] font-medium px-3 py-2 rounded-full">
//           COMING SOON
//         </span>
//       </div>

//       <div className="flex flex-col gap-2">
//         <span className="text-[1.2rem] font-medium leading-none">{name}</span>
//         <span className="text-[0.9rem] flex items-center space-x-1">
//           <svg
//             width="10"
//             height="16"
//             viewBox="0 0 14 19"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M6.88108 0C3.08683 0 0 3.08683 0 6.88104C0 11.5898 6.15789 18.5025 6.42007 18.7945C6.66633 19.0687 7.09628 19.0682 7.34209 18.7945C7.60427 18.5025 13.7622 11.5898 13.7622 6.88104C13.7621 3.08683 10.6753 0 6.88108 0ZM6.88108 10.3431C4.9721 10.3431 3.41907 8.79002 3.41907 6.88104C3.41907 4.97206 4.97214 3.41904 6.88108 3.41904C8.79002 3.41904 10.3431 4.9721 10.3431 6.88108C10.3431 8.79006 8.79002 10.3431 6.88108 10.3431Z"
//               fill="white"
//             />
//           </svg>
//           <span>{location}</span>
//         </span>
//         <span className="text-[1rem] flex justify-between w-full">
//           <span>Developer: {developer}</span>
//           <span>Price: {price}</span>
//         </span>
//         <span className="text-[1rem] flex justify-between w-full">
//           <span>Handover Date: {handoverDate}</span>
//         </span>
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-4 mt-4">
//         <button
//           onClick={handleCall}
//           className="flex items-center gap-2 bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black"
//         >
//           Call
//         </button>
//         <button
//           onClick={handleEmail}
//           className="flex items-center gap-2 bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black"
//         >
//           Email
//         </button>
//         <button
//           onClick={handleWhatsapp}
//           className="flex items-center gap-2 bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black"
//         >
//           WhatsApp
//         </button>
//       </div>
//     </div>
//   );
// };


"use client";
import { useAgentById } from "@/app/_components/admin/agents/useAgents";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Popular from "../../news/parts/Popular";
import InterestSection from "./GotQues";
import MarqueeSection from "./marque";
import { usePropertyByAgentId } from "@/app/_components/admin/properties/useProperties";

const AgentsInner = () => {
  const { _id } = useParams();
  const { data: agents, isLoading: isAgentLoading } = useAgentById(_id);
  const { data: properties, isLoading: isPropertiesLoading } =
    usePropertyByAgentId(_id);

  const locations = [
    "3 Bedroom Apartment For Rent",
    "Dubai Hill Estate",
    "2 Bedroom Studio For Rent",
    "Palm Al Jumeriah",
    "Jumeriah Golf Estate",
    "Emirate Hills",
    "Downtown Dubai",
  ];

  return (
    <div className="mx-auto">
      <div
        className="h-48 w-full bg-cover bg-center relative sm:h-[14rem] sm:block hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 sm:left-[14%] sm:-bottom-12 w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
          <img
            src={agents?.image}
            alt="Agent"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="pt-40 sm:pt-20 px-4 sm:px-8 lg:px-[9rem] pb-12 bg-[#282927] ">
        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden sm:hidden block">
          <img
            src={agents?.image}
            alt="Agent"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-white">
              Hi <span className="inline-block align-middle">👋</span>,<br />I
              am{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
                {agents?.name}
              </span>
            </h1>
            <p className="text-lg font-medium mt-2 text-white">
              {agents?.designation}
            </p>
            <p className="text-lg font-medium mt-2 text-white">
              Years of Experience: {agents?.experience}
            </p>
            <div className="text-xl font-normal mt-1 text-white">
              Languages: {agents?.languages?.join(", ")}
            </div>
            <div className="mt-2 flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.951a1 1 0 00-.364-1.118L3.668 9.377c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.285-3.95z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-0 flex gap-4">
            <a
              href={`https://wa.me/${agents?.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="flex items-center gap-2 border bg-white border-black text-black px-5 py-2 rounded-md font-semibold hover:border-white hover:bg-transparent hover:text-white transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.483a3.355 3.355 0 00-4.67-.126l-1.012 1.012a.906.906 0 00-.26.682c0 .248.1.48.264.653l1.307 1.56a.835.835 0 01-.006 1.12l-1.59 1.61a4.272 4.272 0 01-5.72 0 8.674 8.674 0 01-3.457-5.78c-.07-.49.3-.937.8-.937h2.08a.793.793 0 01.738.523c.386.88 1.204 1.536 2.129 1.536a2.492 2.492 0 001.74-.788l1.167-1.195a3.348 3.348 0 001.086-2.351 3.35 3.35 0 00-1.08-2.32zM7.33 18.116a7.353 7.353 0 01-4.904-2.13l-1.03 1.032a3.36 3.36 0 005.995 2.206 6.538 6.538 0 01.512-1.108zm8.77 3.483a3.318 3.318 0 01-1.4-.308c-2.038-1.053-5.522-5.182-6.573-7.22a3.317 3.317 0 01-.312-1.415 3.33 3.33 0 011.092-2.407l1.586-1.596a4.564 4.564 0 006.354 6.378l1.61-1.59a.844.844 0 011.14.006l1.536 1.308c.173.165.4.266.65.266a.897.897 0 00.68-.264l1.012-1.012a3.356 3.356 0 00-.13-4.67l-1.048-1.048a.91.91 0 00-1.284 0l-1.5 1.5-1.037-1.037a4.503 4.503 0 00-6.586 0 5.9 5.9 0 00-1.81 4.13c0 .792.218 1.544.63 2.188 1.056 2.05 4.344 5.56 6.467 6.604a3.318 3.318 0 011.4.31l.09.04z" />
                </svg>
                Whatsapp
              </button>
            </a>
            <a href={`tel:${agents?.phoneNo}`}>
              <button
                type="button"
                className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2h-6a2 2 0 01-2-2v-4" />
                  <path d="M12 12v8m0-8L8 16m4-4l4 4" />
                </svg>
                Call
              </button>
            </a>
          </div>
        </div>

        <div className="mt-12 text-left text-white font-semibold text-2xl tracking-wide">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            Services
          </span>
          <div className="text-lg font-bold mt-1 capitalize">
            {agents?.type?.join(", ")}
          </div>
        </div>

        <div className="mt-8 text-left text-white mx-auto">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>{agents?.about}</p>
        </div>

        <div className="mt-12 text-left text-white font-semibold text-2xl tracking-wide">
          My {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            Listing
          </span>
          <div className="text-xl font-bold mt-1 flex flex-row flex-wrap gap-4 pt-4">
            {properties?.map((property, index) => (
              <PropertyCard key={property.id || index} el={property} />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-20 pb-12 bg-[#282927] flex flex-col items-center">
        <MarqueeSection />
        <InterestSection />
        <Popular locations={locations} />
      </div>
    </div>
  );
};

const PropertyCard = ({ el }) => {
  const router = useRouter();
  const {
    _id,
    location,
    name,
    price,
    developer,
    image,
    handoverDate,
    phoneNo,
    email,
    whatsapp,
  } = el;
console.log("el",el)
  const handleCall = () => {
    window.location.href = `tel:${phoneNo}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsapp = () => {
    window.open(`https://wa.me/${whatsapp}`, "_blank");
  };

  return (
    <div
      className="flex flex-col gap-4 p-4 border border-white rounded-[20px] w-full sm:w-[45%] md:w-[90%] lg:w-[31%] cursor-pointer"
      onClick={() => router.push(`/property/${_id}`)}
    >
      <div className="relative">
        <img
          src={el.multipleImages[0]}
          alt={name}
          className="w-full h-[200px] object-cover rounded-[20px]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[1.2rem] font-medium leading-none">{name}</span>
        {/* <span className="text-[0.9rem] flex items-center space-x-1">
          <svg
            width="10"
            height="16"
            viewBox="0 0 14 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.88108 0C3.08683 0 0 3.08683 0 6.88104C0 11.5898 6.15789 18.5025 6.42007 18.7945C6.66633 19.0687 7.09628 19.0682 7.34209 18.7945C7.60427 18.5025 13.7622 11.5898 13.7622 6.88104C13.7621 3.08683 10.6753 0 6.88108 0ZM6.88108 10.3431C4.9721 10.3431 3.41907 8.79002 3.41907 6.88104C3.41907 4.97206 4.97214 3.41904 6.88108 3.41904C8.79002 3.41904 10.3431 4.9721 10.3431 6.88108C10.3431 8.79006 8.79002 10.3431 6.88108 10.3431Z"
              fill="white"
            />
          </svg>
          <span>{location}</span>
        </span> */}
          <span>Price: {price}</span>
      </div>
    </div>
  );
};

export default AgentsInner;
