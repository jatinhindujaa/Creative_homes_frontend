// import About from "../_components/Frontend/about/About";

import About from "../_components/Frontend/about/About";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title: "About Creative Homes Real Estate | Dubai Property Experts",
    description:
      ": Learn about Creative Homes Real Estate, a leading Dubai agency. Discover our mission, extensive experience, and client-focused approach to property buying, selling & leasing.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "http://localhost:7000/about",
    },
  };
}
export default function Page() {
  return <About/>
}
 