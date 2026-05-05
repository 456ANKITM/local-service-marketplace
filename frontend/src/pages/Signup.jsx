// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
// import { useSignupMutation } from "../redux/api/api";
// import toast from "react-hot-toast";

// const availableServices = [
//   "Plumbing","Electrician","Driver","Carpenter","Painter","Cleaner",
//   "Home Repair","Appliance Repair","Mechanic","Tutor","Delivery",
//   "Gardener","Cook","Tech Support","Photographer",
// ];

// const Signup = () => {
//   const [role, setRole] = useState("hire");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [services, setServices] = useState([]);
//   const navigate = useNavigate();
//   const [signup] = useSignupMutation();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const toggleService = (service) => {
//     setServices((prev) =>
//       prev.includes(service)
//         ? prev.filter((s) => s !== service)
//         : [...prev, service]
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (role === "work" && services.length === 0) {
//       return toast.error("Please select at least one service");
//     }

//     const data = {
//       ...formData,
//       role: role === "hire" ? "client" : "worker",
//       services: role === "work" ? services : [],
//     };

//     try {
//       const res = await signup(data).unwrap();
//       if (res.success) {
//         toast.success(res.message);
//         navigate("/login");
//       } else {
//         toast.error(res.message);
//       }
//     } catch (error) {
//       toast.error(error?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="bg-zinc-950 min-h-screen text-white relative">
//       <Navbar />

//       <div className="min-h-screen flex items-center justify-center px-4 py-10">
//         {/* FORM (ALWAYS SAME) */}
//         <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-xl z-10">
//           <h2 className="text-2xl font-bold text-center">
//             Create an Account
//           </h2>
//           <p className="text-gray-400 text-sm text-center mt-1">
//             Join and start hiring or earning today
//           </p>

//           <form onSubmit={handleSubmit} className="mt-6 space-y-5">
//             {/* Name */}
//             <div>
//               <label className="text-sm text-gray-400">Full Name</label>
//               <input
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full mt-1 px-4 py-2 bg-zinc-800 border border-white/10 rounded-lg outline-none"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm text-gray-400">Email</label>
//               <input
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 type="text"
//                 placeholder="Enter email"
//                 className="w-full mt-1 px-4 py-2 bg-zinc-800 border border-white/10 rounded-lg  outline-none"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="text-sm text-gray-400">Password</label>
//               <input
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 type="password"
//                 placeholder="Enter password"
//                 className="w-full mt-1 px-4 py-2 bg-zinc-800 border border-white/10 rounded-lg  outline-none"
//               />
//             </div>

//             {/* Role */}
//             <div>
//               <label className="text-sm text-gray-400 block mb-2">
//                 I want to:
//               </label>

//               <div className="flex gap-4">
//                 <label
//                   className={`flex-1 p-3 rounded-lg cursor-pointer border transition ${
//                     role === "hire"
//                       ? "border-indigo-500 bg-indigo-500/10"
//                       : "border-white/10"
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     checked={role === "hire"}
//                     onChange={() => setRole("hire")}
//                     className="hidden"
//                   />
//                   Hire Services
//                 </label>

//                 <label
//                   className={`flex-1 p-3 rounded-lg cursor-pointer border transition ${
//                     role === "work"
//                       ? "border-indigo-500 bg-indigo-500/10"
//                       : "border-white/10"
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     checked={role === "work"}
//                     onChange={() => setRole("work")}
//                     className="hidden"
//                   />
//                   Work & Earn
//                 </label>
//               </div>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-600 transition"
//             >
//               Create Account
//             </button>

//             <p className="text-sm text-center text-gray-400">
//               Already have an account?{" "}
//               <span
//                 onClick={() => navigate("/login")}
//                 className="text-indigo-400 cursor-pointer hover:underline"
//               >
//                 Login
//               </span>
//             </p>
//           </form>
//         </div>
//       </div>

//       {/* SERVICES PANEL (DOES NOT AFFECT FORM) */}
//       {role === "work" && (
//         <div className="hidden lg:block fixed right-6 top-80  -translate-y-1/2 w-100 bg-zinc-900 border border-white/10 rounded-2xl p-5 shadow-2xl">
//           <h3 className="text-lg font-semibold mb-4">
//             Select Services
//           </h3>

//           <div className="grid grid-cols-2 gap-2 h-full  overflow-y-auto">
//             {availableServices.map((service) => (
//               <button
//                 key={service}
//                 type="button"
//                 onClick={() => toggleService(service)}
//                 className={`px-2 py-2  rounded-lg text-xs border transition ${
//                   services.includes(service)
//                     ? "bg-indigo-600 border-indigo-600"
//                     : "border-white/10 bg-zinc-800 hover:bg-zinc-700"
//                 }`}
//               >
//                 {service}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* MOBILE DRAWER */}
//       {role === "work" && (
//         <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-white/10 p-4  overflow-y-auto z-100">
//           <h3 className="text-sm font-semibold mb-3 text-center">
//             Select Services
//           </h3>

//           <div className="grid grid-cols-2 gap-2">
//             {availableServices.map((service) => (
//               <button
//                 key={service}
//                 onClick={() => toggleService(service)}
//                 className={`px-2 py-2 rounded-lg text-xs border ${
//                   services.includes(service)
//                     ? "bg-indigo-600"
//                     : "border-white/10 bg-zinc-800"
//                 }`}
//               >
//                 {service}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "../redux/api/api";
import toast from "react-hot-toast";

const availableServices = [
  "Plumbing","Electrician","Driver","Carpenter","Painter","Cleaner",
  "Home Repair","Appliance Repair","Mechanic","Tutor","Delivery",
  "Gardener","Cook","Tech Support","Photographer",
];

const Signup = () => {
  const [role, setRole] = useState("hire");
  const [showServiceModal, setShowServiceModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [services, setServices] = useState([]);

  const navigate = useNavigate();
  const [signup] = useSignupMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleService = (service) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (role === "work" && services.length === 0) {
      return toast.error("Please select at least one service");
    }

    const data = {
      ...formData,
      role: role === "hire" ? "client" : "worker",
      services: role === "work" ? services : [],
    };

    try {
      const res = await signup(data).unwrap();
      if (res.success) {
        toast.success(res.message);
        navigate("/login");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error?.data?.message || "Signup failed");
    }
  };

  const openServiceModal = () => setShowServiceModal(true);
  const closeServiceModal = () => setShowServiceModal(false);

  return (
    <div className="bg-zinc-950 min-h-screen text-white flex flex-col">
      <Navbar />

      {/* FORM */}
      <div className="flex items-center justify-center px-4 py-10 flex-1">
        <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
          
          <h2 className="text-2xl font-bold text-center">
            Create an Account
          </h2>
          <p className="text-zinc-400 text-sm text-center mt-1">
            Join and start hiring or earning today
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">

            {/* NAME */}
            <div>
              <label className="text-sm text-zinc-400">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-zinc-400">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter email"
                className="w-full mt-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-zinc-400">Password</label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Enter password"
                className="w-full mt-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg outline-none"
              />
            </div>

            {/* ROLE */}
            <div>
              <label className="text-sm text-zinc-400 block mb-2">
                I want to:
              </label>

              <div className="flex gap-4">
                
                <label
                  className={`flex-1 p-3 rounded-lg cursor-pointer border ${
                    role === "hire"
                      ? "border-white bg-white text-black"
                      : "border-zinc-700 text-white"
                  }`}
                >
                  <input
                    type="radio"
                    checked={role === "hire"}
                    onChange={() => setRole("hire")}
                    className="hidden"
                  />
                  Hire Services
                </label>

                <label
                  className={`flex-1 p-3 rounded-lg cursor-pointer border ${
                    role === "work"
                      ? "border-white bg-white text-black"
                      : "border-zinc-700 text-white"
                  }`}
                  onClick={() => {
                    setRole("work");
                    openServiceModal();
                  }}
                >
                  <input
                    type="radio"
                    checked={role === "work"}
                    onChange={() => {
                      setRole("work");
                      openServiceModal();
                    }}
                    className="hidden"
                  />
                  Work & Earn
                </label>

              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-white text-black py-2.5 rounded-lg font-medium hover:bg-zinc-200 transition"
            >
              Create Account
            </button>

            <p className="text-sm text-center text-zinc-400">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-white cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>

          </form>
        </div>
      </div>

      {/* ===================== */}
      {/* FULL SCREEN MODAL (MOBILE ONLY) */}
      {/* ===================== */}
      {showServiceModal && role === "work" && (
        <div className="fixed inset-0 bg-zinc-950 z-50 flex flex-col">

          {/* HEADER */}
          <div className="flex items-center justify-between p-4 bg-zinc-900 border-b border-zinc-800">
            <h3 className="text-lg font-semibold">
              Select Services
            </h3>

            <button
              onClick={closeServiceModal}
              className="text-zinc-400 text-2xl"
            >
              ✕
            </button>
          </div>

          {/* CONTENT */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-2 gap-3">
              {availableServices.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-3 py-3 rounded-xl text-sm border ${
                    services.includes(service)
                      ? "bg-white text-black border-white"
                      : "bg-zinc-900 border-zinc-800 text-zinc-300"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="p-4 border-t border-zinc-800 bg-zinc-900">
            <button
              onClick={closeServiceModal}
              className="w-full bg-white text-black py-3 rounded-xl font-semibold"
            >
              Done ({services.length} selected)
            </button>
          </div>

        </div>
      )}

      <Footer />
    </div>
  );
};

export default Signup;