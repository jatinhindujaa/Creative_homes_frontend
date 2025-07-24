// import Property from "../_components/Frontend/property/Property";

// export default function Page (){
//     return (
//       <h2 className="w-full h-full bg-[#282927] text-white ">
//         <Property />
//       </h2>
//     );
    
// }



import Property from "../_components/Frontend/property/Property";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title:
      " Dubai Properties for Sale | Buy Real Estate in Dubai - Creative Homes",
    description:
      "Explore a wide range of properties for sale in Dubai with Creative Homes. Find your dream home or investment property with expert guidance.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "http://localhost:7000/property",
    },
  };
}
export default function Page() {
  return <Property />;
}
 