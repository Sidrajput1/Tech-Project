import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCard() {
    return (
        <div>
            <div className="font-[sans-serif] text-white bg-gradient-to-r from-purple-800 to-indigo-800 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="sm:text-4xl text-2xl font-extrabold text-center mb-16">Discover Our Exclusive Features</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
                        <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                            <img className='w-16 mb-4 inline-block' src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/273.png" alt="seo" />
                            <h3 className="text-xl font-semibold mb-2">SEO OPTIMIZATION</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm">Optimization is not about making things faster; it's about making them efficient</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                            <img className='w-16 mb-4 inline-block' src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/260.png" alt="Web Developement" />
                            <h3 className="text-xl font-semibold mb-2">Web Devlopement</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm"> In web development, every millisecond counts. Optimize not just for speed, but for the best possible user experience."</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                            <img className='w-16 mb-4 inline-block' src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/214.png" alt="App Developement" />
                            <h3 className="text-xl font-semibold mb-2">App Devlopement</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm">Coding is the brush, design the canvas, and functionality the masterpiece. In the world of app development, every line of code shapes the future of innovation.</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                            <img className='w-16 mb-4 inline-block' src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/180.png" alt="Branding" />
                            <h3 className="text-xl font-semibold mb-2">Branding</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm">From logo design to brand messaging, we ensure every element reflects your values, resonates with your audience, and sets you apart in the market.</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                            <img className='w-16 mb-4 inline-block' src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/145.png" alt="Branding" />
                            <h3 className="text-xl font-semibold mb-2">Content Management</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm">Efficiently organize, create, and distribute content across platforms with our intuitive solutions. Elevate your brand's visibility and engagement while saving time and resources.</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300">
                            <img className='w-16 mb-4 inline-block' src="https://preview.wolfthemes.live/app/uploads/sites/28/2019/07/238.png" alt="Hosting" />
                            <h3 className="text-xl font-semibold mb-2">Hosting</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm">Trust our scalable hosting services to keep your website secure and accessible 24/7. Experience seamless performance and unmatched support, so you can focus on growing your business hassle-free.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#6626d9] via-[#a91079] to-[#e91e63] py-20 px-6 font-[sans-serif]">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-white mb-6">Start Working With Us</h2>
                    <p className="text-lg text-white mb-8">Experience the future of our innovative solutions. Contact Us now for exclusive access.</p>
                    <a href="" className="bg-white text-[#a91079] hover:bg-[#a91079] hover:text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 hover:shadow-lg">
                        <Link to={'/contact'}>Get Started</Link>
                        
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard