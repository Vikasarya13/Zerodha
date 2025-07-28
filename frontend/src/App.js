import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './landing_page/home/HomePage';
import { Login, Signup } from './pages';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// import { Route, Routes } from "react-router-dom";
// import { Login, Signup, Home } from "./pages";


// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import { Routes, Route } from 'react-router-dom';
// import { Login, Signup } from './pages';
// import HomePage from './landing_page/HomePage';
// import AboutPage from './landing_page/AboutPage';
// import ProductPage from './landing_page/ProductsPage';
// import PricingPage from './landing_page/PricingPage';
// import SupportPage from './landing_page/SupportPage';
// import NotFound from './landing_page/NotFound';
// import Navbar from './landing_page/Navbar';
// import Footer from './landing_page/Footer';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/product" element={<ProductPage />} />
//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/support" element={<SupportPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;