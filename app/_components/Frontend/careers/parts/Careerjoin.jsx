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
//     setSelectedJob(job);
//     setJobModalOpen(true);
//   };

//   const closeJobModal = () => setJobModalOpen(false);
  
//   // Modified to accept job parameter for application
//   const openFormModal = (job = null) => {
//     if (job) {
//       setSelectedJob(job); // Set the job when applying
//     }
//     setFormModalOpen(true);
//   };
  
//   const closeFormModal = () => {
//     setFormModalOpen(false);
//     // Reset form data when closing
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       resume: null,
//     });
//   };

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
//       [name]: files[0] || null, // Handle case where no file is selected
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate that resume is selected
//     if (!formData.resume) {
//       alert("Please select a resume file");
//       return;
//     }

//     // Validate that a job is selected
//     if (!selectedJob) {
//       alert("Please select a job position");
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("phone", formData.phone);
//     data.append("resume", formData.resume);
//     data.append("position", selectedJob.position);

//     createNewCareers(data, {
//       onSuccess: () => {
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           resume: null,
//         });
//         closeFormModal();
//         alert("Application submitted successfully!");
//       },
//       onError: (error) => {
//         console.error("Error submitting application:", error);
//         alert("Error submitting application. Please try again.");
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
//                   onClick={() => openFormModal(job)} // Pass job to openFormModal
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
//             <div className="mt-6 flex gap-4">
//               <button
//                 onClick={() => {
//                   closeJobModal();
//                   openFormModal(selectedJob);
//                 }}
//                 className="text-white bg-green-500 py-2 px-6 rounded-full text-sm hover:bg-green-600 transition"
//               >
//                 Apply for this position
//               </button>
//             </div>
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
//             <h3 className="text-2xl font-bold mb-4">
//               Apply Now {selectedJob && `- ${selectedJob.position}`}
//             </h3>

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
//                 <label className="block text-gray-700">Attach your CV *</label>
//                 <input
//                   type="file"
//                   name="resume"
//                   onChange={handleFileChange}
//                   className="w-full p-2 border rounded-lg"
//                   accept=".pdf,.doc,.docx"
//                   required
//                 />
//                 {formData.resume && (
//                   <p className="text-sm text-green-600 mt-1">
//                     Selected: {formData.resume.name}
//                   </p>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50"
//                 disabled={isCreating}
//               >
//                 {isCreating ? "Submitting..." : "Submit Details"}
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
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
    countryCode: "+971", // Default to UAE country code
  });

  // Open Job Modal to view details of the selected job
  const openJobModal = (job) => {
    setSelectedJob(job);
    setJobModalOpen(true);
  };

  const closeJobModal = () => setJobModalOpen(false);

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
      countryCode: "+971", // Reset country code to default
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

  const handlePhoneChange = (phone) => {
    setFormData((prev) => ({ ...prev, phone }));
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
          countryCode: "+971", // Reset country code to default
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
    <div className="py-12 sm:py-16 md:py-14 w-[100%]">
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
              <div className="mb-4 flex items-start flex-col">
                <label className="block text-gray-700">Phone</label>
                <PhoneInput
                  country={"ae"} // Default to UAE country code
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  containerStyle={{ width: "100%" }}
                  inputStyle={{
                    width: "100%",
                    borderRadius: "0.375rem",
                    padding: "0.5rem",
                    border: "1px solid #d1d5db",
                    paddingLeft: "45px", // Adjust padding to fit country code
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Attach your CV</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
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
