import React from "react";
import Navbar from './components/Navbar';
import CarouselComp from './components/CarouselComp';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <CarouselComp/>
      <Homepage/>
      <Footer/>
    </React.Fragment>
    
  );
}

export default Home;
