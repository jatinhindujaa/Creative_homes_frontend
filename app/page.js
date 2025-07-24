// import Home from "./_components/Frontend/home/Home";

// export default function home() {
//   return (
//     <h2 className="w-full h-full bg-[#282927] text-white ">
//       <Home />
//     </h2>
//   );
// }


// import About from "../_components/Frontend/about/About";

import Home from "./_components/Frontend/home/Home";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title: "Dubai Real Estate | Buy, Rent & Invest - Creative Homes",
    description:
    "Best Real Estate Agency for Dubai real estate. Creative Homes offers expert guidance on buying, renting, selling, and off-plan investments in prime properties.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "http://localhost:7000/",
    },
  };
}
export default function Page() {
  return(
      <h2 className="w-full h-full bg-[#282927] text-white ">
        <Home />
      </h2>
  )
}
