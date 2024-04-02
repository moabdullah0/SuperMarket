import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Vegitable from './Vegitable'
import Featured from './Featured'
import OurShop from './OurShop'
import Footer from './Footer'
import Carousel from './Carousel'

const HomePage = () => {
 

  return (
    <div className=''>
       <Navbar />
      <Carousel />
      <About />
      <Services />
      <Vegitable />
      <Featured />
      <OurShop />
      <Footer />
    </div>
  )
}

export default HomePage
