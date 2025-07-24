// import About from "../_components/Frontend/about/About";

import News from "../_components/Frontend/news/News";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title: "Dubai Real Estate News & Market Insights - Creative Homes",
    description:
    "Stay updated with the latest Dubai real estate news, market trends, and investment insights from Creative Homes property experts.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "http://localhost:7000/news",
    },
  };
}
export default function Page() {
  return <News />;
}
