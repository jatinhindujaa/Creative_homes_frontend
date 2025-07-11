// "use client";
// import React from "react";

// const Careerjoin = () => {
//   const jobs = [
//     { title: "Business Assistant (Admin)", link: "/apply/business-assistant" },
//     {
//       title: "Business Development Representative – DACH (Sales)",
//       link: "/apply/business-development-representative",
//     },
//     { title: "Commercial Expert (Sales)", link: "/apply/commercial-expert" },
//     { title: "Developer Agent (Sales)", link: "/apply/developer-agent" },
//     {
//       title: "Legal Manager (Legal & Conveyancing)",
//       link: "/apply/legal-manager",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 py-12 sm:py-16 md:py-20">
//       <div className="mx-auto text-center px-4 max-w-[50%]">
//         <h2 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
//           Join Us
//         </h2>
//         <div className="space-y-6">
//           {jobs.map((job, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md"
//             >
//               <span className="text-lg text-gray-800 w-[43%] text-left">
//                 {job.title}
//               </span>
//               <div className="flex gap-4">
//                 <a
//                   href={job.link}
//                   className="text-white bg-black py-2 px-6 rounded-full text-sm hover:bg-gray-800 transition"
//                 >
//                   View job
//                 </a>
//                 <a
//                   href={job.link}
//                   className="text-white bg-black py-2 px-6 rounded-full text-sm hover:bg-gray-800 transition"
//                 >
//                   Apply Now
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Careerjoin;


// "use client";
// import { useOpenings } from "@/app/_components/admin/openings/useOpenings";
// import React, { useState } from "react";

// const Careerjoin = () => {
//   const [isJobModalOpen, setJobModalOpen] = useState(false);
//   const [isFormModalOpen, setFormModalOpen] = useState(false);
//   const [selectedJob, setSelectedJob] = useState(null);
// const {data, isLoading} = useOpenings()
//   const jobs = [
//     { title: "Business Assistant (Admin)", link: "/apply/business-assistant", jd: "As a Business Assistant, you will be responsible for managing daily operations, ensuring smooth administrative processes, and providing support to the management team. You will handle scheduling, communications, and organize meetings, while also assisting in report generation and other business functions." },
//     {
//       title: "Business Development Representative – DACH (Sales)",
//       link: "/apply/business-development-representative",
//       jd: "As a Business Development Representative for DACH, your main responsibilities will be identifying business opportunities, nurturing leads, and driving sales growth in the DACH region. You'll be working closely with the sales and marketing teams to achieve our goals in this critical market.",
//     },
//     { title: "Commercial Expert (Sales)", link: "/apply/commercial-expert", jd: "The Commercial Expert will focus on generating new sales opportunities, negotiating contracts, and building long-lasting relationships with clients. You will play a key role in optimizing our sales strategies and driving revenue growth." },
//     { title: "Developer Agent (Sales)", link: "/apply/developer-agent", jd: "As a Developer Agent, you will leverage your technical knowledge to sell solutions to clients. You'll need to identify and address client needs, ensuring that our development services align with their business objectives." },
//     {
//       title: "Legal Manager (Legal & Conveyancing)",
//       link: "/apply/legal-manager",
//       jd: "The Legal Manager will oversee all legal matters, including contracts, compliance, and disputes. You will be responsible for ensuring that the company operates within the legal framework and provide guidance on complex legal matters.",
//     },
//   ];

//   const openJobModal = (job) => {
//     setSelectedJob(job);
//     setJobModalOpen(true);
//   };

//   const closeJobModal = () => setJobModalOpen(false);

//   const openFormModal = () => setFormModalOpen(true);

//   const closeFormModal = () => setFormModalOpen(false);

