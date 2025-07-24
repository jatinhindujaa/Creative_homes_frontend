// import Contact from "../_components/Frontend/contact/Contact";

// export default function Page(){
//     return <Contact/>
// }
// import About from "../_components/Frontend/about/About";

import Contact from "../_components/Frontend/contact/Contact";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title: "Contact Creative Homes Real Estate Dubai | Get in Touch",
    description:
      " Have questions about Dubai real estate? Contact Creative Homes for expert assistance. Find our office, phone, and email details here.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "http://localhost:7000/contact-us",
    },
  };
}
export default function Page() {
  return <Contact/>
}
 