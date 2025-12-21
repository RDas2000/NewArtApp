import React, { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./sideNav";
import { IoIosArrowDropright } from "react-icons/io";
import supabase from "./supabase-client";
import { SortAsc } from "lucide";



/*const products = [
  {
    id: 1,
    image: "/SK(art).jpeg",
    main: "/SK(main).jpeg",
    category: "Oil painting couple photo",
    title: "Couple Portrait",
    price: "₹800.00 – ₹2,500.00",
  },
  {
    id: 2,
    image: "/paramita(art).jpeg",
    main: "/paramita(main).jpeg",
    category: "Oil Painting Group photo",
    title: "Family Picture",
    price: "₹800.00 – ₹2,500.00",
  },
  {
    id: 3,
    image: "/couple(art).jpeg",
    main: "/couple(main).jpeg",
    category: "Charcoal Pencil Portrait Sketch From Photo",
    title: "Couple in Charcoal",
    price: "₹500.00 – ₹2,000.00",
  },
  {
    id: 4,
    image: "/oldLady.jpg",
    main: "/Oldlady(main).jpeg",
    category: "Canvas Portrait",
    title: "Old lady oil portrait",
    price: "₹800.00 – ₹2,000.00",
  },
  {
    id: 5,
    image: "/ritika(art).jpeg",
    main: "/ritika(main).jpeg",
    category: "Custom Movie Posters",
    title: "Family-Sister Picture",
    price: "₹500.00 – ₹2,000.00",
  },
  {
    id: 6,
    image: "/riddho(art).jpeg",
    main: "/Riddho(main).jpeg",
    category: "Custom Movie Posters",
    title: "Old lady oil portrait",
    price: "₹2,500.00 – ₹5,000.00",
  },
  {
    id: 7,
    image: "/jm(art).jpeg",
    main: "/jm(art).jpeg",
    category: "Custom Movie Posters",
    title: "Old lady oil portrait",
    price: "₹2,500.00 – ₹5,000.00",
  },
  {
    id: 8,
    image: "/p1.jpeg",
    main: "/p1.jpeg",
    category: "Custom Movie Posters",
    title: "Old lady oil portrait",
    price: "₹2,500.00 – ₹5,000.00",
  },
  {
    id: 9,
    image: "/shop(artW).jpg",
    main: "/shop(artW).jpg",
    category: "Custom Movie Posters",
    title: "Old lady oil portrait",
    price: "₹2,500.00 – ₹5,000.00",
  },
  {
    id: 10,
    image: "/p2.jpeg",
    main: "/p2.jpeg",
    category: "Custom Movie Posters",
    title: "Old lady oil portrait",
    price: "₹2,500.00 – ₹5,000.00",
  },
  {
    id: 11,
    image: "/p3.jpeg",
    main: "/p3.jpeg",
    category: "Custom Movie Posters",
    title: "Old lady oil portrait",
    price: "₹2,500.00 – ₹5,000.00",
  },
  {
    id: 12,
    image: "/p4.jpeg",
    main: "/p4.jpeg",
    category: "Custom Movie Posters",
    title: "Old lady oil portrait",
    price: "₹2,500.00 – ₹5,000.00",
  },
];*/

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const [newSorttodoList, setnewSortTodoList] = useState([]);
  // return (
  //   <div className="flex">
  //     <div><Sidebar/></div>
   
  //   <div className="min-h-screen  bg-white px-4 py-2  flex ">
      
  //     <div className="max-w-8xl mx-auto justify-items-center ">
  //       {/* <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center mt-20">Riya's Pallate</h2> */}
  //           <motion.div className="" 
  //           initial={{ opacity: 0, y: 0 }}
  //        animate={{ opacity: 1, y: 20 }}
  //        transition={{ duration: 0.8 }}><img src="/logopng1.png" className="h-30 w-[1/2] items-center"/></motion.div>


  //     <div className=" md:pt-10 md:p-60 pt-3">
  //       <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 "
  //       initial={{ opacity: 0, x: 0 }}
  //        animate={{ opacity: 1, x: 0 }}
  //        transition={{ duration: 0.8 }}>
  //         {products.map((item) => {
  //           const isHovered = hoveredId === item.id;
  //           const imageToShow = isHovered ? item.main : item.image;

  //           return (
  //             <div
  //               key={item.id}
  //               className="group border-2 border-zinc-100 p-2 shadow-xl hover:bg-zinc-300 hover:border-2 hover:border-zinc-400 rounded-sm cursor-pointer flex flex-col justify-around bottom-20 hover:shadow-2xl transition-transform opacity-100 hover:opacity-100 hover:p-2 hover:transition hover:duration-75"
  //               // onMouseEnter={() => setHoveredId(item.id)}
  //               // onMouseLeave={() => setHoveredId(null)}
  //               >
                
  //               <div className="relative w-full max-h-fit h-[500px] rounded-xl overflow-hidden bg-black">
  //                  <AnimatePresence mode="wait" className="hover:shadow-xl">
  //                     <motion.img
  //                         key={imageToShow}
  //                         src={imageToShow}
  //                         alt={item.title}
  //                         initial={{ opacity: 1 }}
  //                         animate={{ opacity: 1 }}
  //                         exit={{ opacity: 0 }}
  //                         transition={{ duration: 0.2 }}
  //                         className="w-full max-h-fit rounded-xl shadow-md border-b-2 border-black"
  //                       />
  //                   </AnimatePresence>

  //                  {/* Arrow Button */}
  //                   <button
  //                     className="absolute bottom-4 right-4 bg-transparent text-black p-2 rounded-full shadow-md hover:bg-stone-500 transition cursor-pointer"
  //                     onClick={() =>setHoveredId(prev => prev === item.id ? null : item.id)}
  //                 ><IoIosArrowDropright className="text-white"/></button>
  //               </div>

                

  //               <div className="mt-0 pt-4 ">
  //               <p className="text-sm text-gray-500 mt-4 uppercase ">{item.category}</p>
  //               <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
  //               <p className="text-gray-700">{item.price}</p>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </motion.div>
  //     </div>
  //     </div>
  //   </div> 
  // </div>
  // );


 const fetchTodos = async () => {
    const { data, error } = await supabase.from("list_of_art").select("*");
    if (error) {
      console.error("Error fetching table data:", error);
    } else {
     const sortedList = [...data].sort((a, b) => a.id - b.id);
    setTodoList(data);
    setnewSortTodoList(sortedList);
    }
  };


  useEffect(() => {
    fetchTodos();
 
  }, []);
 
  


  return (
    <div className="flex">
    <div><Sidebar/></div>
  
    <section className="px-0 py-0 max-w-[80%] mx-auto md:max-w-[100%] md:px-30 sm:py-0 md:pl-[15%]">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mb-10"
      >
        <img src="/logopng1.png" alt="Gallery Logo" className="h-20 w-auto" loading="lazy" />
      </motion.div>

  <div className="flex justify-end"><button className="border-2 p-2 rounded-sm ">Add New</button> </div>
  
  <br></br>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newSorttodoList.map((item) => {
          const isActive = hoveredId === item.id;
          const imageToShow = isActive ? item.main : item.image;

          return (
            <div
              key={item.id}
              className="group border-2 border-zinc-100 p-2 shadow-xl 
                         hover:bg-zinc-300 hover:border-zinc-400 rounded-md 
                         cursor-pointer flex flex-col transition-transform duration-300"
                        //  onMouseEnter={() => setHoveredId(item.id)}
                        //  onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imageToShow}
                    src={imageToShow}
                    alt={item.title}
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full  object-contain rounded-xl shadow-md border-b-2 border-black"
                  />
                </AnimatePresence>

                <button
                  className="absolute bottom-4 right-4 bg-stone-500 p-2 rounded-full shadow-md 
                             hover:bg-stone-600 transition cursor-pointer"
                  // onClick={() =>
                  //   setHoveredId((prev) => (prev === item.id ? null : item.id))
                  // }
                   onClick={() =>setHoveredId(prev => prev === item.id ? null : item.id)}
                >
                  <IoIosArrowDropright className="text-white text-xl" />
                </button>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-500 mt-2 uppercase">{item.category}</p>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-700">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section></div>
  );
};

export default Gallery;
