import Image from '../Assest/12.jpg'
import Destination from '../component/Destination'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import Trip from '../component/Trip'
import Footer from '../component/Footer'

function Home () {

    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        HeroImage ={Image}
        title= "Your Journey Your Story"
        text= "Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination />
        <Trip  />
        <Footer />
        </>
    )
}
export default Home