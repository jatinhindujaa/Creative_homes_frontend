export default function ExploreDubai({ description, title }) {
  return (
    <section
      className="rounded-2xl shadow-2xl p-6 md:p-10 mx-auto md:max-w-[79rem] mt-28 md:mt-28 max-w-[22rem]"
      style={{ boxShadow: "0 0 5px 1px aliceblue" }}
    >
      <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
        {title}
      </h2>
      <p className="text-white text-lg leading-relaxed font-extralight">
        {description}
      </p>
    </section>
  );
}
