import "./App.css";
import About from "./components/Home/About";
import Carousel from "./components/Home/Carousel";
import Featured from "./components/Home/Featured";
import OurShop from "./components/Home/OurShop";
import Services from "./components/Home/Services";
import Vegitable from "./components/Home/Vegitable";
import Navbar from "./components/Navbar";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <div className="relative ">
      <Navbar />
      <Carousel />
      <About />
      <Services />
      <Vegitable />
      <Featured />
      <OurShop />
      <Footer />
    </div>
  );
}

export default App;