//   return (
//     <div className=" py-12 sm:py-16 md:py-14">
//       <div className="mx-auto text-center px-4 max-w-[50%]">
//         <h2 className="text-4xl font-bold text-white mb-4 sm:text-5xl">
//           Join Us
//         </h2>
//         <div className="space-y-6">
//           {data?.map((job, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md"
//             >
//               <span className="text-lg text-gray-800 w-[43%] text-left">
//                 {job.position}-{job.location}
//               </span>
//               <div className="flex gap-4">
//                 <button
//                   onClick={() => openJobModal(job)}
//                   className="text-white bg-black py-2 px-6 rounded-full text-sm hover:bg-gray-800 transition"
//                 >
//                   View job
//                 </button>
//                 <button
//                   onClick={openFormModal}
//                   className="text-white bg-black py-2 px-6 rounded-full text-sm hover:bg-gray-800 transition"
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Job Description Modal */}
//       {isJobModalOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={closeJobModal}
//               className="absolute top-2 right-2 text-gray-600 text-2xl"
//             >
//               &times;
//             </button>
//             <h3 className="text-2xl font-bold mb-4">{selectedJob.position}</h3>
//             <p>{selectedJob.jd}</p>
//           </div>
//         </div>
//       )}

//       {/* Apply Now Modal */}
//       {isFormModalOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 relative rounded-lg max-w-lg w-full">
//             <button
//               onClick={closeFormModal}
//               className="absolute top-2 right-2 text-gray-600 text-2xl"
//             >
//               &times;
//             </button>
//             <h3 className="text-2xl font-bold mb-4">Apply Now</h3>

//             <form>
//               <div className="mb-4">
//                 <label className="block text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   className="w-full p-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Phone</label>
//                 <div className="flex items-center">
//                   <span className="px-2">+971</span>
//                   <input
//                     type="tel"
//                     className="w-full p-2 border rounded-lg"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Attach your CV</label>
//                 <input
//                   type="file"
//                   className="w-full p-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-green-500 text-white rounded-lg"
//               >
//                 Submit Details
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Careerjoin;



// "use client";
// import React, { useState } from "react";
// import { useCreateCareers } from "@/app/_components/admin/careers/useCareers";
// import { useOpenings } from "@/app/_components/admin/openings/useOpenings";

// const Careerjoin = () => {
//   const [isJobModalOpen, setJobModalOpen] = useState(false);
//   const [isFormModalOpen, setFormModalOpen] = useState(false);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const { data:positiondata, isLoading } = useOpenings();
//   const { createNewCareers, isCreating } = useCreateCareers();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     position: "",
//     resume: null,
//   });

//   const openJobModal = (job) => {
//     setSelectedJob(job);
//     setJobModalOpen(true);
//   };

//   const closeJobModal = () => setJobModalOpen(false);

//   const openFormModal = () => setFormModalOpen(true);

//   const closeFormModal = () => setFormModalOpen(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files[0], // Only keep the first file
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("name", formData.firstName);
//     data.append("email", formData.lastName);
//     data.append("phone", formData.email);
//     data.append("resume", formData.cv);
//     data.append("position", selectedJob.position); // Assuming selectedJob holds the current job details

//     createNewCareers(data, {
//       onSuccess: () => {
//         setFormData({
//           name: "",
//           position: "",
//           email: "",
//           phone: "",
//           resume: null,
//         });
//         closeFormModal();
//       },
//     });
//   };

//   return (
//     <div className="py-12 sm:py-16 md:py-14">
//       <div className="mx-auto text-center px-4 max-w-[50%]">
//         <h2 className="text-4xl font-bold text-white mb-4 sm:text-5xl">
//           Join Us
//         </h2>
//         <div className="space-y-6">
//           {positiondata?.map((job, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md"
//             >
//               <span className="text-lg text-gray-800 w-[43%] text-left">
//                 {job.position}-{job.location}
//               </span>
//               <div className="flex gap-4">
//                 <button
//                   onClick={() => openJobModal(job)}
//                   className="text-white bg-black py-2 px-6 rounded-full text-sm hover:bg-gray-800 transition"
//                 >
//                   View job
//                 </button>
//                 <button
//                   onClick={openFormModal}
//                   className="text-white bg-black py-2 px-6 rounded-full text-sm hover:bg-gray-800 transition"
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Job Description Modal */}
//       {isJobModalOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={closeJobModal}
//               className="absolute top-2 right-2 text-gray-600 text-2xl"
//             >
//               &times;
//             </button>
//             <h3 className="text-2xl font-bold mb-4">{selectedJob.position}</h3>
//             <p>{selectedJob.jd}</p>
//           </div>
//         </div>
//       )}

