import React, { useEffect, useState ,useLayoutEffect} from 'react'

//import './HomeCss.css'

//import Header from './header';
import Sidebar from './SideNav';
import * as motion from "motion/react-client"
import { easeInOut } from 'framer-motion';
import CookiePopup from './cookiepopup';
import { User } from 'lucide';

const images = [
  '/SK(art).jpg',
  '/oldLady.jpg',
  '/couple(art).jpeg',
  '/paramita(art).jpeg',
  
];


let cookie;

// if (localStorage.getItem("cookieAcceptOrDeline") === null || localStorage.getItem("cookieAcceptOrDeline") != false) {
//   cookie = true // default value
// } else {
//   cookie = localStorage.getItem("cookieAcceptOrDeline");
// }



const Home = () => {
  const [current, setCurrent] = useState(0);
  const [showCookies, setShowCookies] = useState(cookie);
  const [NumberOpenHome,setNumberOpenHome]=useState();

 useLayoutEffect(() => {
  setNumberOpenHome(setNumberOpenHome+1);
  console.log("setNumberOpenHome",NumberOpenHome);
}, []);  // runs only once


   useEffect(() => {
    setShowCookies(sessionStorage.getItem("cookieAcceptOrDeline"));
  }, []);
const handleAccept = () => {setShowCookies(false);console.log(showCookies);};
const handleDecline = () => {setShowCookies(false);console.log(showCookies);};

localStorage.setItem("cookieAcceptOrDeline", showCookies)
 console.log(showCookies);

//console.log(User);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);


 

  return (
    <>
  


<section id="bannerSection"className='items-center justify-between px-0 py-0 w-auto'>

<div id="banner" className='flex h-auto  mx-0 md:ml-[0%] ml-0 pr-10 '/>
        {/* <motion.img id="logo" src='/logopng1.png' className='absolute '
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}></motion.img> */}
       </section>


 {/* ✅ Cookie popup overlay */}
       {showCookies && <CookiePopup onAccept={handleAccept} onDecline={handleDecline} />}  

    {/* <div><sideNav/></div> */}
     <div className="md:min-h-screen bg-zinc-100 flex">
       <div> <Sidebar/></div>


      
      {/* Hero Section */}
      <section
  className="flex flex-col lg:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto md:ml-54"
  data-scoll-speed="0.3"
>
  {/* Text content */}
  <motion.div
    className="lg:w-1/2 text-center lg:text-left"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.2 }} // triggers on scroll
    transition={{ duration: 0.8 }}
  >
    <motion.h1
      className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      Discover the Beauty of Art
    </motion.h1>

    <motion.p
      className="text-lg text-gray-600 mb-8"
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      Oil portraits are an excellent way to cherish a beloved family member. Order one for the patriarch of your family or the founding father of your business
    </motion.p>

    <motion.p
      className="text-lg text-gray-600 mb-8"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      Instead of framing printed photographs of your beloved family member, order an oil portrait instead.
    </motion.p>

    <motion.p
      className="text-lg text-gray-600 mb-8"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <b>Don’t forget: A photograph is temporary but an oil portrait on canvas is timeless.</b>
    </motion.p>
  </motion.div>

  {/* Art Image */}
  <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center ">
    <motion.img
      src="/oldLady.jpg"
      alt="Featured Art"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="max-w-full rounded-2xl shadow-xl w-[40em]"
    />
  </div>
</section>


      
    </div>

 
 {/* <div>
 <motion.div
  initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
  whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
 className='h-10 w-20 ml-20'>
            <img src="/SK(art).jpeg" className=''/>
            <img src="/oldLady.jpg"/>
</motion.div>

 </div> */}




 {/* <div className=" overflow-hidden relative h-[55em] w-[55em] ml-72">
      <motion.div
        className="flex "
        animate={{ x: `-${current * 100}%` }}
        transition={{ duration: 0.8, easeInOut}}
        style={{ width: `${images.length * 28}%`, height: `${images.length * 29}%` , padding: `${images.length * 2}%`}}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="  object-cover flex-shrink-0"
            style={{ width: "100%" }}
          />
        ))}
      </motion.div>
    </div> */}



    </>
  )
}

export default Home;