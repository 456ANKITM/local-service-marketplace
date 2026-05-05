// import React from "react";

// const Hero = () => {
//   return (
//     <div>
//       <div className=" mt-25 relative flex flex-col items-center justify-center text-sm px-4 py-16 md:px-16 lg:px-24 xl:px-40 text-black">
//         <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-indigo-300 blur-[100px] opacity-30"></div>
//         {/* Headline + CTA */}
//         <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-17.5">
//           Find Trusted Local Services in Minutes{" "}
//         </h1>

//         <p className="max-w-md text-center text-base my-7">
//           From electricians to drivers, connect with skilled professionals near you—fast, reliable, and hassle-free.
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-20 md:py-28 lg:py-32 bg-zinc-950 text-white overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full top-10"></div>

      {/* Small Tag */}
      <span className="px-4 py-1.5 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">
         Trusted by local professionals
      </span>

      {/* Heading */}
      <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold max-w-4xl leading-tight">
        Find Trusted Local Services{" "}
        <span className="text-indigo-500">in Minutes</span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 max-w-xl text-gray-400 text-sm md:text-base leading-relaxed">
        From electricians to drivers, connect with skilled professionals near you — 
        fast, reliable, and hassle-free.
      </p>

      

      {/* Optional Stats (adds premium feel) */}
      <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-400">
        <div>
          <p className="text-white text-lg font-semibold">10K+</p>
          <p>Active Users</p>
        </div>
        <div>
          <p className="text-white text-lg font-semibold">2K+</p>
          <p>Verified Workers</p>
        </div>
        <div>
          <p className="text-white text-lg font-semibold">5K+</p>
          <p>Jobs Completed</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;