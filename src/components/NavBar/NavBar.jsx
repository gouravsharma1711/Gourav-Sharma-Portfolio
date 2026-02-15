import React, { use } from 'react'
import {Link, NavLink} from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function NavBar() {


    useGSAP(() => {
        gsap.from('nav',{
            yPercent: -300,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.2
        })
    },[])

    return (
        <nav className='fixed text-xl text-[#2563EB] font-semibold top-0 z-50 py-5 bg-transparent w-full flex justify-between px-10'>
  
  <NavLink 
    to="/"
    className='flex flex-row gap-2'
  >
    <i class="ri-copyright-line"></i>
    Code By Gourav
  </NavLink>

  <div className="flex gap-8">
    <NavLink to="/work">Work</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </div>

</nav>
    )
}

export default NavBar
