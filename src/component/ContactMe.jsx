

// import { useState } from "react";
// import Sidebar from './sideNav';
// import supabase from "./supabase-client"; // adjust path as needed



// export default function ContactMe() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Example: just showing confirmation for now
//     if (!form.name || !form.email || !form.message) {
//       setStatus("Please fill all fields.");
//       return;
//     }

//     setStatus("Thanks for reaching out! I’ll get back to you soon. 🎨");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b  px-6 py-10">
//         <div><Sidebar/></div>
//       <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
//         <h1 className="text-3xl font-bold text-center text-black  mb-6">
//           Get in Touch
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           I’d love to hear from you! Whether it’s a custom art request, a
//           collaboration, or just to say hi — drop your message below.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Your Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus: outline-none"
//               placeholder="Enter your name"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-rose-400 outline-none"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Message
//             </label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               rows="4"
//               className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus: outline-none"
//               placeholder="Tell me about your project or idea..."
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-900 transition-all font-semibold"
//           >
//             Send Message
//           </button>
//         </form>

//         {status && (
//           <p className="mt-4 text-center text-rose-600 font-medium">{status}</p>
//         )}
//       </div>

//       <footer className="mt-10 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} Riya’s Art Studio — All Rights Reserved
//       </footer>
//     </section>
//   );
// }



import { useState } from "react";
import Sidebar from "./sideNav";
import supabase from "./supabase-client"; // adjust path as needed
import { SupabaseClient } from "@supabase/supabase-js";
import fblogo from "/fblogo.png";
import instalogo from "/instalogo.png";

export default function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [userName,setUserName]=useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form.name);
  };
//-----------------Supabase data store code----------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email ) {
      setStatus("⚠️ Please fill all fields.");
      return;
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("UserLoginTable")
      .insert([{ userName: form.name, emailID: form.email, messages:form.message}])
      .select("*")
      .single();

    if (error) {
      console.error("Error:", error.message);
      setStatus("❌ Something went wrong. Please try again.");
    } else {
      setStatus("✅ Thanks for reaching out ! I’ll get back to you soon. 🎨");
      setForm({ name: "", email: "", message: "" });
    }
  };
//-----------------Supabase data store code----------------------------------
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b px-6 py-10">
      <div><Sidebar /></div>
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-8">
          I’d love to hear from you! Whether it’s a custom art request, a
          collaboration, or just to say hi — drop your message below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              id="userName"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 outline-none"
              placeholder="Enter your name"
            />
          </div>
          

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 outline-none"
              placeholder="Tell me about your project or idea..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-950 transition-all font-semibold"
          >
            Send Message
          </button>
        </form>
        <br></br>

         <div className="flex justify-center text-[25px]"><img src={fblogo} className="h-8 w-8 cursor-pointer"/> &nbsp;&nbsp;&nbsp;&nbsp; 
         <a href=""> <img src={instalogo} className="h-8 w-8 cursor-pointer"/></a>
         </div>
         

        {status && (
          <p className="mt-4 text-center text-rose-600 font-medium">{status}</p>
        )}

       
      </div>

      

      <footer className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Riya’s Art Studio — All Rights Reserved
      </footer>
    </section>
  );
}
