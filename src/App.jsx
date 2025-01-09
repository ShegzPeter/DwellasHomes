import Navbar from "./Components/Navbar";
import Hero from "./Components/heroSection"
import Property from './Components/properties'
import Agent from "./Components/agent"
import Testimonials from "./Components/testimonials"
import Footer from "./Components/footer"
import About from "./Components/about"
import Properties from './Components/properties'; 
import Agents from './Components/agent'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="overflow-x-hidden">
<Router>

<Navbar />
<Routes>
  <Route path="/" element={<Hero/>} />
  <Route path="/about" element={<About/>}/>
  <Route path="/properties" element={<Properties />} />
  <Route path="/agents" element={<Agents />} />

</Routes>





</Router>



{/* -------------Hero section -------------- */}





{/* -------------Hero section -------------- */}







{/* -------------------About us----------- */}





{/* -------------------About us----------- */}




<Property/>


<Agent/>


<Testimonials/>


<Footer/>














    </div>
   
  );
}

export default App;
