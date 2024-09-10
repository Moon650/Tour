import Night from '../Assest/night.jpg'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import AboutUs from '../component/AboutUs'


function About () {

    return(
        <>
         <Navbar />
        <Hero 
        cName="hero-mid"
        HeroImage ={Night}
        title= "About"
        btnClass="hide"
        />
        <AboutUs />
        <Footer />
        </>
    )
}
export default About