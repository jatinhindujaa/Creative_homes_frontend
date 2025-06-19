import InsideGuide from "@/app/_components/Frontend/guides/InsideGuide";
import InsideguideHome from "@/app/_components/Frontend/guides/InsideguideHome";

export default function Page(){
    const steps = [
      {
        step: 1,
        title: " Assess Your Budget",
        content:
          "Before diving into property hunting, evaluate your finances. Consider the down payment (usually 25% for expats and 20% for UAE nationals), mortgage options, and additional costs such as registration fees, agent commissions, and service charges.",
        position: "left",
      },
      {
        step: 2,
        title: " Get Pre-Approved for a Mortgage",
        content:
          "If you're financing your purchase, secure pre-approval from a bank or lender. This will help you understand your borrowing limit and make the buying process smoother.",
        position: "right",
      },
      {
        step: 3,
        title: " Choose a Reliable Real Estate Agent",
        content:
          " Work with a trusted real estate broker who understands the Dubai property market. A professional agent can guide you through the best locations, property types, and investment opportunities.",
        position: "left",
      },
      {
        step: 4,
        title: " Start Exploring Properties",
        content:
          "Visit different properties to find one that meets your needs. Consider factors like location, amenities, and future developments in the area.",
        position: "right",
      },
      {
        step: 5,
        title: "Make An Offer",
        content:
          "Once you've found the right property, submit an offer through your agent. Negotiations may take place before reaching an agreed price.",
        position: "left",
      },
      {
        step: 6,
        title: "Sign the Memorandum of Understanding (MOU)",
        content:
          "After your offer is accepted, both buyer and seller sign an MOU, outlining the terms and conditions of the sale. At this stage, a deposit (typically 10%) is required.",
        position: "right",
      },
      {
        step: 7,
        title: "Sales Progression & Mortgage Finalization",
        content:
          "Your agent or legal representative will guide you through due diligence, ensuring all legal paperwork and payments are in order. If using a mortgage, your lender will complete their assessment.",
        position: "left",
      },
      {
        step: 8,
        title: "Apply for the No Objection Certificate (NOC)",
        content:
          "The developer must issue an NOC confirming there are no outstanding service fees or legal issues before ownership transfer can proceed.",
        position: "right",
      },
      {
        step: 9,
        title: "Transfer of Ownership",
        content:
          "Finalize the transaction at the Dubai Land Department. Once payments are made and paperwork is completed, the property title is officially transferred to your name.",
        position: "left",
      },
    ];
    return <InsideguideHome steps={steps} title={"Buying"} des={"Guide"}/>;
}