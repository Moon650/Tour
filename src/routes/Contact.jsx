import Night from '../Assest/2.jpg'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import ContactForm from '../component/ContactForm'



function Contact () {

    return(
        <>
          <Navbar />
        <Hero 
        cName="hero-mid"
        HeroImage ={Night}
        title= "Contact"
        btnClass="hide"
        />
        <ContactForm />
        <Footer />
        </>
    )
}
export default Contact