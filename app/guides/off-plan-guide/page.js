import InsideGuide from "@/app/_components/Frontend/guides/InsideGuide";
import InsideguideHome from "@/app/_components/Frontend/guides/InsideguideHome";

export default function Page(){
    const steps = [
      {
        step: 1,
        title: "Know What You Want",
        content:
          "Since you can't physically see the property yet, think about what you need: your budget, desired location, trusted developer, type of property, size, and the kind of community and facilities you're looking for. Buying off-plan often means getting the best price, a chance for profit before completion, and easier payment plans.",
        position: "left",
      },
      {
        step: 2,
        title: "Get an Off-Plan Expert",
        content:
          "The easiest way to buy off-plan in Dubai is with a real estate agency specializing in off-plan properties. Your agent works for you, ensuring contracts are correct, keeping you updated, and helping with the handover. They'll have access to the best projects and developers.",
        position: "right",
      },
      {
        step: 3,
        title: "Find Your Property",
        content:
          "Your agent will connect with your needs to available projects, providing all the details like floor plans, payment plans, and brochures. Some developers even have mock-up properties you can visit to see the quality and layout.",
        position: "left",
      },
      {
        step: 4,
        title: "Reserve Your Unit",
        content:
          "Once you find 'the one,' your agent will take you to the developer's sales office. You'll choose your exact unit and sign a Sales Purchase Agreement (SPA). You'll need to pay an initial deposit (usually 10-20%) and bring a passport copy. Within 30 days, there's also a 4% DLD title registration fee and a AED 1,000 oqood fee.",
        position: "right",
      },
      {
        step: 5,
        title: "Make Your Payments",
        content:
          "You'll follow the payment plan in your contract until the property is handed over. If needed, you can usually resell the property during this period. Make sure you understand all the payment terms.",
        position: "left",
      },
      {
        step: 6,
        title: "Handover",
        content:
          "When the property is ready, you'll inspect it for any issues. After a final payment, you'll receive your keys and access cards. Your agent will assist to ensure a smooth process so you can move in quickly.",
        position: "right",
      },
    ];

    return <InsideguideHome steps={steps} />;
}