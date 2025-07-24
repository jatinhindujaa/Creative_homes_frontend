// import FeatureProperty from "../_components/Frontend/featuredproperty/FeatureProperty";

// export default function Page(){
//     return <FeatureProperty/>
// }

// import About from "../_components/Frontend/about/About";

import FeatureProperty from "../_components/Frontend/featuredproperty/FeatureProperty";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title: "Featured Properties in Dubai | Luxury Homes & Insights",
    description:
      "Explore Creative Homes' exclusive featured properties in Dubai, including luxury homes and investment opportunities. Access expert insights & connect with top agents.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "http://localhost:7000/featured",
    },
  };
}
export default function Page() {
  return <FeatureProperty />;
}
 