//       {/* Apply Now Modal */}
//       {isFormModalOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 relative rounded-lg max-w-lg w-full">
//             <button
//               onClick={closeFormModal}
//               className="absolute top-2 right-2 text-gray-600 text-2xl"
//             >
//               &times;
//             </button>
//             <h3 className="text-2xl font-bold mb-4">Apply Now</h3>

//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Phone</label>
//                 <div className="flex items-center">
//                   <span className="px-2">+971</span>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border rounded-lg"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Attach your CV</label>
//                 <input
//                   type="file"
//                   name="cv"
//                   onChange={handleFileChange}
//                   className="w-full p-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-green-500 text-white rounded-lg"
//                 disabled={isCreating}
//               >
//                 Submit Details
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Careerjoin;



// "use client";
// import React, { useState } from "react";
// import { useCreateCareers } from "@/app/_components/admin/careers/useCareers";
// import { useOpenings } from "@/app/_components/admin/openings/useOpenings";

// const Careerjoin = () => {
//   const [isJobModalOpen, setJobModalOpen] = useState(false);
//   const [isFormModalOpen, setFormModalOpen] = useState(false);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const { data: positiondata, isLoading } = useOpenings();
//   const { createNewCareers, isCreating } = useCreateCareers();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     resume: null,
//   });

//   // Open Job Modal to view details of the selected job
//   const openJobModal = (job) => {
//     setSelectedJob(job); // Set the selected job details
//     setJobModalOpen(true);
//   };
//   console.log("selectedJob", selectedJob);

//   const closeJobModal = () => setJobModalOpen(false);
//   const openFormModal = () => setFormModalOpen(true);
//   const closeFormModal = () => setFormModalOpen(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files[0], // Only keep the first file
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("phone", formData.phone);
//     data.append("resume", formData.resume); // This should be the file you selected
//     data.append("position", selectedJob?.position); // Add position automatically

//     createNewCareers(data, {
//       onSuccess: () => {
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           resume: null,
//         });
//         closeFormModal();
//       },
//     });
//   };


//   return (
//     <div className="py-12 sm:py-16 md:py-14">
//       <div className="mx-auto text-center px-4 max-w-[50%]">
//         <h2 className="text-4xl font-bold text-white mb-4 sm:text-5xl">
//           Join Us
//         </h2>
//         <div className="space-y-6">
//           {positiondata?.map((job, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md"
//             >
//               <span className="text-lg text-gray-800 w-[43%] text-left">
//                 {job.position} - {job.location}
//               </span>
//               <div className="flex gap-4">
//                 <button
//                   onClick={() => openJobModal(job)}
//                   className="text-white bg-black py-2 px-6 rounded-full text-sm hover:bg-gray-800 transition"
//                 >
//                   View job
//                 </button>
//                 <button
//                   onClick={openFormModal}
//                   className="text-white bg-black py-2 px-6 rounded-full text-sm hover:bg-gray-800 transition"
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Job Description Modal */}
//       {isJobModalOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={closeJobModal}
//               className="absolute top-2 right-2 text-gray-600 text-2xl"
//             >
//               &times;
//             </button>
//             <h3 className="text-2xl font-bold mb-4">{selectedJob?.position}</h3>
//             <p>{selectedJob?.jd}</p>
//           </div>
//         </div>
//       )}

//       {/* Apply Now Modal */}
//       {isFormModalOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 relative rounded-lg max-w-lg w-full">
//             <button
//               onClick={closeFormModal}
//               className="absolute top-2 right-2 text-gray-600 text-2xl"
//             >
//               &times;
//             </button>
//             <h3 className="text-2xl font-bold mb-4">Apply Now</h3>

