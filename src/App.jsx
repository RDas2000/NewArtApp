// src/App.jsx
import React, { useState,useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header1 from './component/Header';
import Gallery from './component/Gallery';
//import Sidebar from './component/sideNav';
import Shop from './component/Shop';
//import Testcase from './component/Testcase'
import AboutMe from './component/AboutMe';
import Home from './component/Home';
import ContactMe from './component/ContactMe';
import CookiePopup from './component/cookiepopup';
import useDeviceDetection from './component/Testcase';

// Layout that includes the header and an outlet for child routes
 
const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 

  return (
    <>
   
      <Header1 setSidebarOpen={setSidebarOpen} />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // layout with header
    children: [
      { path: '', element: <Home /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'shop', element: <Shop /> },
      { path: 'aboutme', element: <AboutMe /> },
      { path: 'contactme', element:<ContactMe/>},
      { path: 'test', element:<useDeviceDetection/>},
      { path: 'cookie', element:<CookiePopup/>},
      
     /// { path: 'testcase', element: <Testcase /> }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
 


  
};

export default App;
