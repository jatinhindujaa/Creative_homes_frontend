import InsideGuide from "@/app/_components/Frontend/guides/InsideGuide";
import InsideguideHome from "@/app/_components/Frontend/guides/InsideguideHome";

export default function Page(){
    // const steps = [
    //   {
    //     step: 1,
    //     title: " Assess Your Budget",
    //     content:
    //       "Before diving into property hunting, evaluate your finances. Consider the down payment (usually 25% for expats and 20% for UAE nationals), mortgage options, and additional costs such as registration fees, agent commissions, and service charges.",
    //     position: "left",
    //   },
    //   {
    //     step: 2,
    //     title: " Get Pre-Approved for a Mortgage",
    //     content:
    //       "If you're financing your purchase, secure pre-approval from a bank or lender. This will help you understand your borrowing limit and make the buying process smoother.",
    //     position: "right",
    //   },
    //   {
    //     step: 3,
    //     title: " Choose a Reliable Real Estate Agent",
    //     content:
    //       " Work with a trusted real estate broker who understands the Dubai property market. A professional agent can guide you through the best locations, property types, and investment opportunities.",
    //     position: "left",
    //   },
    //   {
    //     step: 4,
    //     title: " Start Exploring Properties",
    //     content:
    //       "Visit different properties to find one that meets your needs. Consider factors like location, amenities, and future developments in the area.",
    //     position: "right",
    //   },
    //   {
    //     step: 5,
    //     title: "Make An Offer",
    //     content:
    //       "Once you've found the right property, submit an offer through your agent. Negotiations may take place before reaching an agreed price.",
    //     position: "left",
    //   },
    //   {
    //     step: 6,
    //     title: "Sign the Memorandum of Understanding (MOU)",
    //     content:
    //       "After your offer is accepted, both buyer and seller sign an MOU, outlining the terms and conditions of the sale. At this stage, a deposit (typically 10%) is required.",
    //     position: "right",
    //   },
    //   {
    //     step: 7,
    //     title: "Sales Progression & Mortgage Finalization",
    //     content:
    //       "Your agent or legal representative will guide you through due diligence, ensuring all legal paperwork and payments are in order. If using a mortgage, your lender will complete their assessment.",
    //     position: "left",
    //   },
    //   {
    //     step: 8,
    //     title: "Apply for the No Objection Certificate (NOC)",
    //     content:
    //       "The developer must issue an NOC confirming there are no outstanding service fees or legal issues before ownership transfer can proceed.",
    //     position: "right",
    //   },
    //   {
    //     step: 9,
    //     title: "Transfer of Ownership",
    //     content:
    //       "Finalize the transaction at the Dubai Land Department. Once payments are made and paperwork is completed, the property title is officially transferred to your name.",
    //     position: "left",
    //   },
    // ];
  const steps = [
    {
      step: 1,
      title: "Showcase of the Property",
      content:
        "Making your property look its best is key to selling it quickly and for a good price. Fix any cracks, defects, or maintenance issues before listing. Consider a fresh coat of paint and a thorough clean, including tidying the garden if it's a villa. Buyers aren't always great at imagining potential, so creating an emotional connection is crucial. Addressing minor repairs beforehand ensures your property shines and avoids putting off potential buyers.",
      position: "left",
    },
    {
      step: 2,
      title: "Get a Market Appraisal",
      content:
        "Your real estate consultant will visit your property to assess its value. Pricing your property correctly is the most important factor for a timely sale. Our agents will conduct a study to give you accurate pricing guidelines based on the development, location, and property type, and help you plan a selling strategy. We also use tools like DXBinteract.com to provide you with real facts on recent transactions and rental data, helping you make an informed pricing decision.",
      position: "right",
    },
    {
      step: 3,
      title: "List Your Property for Sale",
      content:
        "To officially list your property, you'll need to sign a Form A (Contract A), which is a legal agreement between you (the seller) and your broker. You'll also need to provide a copy of your title deed/oqood and your passport/Emirates ID. Your broker will then apply for a marketing permit to advertise your property.",
      position: "left",
    },
    {
      step: 4,
      title: "Market Your Home Effectively",
      content:
        "Effective marketing is vital for a sale. About 70% of homes sell within their first four weeks on the market. We use professional photos and descriptions, make listings premium on all major property portals, and run social media and email campaigns to reach the widest possible audience. Having the right agent who understands these marketing channels is crucial to maximizing exposure.",
      position: "right",
    },
    {
      step: 5,
      title: "Show Your Property to Buyers",
      content:
        "Your agent will arrange viewings with potential buyers. As an expert, they won't just show the property; they'll also provide information and answer questions about the property, community, and pricing. Your agent will report back on serious leads and facilitate negotiations on your behalf. Providing easy and unrestricted access to your agent for viewings is essential for quick results. Ensure all necessary documentation is available for smooth showings.",
      position: "left",
    },
    {
      step: 6,
      title: "Agree on Terms with the Buyer",
      content:
        "Once a serious buyer is found, your agent will help negotiate the price and terms between you and them, using market data to build a strong case. A 10% deposit cheque from the buyer can show they're serious. After an agreement, both parties will sign a Memorandum of Understanding (MOU), also known as Form/Contract F, which can often be signed electronically. The buyer's 10% security deposit is usually held by the agency until the property transfer. Your agency should give you a clear timeline of the process to avoid any surprises.",
      position: "right",
    },
    {
      step: 7,
      title: "What if You Have a Mortgage?",
      content:
        "If you have an existing mortgage, the buyer will need to settle it before the No Objection Certificate (NOC) can be issued. This involves your bank. To save time, start the process with your bank as soon as you sign an MOU to get a liability letter (this can take up to two weeks). If the buyer is paying cash, the property can be blocked at the Dubai Land Department Trustee office to protect their payment while your mortgage is cleared. If the buyer is getting a loan, their bank will coordinate directly with yours.",
      position: "left",
    },
    {
      step: 8,
      title: "Apply for the NOC",
      content:
        "You'll meet at the developer's office (or apply online) to get a No Objection Certificate (NOC), which is essential for selling. The developer will check if all service charges or installments are cleared. The NOC fee is typically between AED 500-5,000 + VAT. They might also inspect the property for any unapproved modifications before issuing the certificate. NOC processing usually takes up to 5 working days, though this can sometimes vary.",
      position: "right",
    },
    {
      step: 9,
      title: "Disconnect Utilities",
      content:
        "Start the process of disconnecting your utilities, like DEWA (Dubai Electricity and Water Authority). By this stage, everyone should know the property transfer date. Prompt disconnection avoids delays. This can usually be done online and takes 24-48 hours.",
      position: "left",
    },
    {
      step: 10,
      title: "Property Transfer & New Title Deed",
      content:
        "Once the NOC is issued, all parties go to a DLD-approved trustee office to officially transfer ownership and finalize payment. The Dubai Land Department (DLD) requires the purchase price to be paid to the seller via a manager's cheque. Separate manager's cheques are also needed for the 4% DLD transfer fee and the trustee office admin fee (which varies based on property value, and isn't applicable for off-plan properties as developers handle those transfers directly). Once all formalities are complete, the DLD issues a new title deed in the buyer's name. The buyer will also settle any prepaid service charges or rent with you on a pro-rata basis.",
      position: "right",
    },
    {
      step: 11,
      title: "Validate Pricing with DXB Interact",
      content:
        "Before finalizing, do a final market check using DXB Interact. This tool provides current insights on market trends and prices, ensuring your property is competitively priced and helps attract serious buyers to maximize your sale potential.",
      position: "left",
    },
  ];

  return <InsideguideHome steps={steps} title={"Selling"} des={"Guide"} />;
}