// export default function TopArea({ description, title }) {
//   return (
//     <section
//       className="rounded-2xl shadow-2xl p-6 md:p-10 md:pt-6 mx-auto md:max-w-[73rem] mt-28 md:mt-40 max-w-[22rem] gap-3"
//       style={{ boxShadow: "0 0 5px 1px aliceblue" }}
//     >
//       <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold text-[3rem]">
//        {title}
//       </span>
//       <p className="text-white text-lg leading-relaxed font-extralight">
//         {description}
//       </p>
//     </section>
//   );
// }


export default function TopArea({ description, title }) {
  return (
    <section
      className="relative rounded-2xl shadow-2xl p-6 md:p-10 md:pt-6 mx-auto md:max-w-[73rem] mt-[10rem] md:mt-40 max-w-[16rem] gap-3"
      style={{ boxShadow: "0 0 5px 1px aliceblue" }}
    >
      <img
        src="/Vector.png"
        alt="Icon"
        className="absolute -top-[35px] -left-[35px] w-[9rem] h-[9rem]"
      />

      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold md:text-[2rem] text-[2rem]">
        {title}
      </span>
      <p className="text-white md:text-[1rem] text-[1rem] leading-relaxed font-extralight">
        {description}
      </p>
    </section>
  );
}
