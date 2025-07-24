import Mortgage from "../_components/Frontend/mortgage/Mortgage";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title:"Mortgage Calculator UAE | Dubai Real Estate Finance - Creative Homes", 
    description:
    "Calculate your potential mortgage payments for properties in Dubai. Get answers to FAQs about UAE mortgage rates, eligibility, and more.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "http://localhost:7000/mortgage-calculator",
    },
  };
}
export default function Page() {
  return <Mortgage />;
}
