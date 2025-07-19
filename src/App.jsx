import Navbar from "./components/Navbar"
import Home from "./Pages/Home";
import About from "./Pages/About";
import {Routes,Route} from "react-router-dom";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import { useEffect,useState } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
 const [location, setLocation] = useState({
  state:"",
   city:""
 });
  const getLocation =()=>{

   
    navigator.geolocation.getCurrentPosition(
     (pos) => {
        const lat = pos.coords.latitude;
        const long = pos.coords.longitude;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`;
   
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
          setLocation(data.address)
        })
        .catch(err=>{
          console.log(err.message)
        })
      },
      (err) => {
        console.log("Error", err.message);
        setLocation("Location Denied");
      }
     
    )
  }
  useEffect(()=>{
  getLocation();
  },[])

  return (
 <>
<Navbar location={location} getLocation ={getLocation}/>

<Routes>
  <Route path = '/' element = {<Home/>} />
  <Route path = '/about' element = {<About/>} />
  <Route path = '/contact' element = {<Contact/>} />
  <Route path = '/products' element = {<Products/>} />
  <Route path = '/cart' element = {<Cart/>} />
</Routes>
    <Features/>
    <Footer/>
 </>
  )
}

export default App

