


// import { HeroCards } from "./HeroCards";
// import { DialogDemo } from "./Form/FormComponent";


// export const Hero = () => {
//   return (
//     <>
//     <img src="public/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_small.jpg"/>
//     </>
//     // <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center py-10 md:py-20x lg:py-32 gap-10 px-4">
//     //   {/* Text Section */}
//     //   <div className="text-center lg:text-start space-y-6">
//     //     <main className="text-4xl md:text-5xl lg:text-6xl font-bold">
//     //       <h1 className="inline">
//     //         <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
//     //           iOS Customer Support
//     //         </span>{" "}
//     //         We’re Here to Help!
//     //       </h1>
//     //     </main>

//     //     <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
//     //       Get answers and expert support for all your iOS devices and services.
//     //     </p>

//     //     {/* Buttons */}
//     //     <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
//     //       <DialogDemo />
//     //       <a
//     //         href="#"
//     //         rel="noreferrer noopener"
//     //         className="w-full md:w-auto px-6 py-3 text-center border border-transparent rounded-lg text-primary bg-secondary hover:bg-secondary/80"
//     //       >
//     //         Chat with us
//     //       </a>
//     //     </div>
//     //   </div>

//     //   {/* Hero Cards Section */}
//     //   <div className="z-10">
//     //     {/* <HeroCards /> */}
//     //     <HeroCards/>
//     //   </div>

//     //   {/* Shadow Effect */}
//     //   <div className="shadow"></div>
//     // </section>
//   );
// // };


// export const Hero = () => {
//   return (
//     <div className="relative">
//       {/* Background Image */}
//       <img
//         src="public/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_small.jpg"
//         alt="Hero Background"
//         className="w-full h-auto object-cover"
//       />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

//       {/* Highlighted Text */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
//         Entertaiment Customer Support
//         </h1>
//       </div>
//     </div>
//   );
// };





// export const Hero = () => {
//   return (
//     <div className="relative">
//       {/* Background Image */}
//       <img
//         src="public/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_small.jpg"
//         alt="Hero Background"
//         className="w-full h-auto object-cover"
//       />

//       {/* Full Overlay with Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/70 to-black/100 bg-gradient-to-r from-black/46 via-transparent to-black/46"></div>

//       {/* Highlighted Text */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h1 className="mb-[20rem] text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
//           Entertainment Customer Support
          
//         </h1>

//       </div>
      
//     </div>
//   );
// };


import { DialogDemo } from "./Form/FormComponent";
import { Input } from "@/components/ui/input"
import PopComponent from "./PopComponent";

export const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="/EntertainmentImage.jpg"
        alt="Hero Background"
        className="w-full h-screen object-cover"
      />

      {/* Full Overlay with Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div> */}

     <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/65 to-black/100 bg-gradient-to-r from-black/46 via-transparent to-black/46"></div>

      {/* Highlighted Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center md:px-8">
        <h1 className="text-5xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-gray-300 drop-shadow-lg">
          Entertainment Customer Support
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl">
        <div className="flex w-[100rem] h-[10rem]  max-w-sm items-center space-x-2">
        <div className="flex flex-col md:flex-row items-center gap-4">
  <div className="flex-1  md:w-auto ml-20">
    <Input type="email" placeholder="Email" className="w-full md:w-auto"/>
  </div>
  <DialogDemo />
</div>
    </div>
    <div className="mt-10 flex justify-center w-full">
          <img
            src="/Housing-pop-up.jpg"
            alt="Popup"
            className="w-64 h-auto md:w-72 lg:w-80 rounded-lg shadow-lg"
          />
        </div>

        </p>
      </div>
      
     <PopComponent/>
    </div>
  );
};