import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer/Footer'

import AOS from "aos"
import "aos/dist/aos.css";


const App = () => {
  
  React.useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
  });
  AOS.refresh();
}, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App