import OffPlan from "../_components/Frontend/offplan/OffPlan";

export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title: "Off-Plan Properties in Dubai | New Developments - Creative Homes",
    description:
    "Discover exciting off-plan investment opportunities in Dubai. Explore new developments and secure your future property with Creative Homes.",
    // keywords:
    //   "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
    alternates: {
      canonical: "http://localhost:7000/off-plan-properties",
    },
  };
}
export default function Page() {
  return <OffPlan/>
}
 