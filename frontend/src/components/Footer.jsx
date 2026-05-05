// import React from "react";
// import logo from "../assets/logo.png"

// const Footer = () => {
//   return (
//     <footer className="text-gray-500/80 mt-20 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
//       <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        
//         {/* Logo + Description */}
//         <div className="max-w-80">
//           <img
//             src="../../public/favicon.svg"
//             alt="logo"
//             className="mb-4 h-10 md:h-15"
//           />
//           <p className="text-sm">
//             We connect you with trusted local professionals for everyday services.
//             From electricians to drivers, our platform makes it easy to find,
//             hire, and get your work done quickly and reliably.
//           </p>

//           {/* Social Icons */}
//           <div className="flex items-center gap-3 mt-4">
//             {/* Instagram */}
//             <svg className="w-6 h-6 cursor-pointer hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
//             </svg>

//             {/* Facebook */}
//             <svg className="w-6 h-6 cursor-pointer hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
//             </svg>

//             {/* Twitter */}
//             <svg className="w-6 h-6 cursor-pointer hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
//             </svg>

//             {/* LinkedIn */}
//             <svg className="w-6 h-6 cursor-pointer hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
//             </svg>
//           </div>
//         </div>

//         {/* Company */}
//         <div>
//           <p className="text-lg text-gray-800">COMPANY</p>
//           <ul className="mt-3 flex flex-col gap-2 text-sm">
//             <li><a href="#">About</a></li>
//             <li><a href="#">Careers</a></li>
//             <li><a href="#">Blog</a></li>
//             <li><a href="#">Partners</a></li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <p className="text-lg text-gray-800">SUPPORT</p>
//           <ul className="mt-3 flex flex-col gap-2 text-sm">
//             <li><a href="#">Help Center</a></li>
//             <li><a href="#">Safety</a></li>
//             <li><a href="#">Contact Us</a></li>
//             <li><a href="#">Accessibility</a></li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div className="max-w-80">
//           <p className="text-lg text-gray-800">STAY UPDATED</p>
//           <p className="mt-3 text-sm">
//             Get updates on new services and offers near you.
//           </p>
//           <div className="flex items-center mt-4">
//             <input
//               type="text"
//               className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
//               placeholder="Your email"
//             />
//             <button className="flex items-center justify-center bg-indigo-600 h-9 w-9 rounded-r hover:bg-indigo-700 transition">
//               <svg
//                 className="w-4 h-4 text-white"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   d="M19 12H5m14 0-4 4m4-4-4-4"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       <hr className="border-gray-300 mt-8" />

//       <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
//         <p>
//           © {new Date().getFullYear()} YourPlatform. All rights reserved.
//         </p>
//         <ul className="flex items-center gap-4">
//           <li><a href="#">Privacy</a></li>
//           <li><a href="#">Terms</a></li>
//           <li><a href="#">Sitemap</a></li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className=" pt-12 px-6 md:px-16 lg:px-24 xl:px-32 bg-zinc-950 text-gray-400 border-t border-white/10">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div>
          <img
            src="../../public/favicon.svg"
            alt="logo"
            className="mb-4 h-10"
          />

          <p className="text-sm leading-relaxed text-gray-500">
            We connect you with trusted local professionals for everyday services.
            From electricians to drivers, find and hire easily with confidence.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            {[
              "instagram",
              "facebook",
              "twitter",
              "linkedin",
            ].map((icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-white/10 cursor-pointer transition"
              >
                <svg
                  className="w-4 h-4 text-gray-400 hover:text-white transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {icon === "instagram" && (
                    <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4z" />
                  )}
                  {icon === "facebook" && (
                    <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
                  )}
                  {icon === "twitter" && (
                    <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32z" />
                  )}
                  {icon === "linkedin" && (
                    <path d="M3 8.75h3.96V21H3V8.75zm1.98-5.25C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98S6.96 6.58 6.96 5.48C6.96 4.38 6.08 3.5 4.98 3.5zM9.25 8.75h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
                  )}
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <p className="text-white font-semibold mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            {["About", "Careers", "Blog", "Partners"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="text-white font-semibold mb-4">Support</p>
          <ul className="space-y-2 text-sm">
            {["Help Center", "Safety", "Contact Us", "Accessibility"].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-white font-semibold mb-4">Stay Updated</p>
          <p className="text-sm text-gray-500">
            Get updates on new services and offers near you.
          </p>

          <div className="flex items-center mt-4 bg-zinc-900 border border-white/10 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-3 py-2 w-full outline-none text-sm text-white placeholder-gray-500"
            />
            <button className="bg-indigo-600 px-4 py-2 hover:bg-indigo-700 transition">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-500">
          © {new Date().getFullYear()} YourPlatform. All rights reserved.
        </p>

        <div className="flex gap-5">
          {["Privacy", "Terms", "Sitemap"].map((item) => (
            <a key={item} href="#" className="hover:text-white transition">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;