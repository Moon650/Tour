import Night from '../Assest/night.jpg'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Trip from '../component/Trip'



function Service () {

    return(
        <>
          <Navbar />
        <Hero 
        cName="hero-mid"
        HeroImage ={Night}
        title= "Service"
        btnClass="hide"
        />
        <Trip />

        <Footer />
        </>
    )
}
export default Service