// import React from 'react'

// const Privacypolicy = () => {
//   return (
//     <div>Privacypolicy</div>
//   )
// }

// export default Privacypolicy


import React from "react";

const Privacypolicy = () => {
  return (
    <div className="min-h-screen bg-[#282927] text-white py-10 px-5">
      <div className="max-w-4xl mx-auto pt-16 text-white">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At <strong>Creative Homes</strong>, we are committed to protecting the
          privacy and security of your personal information. This Privacy Policy
          outlines how we collect, use, and safeguard the data you provide us
          through our website. Please read this policy carefully to understand
          our practices regarding your personal information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Information We Collect:
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Property preferences and requirements</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          How We Use Your Information:
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>To provide and improve our services to you</li>
          <li>To respond to your inquiries and requests</li>
          <li>To personalize your experience on our Site</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Data Sharing:</h2>
        <p className="mb-4">
          We may share your personal information with our experienced and
          trusted property advisors who assist us in delivering our services to
          you. They are obligated to keep your information confidential and are
          not allowed to use it for any other purpose.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Your Consent:</h2>
        <p className="mb-4">
          By using our Site and providing your information, you consent to the
          collection, use, and disclosure of your personal data as described in
          this Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Data Security:</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Changes to this Policy:
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the effective date will be revised
          accordingly.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us:</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at{" "}
          <a
            href="mailto:info@creativehomes.ae"
            className="text-blue-600 underline"
          >
            info@creativehomes.ae
          </a>
          .
        </p>

        <p className="mt-6 font-medium">
          By using our website, you acknowledge that you have read and
          understood our Privacy Policy and agree to its terms. Thank you for
          choosing Creative Homes.
        </p>

        <p className="mt-2 font-medium">
          The privacy of your data is our priority.
        </p>
      </div>
    </div>
  );
};

export default Privacypolicy;
