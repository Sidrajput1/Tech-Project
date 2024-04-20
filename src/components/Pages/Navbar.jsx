import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import logoshimmer from '../../assets/logoshimmer.png'
function Navbar() {
    return (
        // <nav className='w-[100%] '>
        //     <div className='flex justify-evenly items-center flex-row'>
        //         <div>
        //             <img className='w-[9%] ' src={logo} alt="imageLogo" />

        //         </div>
        //         <div className='flex list-none justify-between items-center gap-20'>

        //                 <li><Link to={'/home'}>HOME</Link></li>
        //                 <li>SERVICES</li>
        //                 <li>CONTACT</li>
        //                 <li>TESTIMONIALS</li>

        //             <button className='p-4  rounded-lg'>Get Started</button>

        //         </div>
        //     </div>
        // </nav>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>HOME</Link></li>
                        <li>
                            <a>Who We Are</a>
                            <ul className="p-2">
                                <li><Link to={'/about'}>About Us</Link></li>
                                <li><Link to={'/contact'}>Contact</Link></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <img src={logoshimmer} alt="Shimmar SofTech" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>HOME</Link></li>
                    <li>
                        <details>
                            <summary>Who We Are</summary>
                            <ul className="p-2 z-10">
                                <li><Link to={'/about'}>About Us</Link></li>
                                <li><Link to={'/contact'}>Contact</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to={'/service'}>Services</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    
                </ul>
            </div>
            <div className="navbar-end">
                
                <a className="btn  bg-emerald-600 text-white font-semibold text-2xl"  href=""><Link to={'/home'}>Let's Start</Link></a>
            </div>
        </div>
    )
}

export default Navbar