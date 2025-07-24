// import Privacypolicy from "../_components/Frontend/privacy-policy/Privacypolicy";

// export default function Page(){
//     return <Privacypolicy/>
// }


// import About from "../_components/Frontend/about/About";

import Privacypolicy from "../_components/Frontend/privacy-policy/Privacypolicy";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title: "Privacy Policy | Creative Homes Real Estate Dubai",
    description:
    "Read the Creative Homes Privacy Policy to understand how we collect, use, and protect your personal information on our real estate website.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "http://localhost:7000/privacy-policy",
    },
  };
}
export default function Page() {
  return <Privacypolicy />;
}
 