import Guides from "../_components/Frontend/guides/Guides";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title: "Dubai Real Estate Guides | Property Investment Tips - Creative Homes",
    description:
    "Navigate the Dubai property market with our comprehensive guides. Learn about buying, selling, renting, and off-plan investments in Dubai.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "https://creativehomes.ae/guides",
    },
  };
}
export default function Page() {
  return <Guides />;
}
