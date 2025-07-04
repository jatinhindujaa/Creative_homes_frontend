// import About from "../_components/Frontend/about/About";

import About from "../_components/Frontend/about/About";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    // title: "SDMH - Santokba Durlabhji Memorial Hospital",
    // description:
    //   "Trusted multispeciality hospital offering advanced medical care with compassion.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "https://creativehomes.ae/about",
    },
  };
}
export default function Page() {
  return <About/>
}
 