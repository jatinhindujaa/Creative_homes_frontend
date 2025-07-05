"use client";

export default function WhyUsSection() {
  return (
    <section className=" text-white text-center py-16 px-4 md:px-0 w-[80%]">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        WHY{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          US?
        </span>
      </h2>

      {/* Description */}
      <p className=" mx-auto text-gray-300 text-sm md:text-base leading-relaxed mb-12">
        At Creative Homes Real Estate, we make buying, selling, and investing in
        property easy and stress-free. We work with trusted developers to offer
        top-quality homes and great investment deals. Our team listens to your
        needs and helps you find the perfect property. With us, you get expert
        advice, honest service, and a smooth process from start to finish.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
        <div className="text-[2rem]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            18+
          </span>
          <p className="text-xl mt-2">Experience</p>
        </div>
        <div className="text-[2rem]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            40K+
          </span>
          <p className="text-xl mt-2"> Email Subscribers</p>
        </div>
        <div className="text-[2rem]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            35+
          </span>
          <p className="text-xl mt-2">Active agents</p>
        </div>
        <div className="text-[2rem]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            31.5K+
          </span>
          <p className="text-xl mt-2">Social media followers</p>
        </div>
      </div>
    </section>
  );
}