//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Phone</label>
//                 <div className="flex items-center">
//                   <span className="px-2">+971</span>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full p-2 border rounded-lg"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Attach your CV</label>
//                 <input
//                   type="file"
//                   name="resume"
//                   onChange={handleFileChange}
//                   className="w-full p-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-green-500 text-white rounded-lg"
//                 disabled={isCreating}
//               >
//                 Submit Details
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Careerjoin;




"use client";
import React, { useState } from "react";
import { useCreateCareers } from "@/app/_components/admin/careers/useCareers";
import { useOpenings } from "@/app/_components/admin/openings/useOpenings";

const Careerjoin = () => {
  const [isJobModalOpen, setJobModalOpen] = useState(false);
  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const { data: positiondata, isLoading } = useOpenings();
  const { createNewCareers, isCreating } = useCreateCareers();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  // Open Job Modal to view details of the selected job
  const openJobModal = (job) => {
    setSelectedJob(job);
    setJobModalOpen(true);
  };

  const closeJobModal = () => setJobModalOpen(false);
  
  // Modified to accept job parameter for application
  const openFormModal = (job = null) => {
    if (job) {
      setSelectedJob(job); // Set the job when applying
    }
    setFormModalOpen(true);
  };
  
  const closeFormModal = () => {
    setFormModalOpen(false);
    // Reset form data when closing
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0] || null, // Handle case where no file is selected
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that resume is selected
    if (!formData.resume) {
      alert("Please select a resume file");
      return;
    }

    // Validate that a job is selected
    if (!selectedJob) {
      alert("Please select a job position");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("resume", formData.resume);
    data.append("position", selectedJob.position);

    createNewCareers(data, {
      onSuccess: () => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: null,
        });
        closeFormModal();
        alert("Application submitted successfully!");
      },
      onError: (error) => {
        console.error("Error submitting application:", error);
        alert("Error submitting application. Please try again.");
      },
    });
  };

  return (
    <div className="py-12 sm:py-16 md:py-14">
      <div className="mx-auto text-center px-4 max-w-[50%]">
        <h2 className="text-4xl font-bold text-white mb-4 sm:text-5xl">
          Join Us
        </h2>
        <div className="space-y-6">
          {positiondata?.map((job, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md"
            >
              <span className="text-lg text-gray-800 w-[43%] text-left">
                {job.position} - {job.location}
              </span>
              <div className="flex gap-4">
                <button
                  onClick={() => openJobModal(job)}
                  className="text-white bg-black py-2 px-6 rounded-full text-sm hover:bg-gray-800 transition"
                >
                  View job
                </button>
                <button
                  onClick={() => openFormModal(job)} // Pass job to openFormModal
                  className="text-white bg-black py-2 px-6 rounded-full text-sm hover:bg-gray-800 transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Description Modal */}
      {isJobModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
            <button
              onClick={closeJobModal}
              className="absolute top-2 right-2 text-gray-600 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedJob?.position}</h3>
            <p>{selectedJob?.jd}</p>
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => {
                  closeJobModal();
                  openFormModal(selectedJob);
                }}
                className="text-white bg-green-500 py-2 px-6 rounded-full text-sm hover:bg-green-600 transition"
              >
                Apply for this position
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Apply Now Modal */}
      {isFormModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 relative rounded-lg max-w-lg w-full">
            <button
              onClick={closeFormModal}
              className="absolute top-2 right-2 text-gray-600 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">
              Apply Now {selectedJob && `- ${selectedJob.position}`}
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <div className="flex items-center">
                  <span className="px-2">+971</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Attach your CV *</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  className="w-full p-2 border rounded-lg"
                  accept=".pdf,.doc,.docx"
                  required
                />
                {formData.resume && (
                  <p className="text-sm text-green-600 mt-1">
                    Selected: {formData.resume.name}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50"
                disabled={isCreating}
              >
                {isCreating ? "Submitting..." : "Submit Details"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careerjoin;