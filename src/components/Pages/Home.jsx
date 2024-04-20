// import React from 'react'
import pic1 from '../../assets/HomeImages/pic1.png'
import pic2 from '../../assets/HomeImages/pic2.png';

// function Home() {
//   return (
//     // <main >
//     //     <div className='bg-gray-50 w-[100%] h-[100vh] border-2'>


//     //         <div className='relative top-5 left-44 w-[100vw] '>
//     //             <img className='h-[100vh]' src={pic1} alt="pic1" />
//     //             <img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-08-1.png" alt="" />
//     //             <img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/hm-07-1.png" alt="pic3" />

//     //         </div>
//     //         <div className='relative top-0 left-44 bottom-[-50rem]'>
//     //           <img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-08-1.png" alt="" />
//     //         </div>
//     //         <div>
//     //           <img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/hm-07-1.png" alt="pic3" />
//     //         </div>
//     //         <div>
//     //           <img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-06-1.png" alt="pic4" />
//     //         </div>
//     //         <div>
//     //           <img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-04-1.png" alt="pic5" />
//     //         </div>

//     //     </div>
//     // </main>
// //    <main class="bg-gray-50 h-screen flex justify-center items-center">
// //     <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
// //         <div class="max-w-sm">
// //             <img class="w-full " src={pic1} alt="pic1" />
// //         </div>
// //         {/* <div class="max-w-sm">
// //             <img class="w-full" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-08-1.png" alt="pic1" />
// //         </div> */}
// //         <div class="max-w-sm">
// //             <img class="w-full " src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/hm-07-1.png" alt="pic2" />
// //         </div>
// //         <div class="max-w-sm">
// //             <img class="w-full" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-08-1.png" alt="pic3" />
// //         </div>
// //         {/* <div class="max-w-sm">
// //             <img class="w-full" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/hm-07-1.png" alt="" />
// //         </div> */}
// //         <div class="max-w-sm">
// //             <img class="w-full" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-06-1.png" alt="pic4" />
// //         </div>
// //         <div class="max-w-sm">
// //             <img class="w-full" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-04-1.png" alt="pic5" />
// //         </div>
// //     </div>
// // </main>

// <main className="bg-black opacity-100 h-screen flex justify-center items-center ">
//     <div className="max-w-screen-xl p-8 grid grid-cols-3 gap-8  mt-2 bg-[#e1edea]  float-left rounded-2xl rounded-tr-[180rem] rounded-br-[89rem] rounded-r-[45rem]  rounded-tl-[80rem]">
//         <div className="col-span-2 flex justify-center items-center mb-24  relative">
//             <img className="max-h-screen" src={pic1} alt="pic1" />
//         </div>
//         <div className="flex flex-col justify-around items-center ">
//             <img className="max-h-[70vh]  mr-[28rem]  mt-28 " src={pic2} alt="pic4" />
//             {/* <img className="max-h-[50vh] border-2 " src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/hm-07-1.png" alt="pic2" /> */}
//             <img className="max-h-[60vh]   mb-28 mr-72 mt-[-70px]  " src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-04-1.png"
//              alt="pic5" />
//         </div>
//         <div className="flex  flex-col justify-start items-center absolute top-28 left-12 ">
//             <img className="max-h-[50vh] mr-12" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-08-1.png" alt="pic3" />
//               <img className="max-h-[50vh] mr-14 mb-8 mt-4   " src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/hm-07-1.png" alt="pic2" />
//         </div>
//     </div>
// </main>


//   )
// }

// import React from 'react';
// import { useEffect, useState } from 'react';

// const Home = () => {
//   // State to manage animation
//   const [animate, setAnimate] = useState(false);

//   // Function to trigger animation
//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   // return (

//   //   <main className="bg-black opacity-100 h-screen flex justify-center items-center">
//   //     <div className="max-w-screen-xl p-8 grid grid-cols-3 gap-8 mt-2 bg-[#e1edea] float-left rounded-2xl rounded-tr-[180rem] rounded-br-[89rem] rounded-r-[45rem] rounded-tl-[80rem]">
//   //       <div className={`col-span-2 flex justify-center items-center mb-24 relative ${animate ? 'opacity-100 transform translate-y-0 transition duration-1000 ease-in-out' : 'opacity-0 transform -translate-y-10'}`}>
//   //         <img className="max-h-screen" src={pic1} alt="pic1" />
//   //       </div>
//   //       <div className={`flex flex-col justify-around items-center ${animate ? 'opacity-100 transform translate-x-0 transition duration-1500 ease-in-out delay-500' : 'opacity-0 transform -translate-x-10'}`}>
//   //         <img className="max-h-[70vh] mr-[28rem] mt-28" src={pic2} alt="pic4" />
//   //         <img className="max-h-[60vh] mb-28 mr-72 mt-[-70px]" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-04-1.png" alt="pic5" />
//   //       </div>
//   //       <div className={`flex flex-col justify-start items-center absolute top-28 left-12 ${animate ? 'opacity-100 transform translate-x-0 transition duration-2000 ease-in-out delay-1000' : 'opacity-0 transform -translate-x-10'}`}>
//   //         <img className="max-h-[50vh] mr-12" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-08-1.png" alt="pic3" />
//   //         <img className="max-h-[50vh] mr-14 mb-8 mt-4" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/hm-07-1.png" alt="pic2" />
//   //       </div>
//   //     </div>
//   //   </main>
//   // );

