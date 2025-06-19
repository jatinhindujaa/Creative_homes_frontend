import InsideGuide from "@/app/_components/Frontend/guides/InsideGuide";
import InsideguideHome from "@/app/_components/Frontend/guides/InsideguideHome";

export default function Page(){
    // const steps = [
    //   {
    //     step: 1,
    //     title: " Know What You Want",
    //     content:
    //     "Since you can't physically see the property yet, think about what you need: your budget, desired location, trusted developer, type of property, size, and the kind of community and facilities you're looking for. Buying off-plan often means getting the best price, a chance for profit before completion, and easier payment plans.",
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
        title: "Chat with a Mortgage Advisor",
        content:
          "Don't just jump into looking at interest rates; there's much more to consider, like life insurance, property insurance, and your Loan to Value (LTV). It's smart to begin by talking to a qualified mortgage advisor from a good company. Larger mortgage brokers typically work with most banks in the UAE, giving them access to a wide range of mortgage options. This can save you both time and money in the long run.",
        position: "left",
      },
      {
        step: 2,
        title: "Get Pre-Approved",
        content:
          "After speaking with an advisor and picking a suitable bank, you'll submit your documents for review to get a Pre-approval. Think of this as the bank's official statement on your creditworthiness, outlining the basic terms of your mortgage, such as the loan amount, LTV, repayment period, and interest rates. Getting pre-approved is usually the most time-consuming part, so it's a good idea to secure this before you pick a property or sign any agreements. A pre-approval tells you exactly what your budget is, and it's typically valid for 60 days.",
        position: "right",
      },
      {
        step: 3,
        title: "Property Valuation",
        content:
          "Once you've chosen your property and signed the Memorandum of Understanding (MOU), the bank will arrange for a valuation. A third-party valuer will assess the property and determine its fair market value. This step is crucial because the bank will base its loan on either the valuation amount or the MOU price, whichever is lower. If the valuation comes in lower than what you agreed to pay in the MOU, you'll be responsible for covering that difference. Valuations are generally valid for 45 days.",
        position: "left",
      },
      {
        step: 4,
        title: "Final Approval Letter",
        content:
          "This is the last step before your mortgage is finalized. The bank will issue a final approval letter, which details all the formal terms of your financing. Your mortgage advisor will help you review this important document to make sure everything looks good.",
        position: "right",
      },
      {
        step: 5,
        title: "After Final Approval",
        content:
          "Once you've signed the Final Approval Letter, the bank will open an account in your name and ask you to deposit your share of the funds. With the account funded, the bank will start preparing manager's cheques to pay the relevant parties, like the seller, the developer, or to settle the seller's existing mortgage.",
        position: "left",
      },
      {
        step: 6,
        title: "Property Transfer",
        content:
          "With all the necessary cheques issued, the bank will schedule the official transfer of the property ownership at the Dubai Land Department (DLD).",
        position: "right",
      },
      {
        step: 7,
        title: "New Title Deed",
        content:
          "Finally, at the Dubai Land Department, after all formalities and payments are complete, a new title deed will be issued in your name. Congratulations, you're now a property owner in Dubai!",
        position: "left",
      },
    ];

    return <InsideguideHome steps={steps} title={"Mortgage"} des={"Guide"} />;
}