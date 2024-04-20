import React from 'react'
import { Link } from 'react-router-dom'

function ContentPage2() {
   

  return (
    <div data-theme="white" className='w-full top-10 min-h-[120vh] '>
        <header className='m-auto text-center mt-6'>
            <h1 className='text-4xl underline font-serif text-cyan-200 '>YOU ARE READY TO LAUNCH YOUR WEBSITE</h1>
        </header>
        <div className='m-auto text-center mt-5'>
            <h2 className='text-5xl font-mono text-ellipsis text-orange-500'>Premium Features</h2>
            <p>All you Need to Creat a pro Website</p>
        </div>
        <div className='flex  justify-evenly items-center gap-10 flex-row flex-wrap mt-10 mb-5'>
            <div className="card w-72 bg-white text-black shadow-xl  ">
                <div className="card-body">
                    <h2 className="card-title">Page Builder!</h2>
                    <p>Includes a full version of the best drag and drop page builder.</p>
                </div>
                <figure><img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/95.png" alt="Shoes" /></figure>
            </div>
            <div className="card w-72 bg-white text-black shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Slider Revolution</h2>
                    <p>Comes with the best premium slider plugin.</p>
                </div>
                <figure><img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/111.png" alt="Slider" /></figure>
            </div>
            <div className="card w-72 bg-white text-black shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Demo Graphics</h2>
                    <p>All that you see in the demo is included and free to use into your website.</p>
                </div>
                <figure><img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/225.png" alt="Graphiscs" /></figure>
            </div>
            <div className="card w-72 bg-white text-black shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">E-commerce</h2>
                    <p>Optimized for WooCommerce, the best and most secure E-Commerce plugin.</p>
                </div>
                <figure><img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/216.png" alt="woo" /></figure>
            </div>
            <div className="card w-72 bg-white text-black shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">1-Click Demo Import</h2>
                    <p>Import the whole demo using our one-click demo import feature.</p>
                </div>
                <figure><img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/115.png" alt="Import" /></figure>
            </div>
            <div className="card w-72 bg-white text-black shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Portfolio</h2>
                    <p>Show Case your work using Our Portfolio Custom type.</p>
                </div>
                <figure><img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/122.png" alt="Portfolio" /></figure>
            </div>
            <div className="card w-72 bg-white text-black shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Blog</h2>
                    <p>The blog offers many layout and design options.</p>
                </div>
                <figure><img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/2.png" alt="blog" /></figure>
            </div>
            <div className="card w-72 bg-white text-black shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Fully Customizible</h2>
                    <p>Use the customizer to change the overall appearance of your website.</p>
                </div>
                <figure><img src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/176.png" alt="Shoes" /></figure>
            </div>
          
        </div>
        <div className='m-auto text-center'>
            <button className='border-2 p-4 rounded-lg font-semibold bg-red-600 text-white cursor-pointer hover:btn transition-all ease-in-out duration-300'>
                Let's Start
            </button>
        </div>
        
    </div>
  )
}

export default ContentPage2