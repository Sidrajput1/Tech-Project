import React from 'react'
import ui from '../../assets/ui.gif'
import AboutUs from './AboutUs'

function MainHome() {
  return (
    <main>
        
        <div  className='bg-[#FFFFFF] flex w-full justify-around items-center min-h-[90vh] border-2'>
            
            <div className='flex w-[40%]'>
                <img className='w-[100%] rounded-full' src={ui} alt="heroimage" />

            </div>
            <div className='flex flex-col justify-around items-center max-w-[50%]'>
                <h1 className='text-7xl line-clamp-3 text-center font-mono text-blue-400 font-semibold'>We Create Website and SoftWare</h1>
                <p className='line-clamp-2 text-xl font-light text-black'>Lorem ipsum dolor sit amet consectetur adipisicing  inventore ratione cupiditate, voluptatum quas eaque soluta suscipit dolor obcaecati! Voluptatum numquam exercitationem sint voluptatibus.</p>
                <div className='flex flex-row w-[40%] justify-between mt-10 py-0'>
                    <button className="btn btn-accent">Contact us</button>
                    <button className="btn btn-info">Learn More</button>
                    
                </div>
            </div>
        </div>
        <AboutUs />
            
    </main>
    
  )
}

export default MainHome