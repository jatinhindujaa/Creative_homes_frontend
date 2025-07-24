// import Careers from "../_components/Frontend/careers/Careers";

// export default function Page() {
//   return <Careers />;
// }


// import About from "../_components/Frontend/about/About";

import Careers from "../_components/Frontend/careers/Careers";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title: "Careers at Creative Homes | Real Estate Jobs Dubai",
    description:
    "Join the Creative Homes team! Explore exciting career opportunities in Dubai's dynamic real estate market and grow with us.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "http://localhost:7000/careers",
    },
  };
}
export default function Page() {
  return <Careers/>
}
 