//   return(
//     <main className="bg-black opacity-100 h-screen flex justify-center items-center">
//       <div className="max-w-screen-xl p-8 grid grid-cols-3 gap-8 mt-2 bg-[#e1edea] float-left rounded-2xl rounded-tr-[180rem] rounded-br-[89rem] rounded-r-[45rem] rounded-tl-[80rem]">
//         {/* Image 1 */}
//         <div className={`col-span-2 flex justify-center items-center mb-24 relative ${animate ? 'opacity-100 transform translate-y-0 transition duration-1000 ease-in-out delay-500' : 'opacity-0 transform -translate-y-10'}`}>
//           <img className="max-h-screen" src={pic1} alt="pic1" />
//         </div>
//         {/* Image 2 */}
//         <div className={`flex flex-col justify-around items-center ${animate ? 'opacity-100 transform translate-x-0 transition duration-1000 ease-in-out delay-1000' : 'opacity-0 transform -translate-x-10'}`}>
//           <img className="max-h-[70vh] mr-[28rem] mt-28" src={pic2} alt="pic4" />
//           <img className="max-h-[60vh] mb-28 mr-72 mt-[-70px]" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-04-1.png" alt="pic5" />
//         </div>
//         {/* Side Images */}
//         <div className={`flex flex-col justify-start items-center absolute top-28 left-12 ${animate ? 'opacity-100 transform translate-x-0 transition duration-1000 ease-in-out delay-1500' : 'opacity-0 transform -translate-x-10'}`}>
//           <img className="max-h-[50vh] mr-12" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-08-1.png" alt="pic3" />
//           <img className="max-h-[50vh] mr-14 mb-8 mt-4" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/hm-07-1.png" alt="pic2" />
//         </div>
//       </div>
//     </main>
//   )
// };

//export default Home;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ContentPage2 from './ContentPage2';
import './Home1.css';

const Home = () => {
  // State to manage animation
  const [animate, setAnimate] = useState(false);

  // Function to trigger animation
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      <main id='main' className="bg-slate-100 opacity-100 h-screen flex justify-center items-center  ">
        <div className=' absolute right-16 top-28 '>
          <header className='text-5xl text-justify italic font-thin font-sans rounded-xl z-20 '><span className='text-white'>Shimmer</span> <span className='text-white'>SofTech</span></header>
          <h1 className='text-2xl italic text-white px-12'>Ready to Go On web</h1>
        </div>
        <div id='layer1' className=" max-w-screen-xl p-8 grid grid-cols-3 gap-8 mt-2  float-left rounded-t-[80rem] rounded-tr-[180rem] rounded-br-[89rem] rounded-r-[45rem] rounded-tl-[80rem]">
          {/* Image 1 */}
          <motion.div
            className={`col-span-2 flex justify-center items-center mb-24 relative`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: animate ? 0 : 1 }}
          >
            <img className="max-h-screen" src={pic1} alt="pic1" />
          </motion.div>
          {/* Image 2 */}
          <motion.div
            className={`flex flex-col justify-around items-center`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: animate ? 0.5 : 1.5 }}
          >
            <img className="max-h-[70vh] mr-[28rem] mt-28" src={pic2} alt="pic2" />
            <img className="max-h-[60vh] mb-28 mr-72 mt-[-70px]" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-04-1.png" alt="pic5" />
          </motion.div>
          {/* Side Area */}
          <motion.div
            className={`flex flex-col justify-start items-center absolute top-28 left-12`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: animate ? 1 : 2 }}
          >
            <img className="max-h-[50vh] mr-12" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/home-08-1.png" alt="pic3" />
            <img className="max-h-[50vh] mr-14 mb-8 mt-4" src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/hm-07-1.png" alt="pic4" />
          </motion.div>
        </div>
      </main>
      <ContentPage2 />
    </div>
  );
};

export default Home;



