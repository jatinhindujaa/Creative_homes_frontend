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
       title: "Work Out Your Budget and Needs",
       content:
         "Before you start looking for a rental, figure out what you can comfortably afford and what you need. In Dubai, you usually pay rent with post-dated cheques over the contract term (1 to 12 cheques), and fewer cheques often mean better deals. You'll need your passport copy, resident visa copy, Emirates ID (front and back), and a chequebook. Remember to budget for these extra costs: Ejari fees, Security deposit, Moving fees, Agency fee, and DEWA fees. If your visa isn't ready yet, your company can provide a letter for your agent to share with the landlord.",
       position: "left",
     },
     {
       step: 2,
       title: "Search for the Right Home",
       content:
         "Start by asking friends or searching online. Consider the community, property type, location, and connectivity. Find an experienced real estate agent who understands your needs; they'll show you suitable properties. Using an agency can also mean the landlord is vetted, and you'll get expert advice on tenancy laws. Always check Google reviews for agencies. Ask who manages the property for maintenance, preferably a reputable Property Manager.",
       position: "right",
     },
     {
       step: 3,
       title: "Schedule Property Viewings with Your Agent",
       content:
         "Your agent will show you homes matching your budget. View several options until you find what you like. Avoid viewing the same property with different agents, as this can create false demand and push up the rent.",
       position: "left",
     },
     {
       step: 4,
       title: "Making an Offer",
       content:
         "Once you find a home, make an offer. Your agent will help you negotiate with the landlord on the price, number of cheques, contract start date/duration, and deposit. Other terms, like pets or furnishing, can also be discussed.",
       position: "right",
     },
     {
       step: 5,
       title: "Agree on the Terms of Rent",
       content:
         "After both parties agree on the offer, the tenancy contract will be drafted. It's essential that these terms fully comply with Dubai's tenancy laws to be a valid contract. Your RERA-registered agent will ensure this compliance. For unfurnished properties, a 5% security deposit is typically required, while for furnished properties, it's usually 10%.",
       position: "left",
     },
     {
       step: 6,
       title: "Signing the Contracts",
       content:
         "Once everyone is happy, both parties sign the contracts. You'll hand over the rent cheques and the agency commission. Keys and access cards are given once cheques clear or payment is made. Ensure cheques are made to the landlord's exact name on the title deed, or a verified Power of Attorney holder.",
       position: "right",
     },
     {
       step: 7,
       title: "Ejari Registration",
       content:
         "Registering your tenancy contract with Ejari is a mandatory step in Dubai. An Ejari Certificate is needed for various essential processes, such as visa renewals or sponsoring a housemaid. To complete Ejari registration, you'll need the original tenancy contract, the property's title deed, copies of passports (tenant and landlord), and a copy of your Emirates ID.",
       position: "left",
     },
     {
       step: 8,
       title: "Connecting DEWA",
       content:
         "To get your electricity and water connected, submit certain documents to DEWA, including the property's DEWA number, copies of passports (tenant and landlord), the DEWA application form, the property's Title Deed, the AED 130 setup fee, and a refundable deposit. DEWA services are typically activated within 24 hours of completing registration and payment.",
       position: "right",
     },
     {
       step: 9,
       title: "Prepare to Move In",
       content:
         "Some developers require a No Objection Certificate (NOC) to move in. Get this with your Ejari Certificate, tenant passport/visa, tenancy contract copy, and move-in form. Check for any building restrictions on move-in times. Before settling in, inspect the property and take photos of any existing issues, ensure maintenance is done, and ask for it to be cleaned. The property must be habitable before you move in.",
       position: "left",
     },
   ];

    return <InsideguideHome steps={steps} title={"Renting"} des={"Guide"} />;
}