// import Meet from "../_components/Frontend/meettheteam/Meet";

// export default function Page (){
//     return <Meet/>
// }



// import About from "../_components/Frontend/about/About";

import Meet from "../_components/Frontend/meettheteam/Meet";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title: "Meet Our Expert Real Estate Team | Creative Homes Dubai",
    description:
    "Get to know the dedicated property specialists at Creative Homes. Our experienced team is ready to guide you in Dubai's real estate market.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "http://localhost:7000/meet-the-team",
    },
  };
}
export default function Page() {
  return <Meet/>
}
 