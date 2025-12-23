import React, { useState } from 'react';
import Sidebar from './SideNav';
import * as motion from "motion/react-client"


const medium = [
  { name: "Oil" },
  { name: "Charcoal" },
  { name: "Water" },
 
];


const options = {
  material: ['Canvas'],
  faces: ['One', 'Two', 'Three', 'Four', 'Five'],
  sizes: [
    'A5','A4','A3', 'A2', '2.5 x 1.5 feet', '3 x 2 feet', '3.5 x 2.5 feet',
    '4 x 3 feet', '5 x 3.5 feet'
  ]
};
const faceprices={
  'One':100,
  'Two':500,
  'Three':800,
  'Four':1000,
  'Five':1500
}
const prices = {
  'A5':200,
  'A4':400,
  'A3':500,
  'A2':600,
  '2.5 x 1.5 feet':1900,
  '3 x 2 feet': 2000,
  '3.5 x 2.5 feet':2500,
  '4 x 3 feet':2900,
  '5 x 3.5 feet':3200
  
  // Add prices for other sizes as needed
};

export default function Shop() {
  const [selectedMaterial, setSelectedMaterial] = useState('Canvas');
  const [selectedFaces, setSelectedFaces] = useState('One');
  const [selectedSize, setSelectedSize] = useState('A3');
  const [cal,setCal]=useState(0)
  const [mediumselect,setMediumselect]=useState("");
  const [selectedMedium, setSelectedMedium] = useState('Oil');
  const clearSelections = () => {
    setSelectedMaterial('Canvas');
    setSelectedFaces('One');
   // console.log(selectedFaces);
    setSelectedSize('A3');

  };
  const handleface=(face)=>{
    setSelectedFaces(face)
  }

  const handlesize=(size)=>{
    setSelectedSize(size)
  }
  // document.getElementById("Oil").style.display="block"
  // document.getElementById("Watercolour").style.display="hidden"
  // document.getElementById("Charcoal").style.display="hidden"


 // const handleMediumSet = (name) => {
  //  setMediumselect(name);
  //  console.log(document.getElementById(name));
  //   if(document.getElementById(name)=="Oil"){
  //     document.getElementById("Oil").style.display="block"
  //     document.getElementById("Watercolour").style.display="hidden"
  //      document.getElementById("Charcoal").style.display="hidden"
  //   }
  //   else if(document.getElementById(name)=="Watercolour"){
  //     document.getElementById("Watercolour").style.display="block"
  //     document.getElementById("Oil").style.display="hidden"
  //     document.getElementById("Charcoal").style.display="hidden"
  //   }
  //   else if(document.getElementById(name)=="Charcoal"){
  //     document.getElementById("Charcoal").style.display="block"
  //     document.getElementById("Oil").style.display="hidden"
  //     document.getElementById("Watercolour").style.display="hidden"
  //   }
  //   //document.getElementById(name).style.display="block"
    
  // };

  const handleMediumSet=(nm)=>{
    setSelectedMedium(nm)
  }



//console.log(cal);

  
  //console.log(selectedFaces,selectedSize);

  return (
    <>

< motion.nav  className=' h-10 w-full  items-center justify-center '
     initial={{ opacity: 0, y: 0 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8 }} >
      
      <div className='bg-black md:h-20 flex space-x-12 justify-center items-center p-2 fixed w-full'>
      {medium.map((item) => (
      <div className='text-white flex items-center space-x-reverse border-2 border-amber-100 p-2 rounded-4xl hover:cursor-pointer hover:bg-zinc-700' >
        <button key={item.name} onClick={()=>handleMediumSet(item.name)} className='text-[10px] md:text-[15px]'>
        {item.name} medium</button></div>
       
     ))}</div>
    </motion.nav>
    
        <div className=' overflow-y-hidden overflow-x-hidden'>
      <div className='overflow-auto '><Sidebar /></div>


<div className='grid grid-cols-1'>
{selectedMedium === 'Oil' && 
  <div className='grid md:grid-cols-2 grid-cols-1 w-[100%] p-[0%] pt-[] md:pl-[20%] pt-3.5 '>
    <div id="Oil" className='pt-[10%] '>
      <div>
        <div>
        <motion.section className=''
     initial={{ opacity: 0, x: -50 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8 }}
    >


      <div>
        <h2 className='md:text-5xl text-2xl'>Oil Paintings</h2><br></br>
        <h2 className="font-bold text-sm mb-2">MATERIAL</h2>
        <div className="flex gap-2">
          {options.material.map((material) => (
            <button
              key={material}
              onClick={() => setSelectedMaterial(material)}
              className={`px-4 py-2 border ${selectedMaterial === material ? 'bg-black text-white' : 'bg-white text-black'}`}>
              {material}
            </button>
          ))}
        </div>
      </div>
          <br></br>
      <div>
        <h2 className="font-bold text-sm mb-2">FACE</h2>
        <div className="grid grid-cols-3 gap-2">
          {options.faces.map((face) => (
            <button
              key={face}
              onClick={() =>handleface(face) }
              className={`px-4 py-2 border text-center ${selectedFaces === face ? 'bg-black text-white' : 'bg-white text-black'}`}>
              {face}
            </button>
          ))}
        </div>
      </div>
            <br></br>
      <div>
        <h2 className="font-bold text-sm mb-2">SIZE</h2>
        <div className="grid grid-cols-3 gap-2">
          {options.sizes.map((size) => (
            <button
              key={size}
              onClick={() =>handlesize(size) }
              className={`px-4 py-2 border text-center ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}>
              {size}
            </button>
          ))}
        </div>
   
        <button className="text-blue-600 underline mt-2" onClick={clearSelections}>Clear</button>
      </div>

      <div className="text-2xl font-semibold">
      ₹{faceprices[selectedFaces] + prices[selectedSize]}
      </div>

    </motion.section>
        </div>
      </div>
    </div>

    <div> <motion.div className='p-10 rounded'
       initial={{ opacity: 0, x: 50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.8 }}
      ><img src="/SK(art).jpeg" /></motion.div></div>
  </div>}
  {/* -----------oil end------------------- */}

  {/* ----------water color------------------- */}
  {selectedMedium === 'Water' &&
  <div className='grid md:grid-cols-2 grid-cols-1 w-[100%] p-[0%]  md:pl-[20%] pt-1.5 '>
    <div className='' >
    <div id="Water" className='pt-[10%] sm:p-[10px] '>
      <div>
        <div>
        <motion.section className=''
     initial={{ opacity: 0, x: -50 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8 }}
    >


      <div>
        <h2 className='md:text-5xl text-2xl'>Water Color</h2><br></br>
        <h2 className="font-bold text-sm mb-2">MATERIAL</h2>
        <div className="flex gap-2">
          {options.material.map((material) => (
            <button
              key={material}
              onClick={() => setSelectedMaterial(material)}
              className={`px-4 py-2 border ${selectedMaterial === material ? 'bg-black text-white' : 'bg-white text-black'}`}>
              {material}
            </button>
          ))}
        </div>
      </div>
          <br></br>
      <div>
        <h2 className="font-bold text-sm mb-2">FACE</h2>
        <div className="grid grid-cols-3 gap-2">
          {options.faces.map((face) => (
            <button
              key={face}
              onClick={() =>handleface(face) }
              className={`px-4 py-2 border text-center ${selectedFaces === face ? 'bg-black text-white' : 'bg-white text-black'}`}>
              {face}
            </button>
          ))}
        </div>
      </div>
            <br></br>
      <div>
        <h2 className="font-bold text-sm mb-2">SIZE</h2>
        <div className="grid grid-cols-3 gap-2">
          {options.sizes.map((size) => (
            <button
              key={size}
              onClick={() =>handlesize(size) }
              className={`px-4 py-2 border text-center ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}>
              {size}
            </button>
          ))}
        </div>
   
        <button className="text-blue-600 underline mt-2" onClick={clearSelections}>Clear</button>
      </div>

      <div className="text-2xl font-semibold">
      ₹{faceprices[selectedFaces] + prices[selectedSize]}
      </div>

    </motion.section>
        </div>
      </div>
    </div>
    </div>
    <div>
      <motion.div className='p-10 rounded'
       initial={{ opacity: 0, x: 50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.8 }}
      ><img src="/shop(artW).jpg" className='md:h-[80vh] w-[100wh] h-fit' /></motion.div></div>
  </div>}
  {/* -----------water color end------------- */}


  {/* -----------charcoal start------------------ */}
  {selectedMedium === 'Charcoal' &&
  <div className='grid md:grid-cols-2 grid-cols-1 w-[100%] p-[0%]  md:pl-[20%] pt-1.5 '>
    <div className='' >
    <div id="Charcoal" className='pt-[10%] sm: sm:p-[10px]'>
      <div>
        <div>
        <motion.section className=''
     initial={{ opacity: 0, x: -50 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8 }}
    >


      <div>
        <h2 className='md:text-5xl text-2xl'>Charcoal Drawing</h2><br></br>
        <h2 className="font-bold text-sm mb-2">MATERIAL</h2>
        <div className="flex gap-2">
          {options.material.map((material) => (
            <button
              key={material}
              onClick={() => setSelectedMaterial(material)}
              className={`px-4 py-2 border ${selectedMaterial === material ? 'bg-black text-white' : 'bg-white text-black'}`}>
              {material}
            </button>
          ))}
        </div>
      </div>
          <br></br>
      <div>
        <h2 className="font-bold text-sm mb-2">FACE</h2>
        <div className="grid grid-cols-3 gap-2">
          {options.faces.map((face) => (
            <button
              key={face}
              onClick={() =>handleface(face) }
              className={`px-4 py-2 border text-center ${selectedFaces === face ? 'bg-black text-white' : 'bg-white text-black'}`}>
              {face}
            </button>
          ))}
        </div>
      </div>
            <br></br>
      <div>
        <h2 className="font-bold text-sm mb-2">SIZE</h2>
        <div className="grid grid-cols-3 gap-2">
          {options.sizes.map((size) => (
            <button
              key={size}
              onClick={() =>handlesize(size) }
              className={`px-4 py-2 border text-center ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}>
              {size}
            </button>
          ))}
        </div>
   
        <button className="text-blue-600 underline mt-2" onClick={clearSelections}>Clear</button>
      </div>

      <div className="text-2xl font-semibold">
      ₹{faceprices[selectedFaces] + prices[selectedSize]}
      </div>

    </motion.section>
        </div>
      </div>
    </div>
    </div>
    <div>
      <motion.div className='p-10 rounded'
       initial={{ opacity: 0, x: 50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.8 }}
      ><img src="/couple(art).jpeg" className='md:h-[80vh] w-[100wh] h-fit' /></motion.div></div>
  </div>}

  {/* -----------charcoal end------------------- */}
</div>

    </div>

</>
  );
}