import react from 'React'
import Navbar from './Navbar';
import Footer from './Footer';
import FetchProducts from './FechProducts.js'

function Product(){
  return <>
  <Navbar/>
  <FetchProducts/>
  <Footer/>
  </>
}


export default Product