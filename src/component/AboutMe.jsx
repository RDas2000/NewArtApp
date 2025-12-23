import React from 'react'
import * as motion from "motion/react-client"
import Sidebar from './SideNav'
import { useRef,useState,useEffect } from 'react'
import { animate } from "motion";

const AboutMe = () => {
  const scrollContainerRef = useRef(null);

  // make mouse wheel scroll horizontally
  useEffect(() => {
    const el = scrollContainerRef.current;

    const handleWheel = (e) => {
      if (el) {
        e.preventDefault();
        el.scrollLeft += e.deltaY; // horizontal scroll
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  const artists = [
    { name: "Pablo Picasso", comment: "Every child is an artist." },
    { name: "Leonardo da Vinci", comment: "Art is never finished, only abandoned." },
    { name: "Vincent van Gogh", comment: "I dream my painting and I paint my dream." },
    { name: "Claude Monet", comment: "I must have flowers, always, and always." },
    { name: "Frida Kahlo", comment: "I paint flowers so they will not die." },
    { name: "Salvador Dalí", comment: "Have no fear of perfection - you'll never reach it." },
    { name: "Michelangelo", comment: "A man paints with his brains and not with his hands." },
    { name: "Georgia O’Keeffe", comment: "I found I could say things with color and shapes that I couldn’t say any other way." },
    { name: "Henri Matisse", comment: "Creativity takes courage." },
    { name: "Andy Warhol", comment: "Art is what you can get away with." },
  ];

  return (

  <div>
    <div className='flex'> 
      <div><Sidebar/></div>
    
      <div id="aboutmeMainDiv" className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4 py-10 w-[100wh]">
    {/* Container */}
    <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
      {/* Artist Image */}
      <motion.div className="flex justify-center"
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.8 }}>
        <img
          src="/me.jpg" // Replace with actual image path
          alt="Artist"
          className="rounded-2xl shadow-lg w-72 h-96 object-cover border-4 border-gray-300"
        />
      </motion.div>

      {/* Artist Info */}
      <motion.div className="space-y-4"
       initial={{ opacity: 0, x: 50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        <p className="text-lg leading-relaxed">
          Hi! I’m <strong>Riya</strong>, an artist who specializes in oil and charcoal painting.
          I find inspiration in nature, emotion, and everyday life. My goal is to tell stories
          through strokes and shadows.
        </p>
        <div className="flex space-x-4 mt-4"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold">Oil Painting</span>
          <span className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm font-semibold">Charcoal Art</span>
          <span className="px-4 py-2 rounded-full bg-cyan-300 text-gray-800 text-sm font-semibold">Watercolor Art</span>
        </div>
      </motion.div>
    </div>
  </div>
  </div>


         <section className="w-full py-16 bg-gray-100 pl-40">
      <h2 className="text-3xl font-bold text-center mb-10">
        Artists’ Comments
      </h2>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto ml-5"
      >
        <div className='flex w-[150%]'>
        {artists.map((artist, index) => (
          <div
            key={index}
            className="w-[300px] m-2 bg-white rounded-2xl shadow-md p-6 flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
            <p className="text-gray-700 italic">"{artist.comment}"</p>
          </div>
        ))}
        </div>
      </div>
    </section>
     
  </div>
  
  )
}

export default AboutMe