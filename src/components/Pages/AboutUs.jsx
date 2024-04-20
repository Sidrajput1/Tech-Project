import React, { useEffect, useState } from 'react'
import aboutPage from '../../assets/aboutPage.gif'
import video1 from '../../assets/vedio/video1.mp4'
import About1 from './About1'
import './aboutUs.css'
import Misson from './Misson'
function AboutUs() {
  const [activeIndex,setActiveIndex] = useState(0);


  useEffect( ()=>{
      const interval = setInterval( ()=> {
        setActiveIndex((prevIndex)=> (prevIndex+1)%3);
      },4000)

      return () => clearInterval(interval)
  },[]);

  const paragraph = [
       "Shimmer SofTech is your go-to destination for exceptional online web services",
      "We’re on a mission to start a conversation with you and your customers in this fast connected world. Let’s discover, build and grow your digital business.",
      "Our mission is to provide our client what they need! We are a dynamic team of creative people.",
      
  ]


  return (

    // <div>
    //    <section className=' w-full flex flex-row justify-around items-center'>
    //     <div className='flex flex-col justify-around items-center max-w-[50%]'>
    //        <header>About Us</header>
    //         <p>We’re on a mission to start a conversation with you and your customers in this fast connected world. Let’s discover, build and grow your digital business.</p>


    //     </div>
    //     <div className='flex w-[40%]'>
    //         <img className='w-[100%]' src={aboutPage} alt="" />

    //     </div>
    //   </section>
    //   <article>
    //     <div>

    //     </div>
    //     <div>

    //     </div>
    //   </article>
    // </div>
    <div className="relative w-full h-full">
       
      <div className=" inset-0 ">
        
        <video
          className="w-full h-full object-cover"
          
          title="YouTube Video Background"
        //   frameBorder="0"
          allowFullScreen
          autoPlay
          loop
          playsInline
        >
             <source src={video1} type='video/mp4'/>
             
        </video>

        <div className="absolute bottom-[55rem] inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-justify underline text-red-400">Who We Are</h1>
            {/* <p className={`text-2xl line-clamp-3 max-w-2xl ${isVisible ? 'fade-in':''}`}>We’re on a mission to start a conversation with you and your customers in this fast connected world. Let’s discover, build and grow your digital business.</p>
            <p className={`text-2xl line-clamp-3 max-w-2xl ${isVisible ? 'fade-in':''}`}> bdfjhbdjbfbdmnbcdjkfkdjbfkjdbkbdkbckd
            </p> */}
            {[0,1,2,3].map((isVisible)=>(
              <p 
                key={isVisible}
                className={`text-xl font-sans font-semibold line-clamp-3 text-gray-100 gap-5 max-w-xl ${isVisible=== activeIndex?'fade-in':'fade-out'}`}
                //style={{ position: 'absolute', top: 0, left: 0 }}
              >
                {paragraph[isVisible]}

              </p>
            ))}

            
        </div>
        

        
       
      </div>
       <Misson />
      <About1  />
     
    </div>
  )
}

export default AboutUs