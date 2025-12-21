import React, { useState } from 'react'
import Gallery from './Gallery';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import AboutMe from './AboutMe';

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Shop", path: "/shop" },
  { name: "About Me", path: "/aboutme" },
  { name: "Contact Me", path:'/contactme'}
];


const Header1 = () => {
  const[open,setOpen]=useState(false);

  const handleMenu=()=>{
    setOpen(!open)
    console.log(open);
    
  }
 
  return (
    <>
     <div className= "sticky top-0 z-10 bg-black shadow-md p-2 flex items-center justify-between border-2 md:hidden w-[100%] ">
      {/* <h1 className="text-2xl font-bold  text-white"> */}
      <Link to="/"><img src='/logopng1.png' className='md:h-15 h-10 w-2/3 '/></Link>
      {/* </h1> */}
      <nav className="md:space-x-4 text-white font-mono">

      <div className='h-fit w-20 cursor-pointer md:hidden flex' onClick={()=>handleMenu()}>☰</div>
      
      {/* <Link to="/" className="text-gray-100 hover:text-blue-500 text-[20px]">Home</Link>
      <Link to="/gallery" className="text-gray-100 hover:text-blue-500 text-[20px]">Gallery</Link>  */}
    
      </nav>
    </div>

    {open && <motion.nav id="navdown" className='sticky top-12 md:h-15 z-10 md:hidden h-8 w-[100%]'
     initial={{ opacity: 0, y: 0 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8 }} >
      
      <div className='Sticky top-0 z-10 bg-black md:h-20 flex space-x-5 justify-center items-center p-2 text-sm'>
      {menuItems.map((item) => (
      <NavLink  key={item.name} to={item.path}><div className='text-white flex items-center  space-x-reverse '>{item.name}</div></NavLink>
       
     ))}</div>
    </motion.nav>}
    
    </>
  )
}

export default Header1;