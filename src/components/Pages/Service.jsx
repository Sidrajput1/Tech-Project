import React from 'react'
import service from '../../assets/ServicesPics/service.jpg'
import './service.css'
import ServiceCard from './ServiceCard'

function Service() {
    return (
        <div>
            <main className=' w-full flex flex-row  justify-between items-center  gap-32 '>

                {/* <section className='w-[40%] px-4  h-auto border-2 translate-x-10 transition-transform translate-y-0  '>
            <h1 className='text-8xl text-justify font-semibold italic '>Our Servics</h1>
            <p className='max-w-xl m-3 line-clamp-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aliquam commodi facere praesentium quam consequuntur possimus! Inventore molestiae omnis cumque!</p>

        </section> */}
                <div className='w-[60%] h-auto text-center  '>
                    <div id="servicecard" className='mb-[1rem] ml-16'>
                        <h1>
                            Our Services
                        </h1>
                        <h2 className='max-w-xl line-clamp-3'>
                            How I recreated a Polaroid camera with CSS gradients only Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vitae.
                        </h2>
                    </div>
                    <div className='py-5'>
                        <button className="btn btn-accent text-2xl">Contact us</button>
                    </div>

                </div>

                <section className='w-[50%] '>
                    <figure className='text-center px-10 py-4 mr-6 '>
                        <img className='w-[100%] h-[70vh] rounded-btn ' src={service} alt="A image of Service " />
                    </figure>

                </section>
            </main>
            <ServiceCard/>
        </div>
    )
}

export default Service