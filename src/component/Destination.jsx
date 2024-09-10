import Picture from '../Assest/1.jpg'
import Picture2 from '../Assest/2.jpg'
import Picture3 from '../Assest/3.jpg'
import Picture4 from '../Assest/4.jpg'
import './DestinationStyles.css'
import DestinationData from './DestinationData'

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot within a time frame</p>


            <DestinationData 

            cName= "first-des"
            heading= "Taal volcano, Batangas"
            text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island.if you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners.  Guides will assist you most of the way, and youll see the peculiar environment found on an active volcano, 
                 including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bufalo before heading pock home!"
            
            img1={Picture}
            img2={Picture2}
            />

             <DestinationData 

            cName="first-des-reverse"
            heading= "Mt. Daguldul, Batangas"
            text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island.if you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners.  Guides will assist you most of the way, and youll see the peculiar environment found on an active volcano, 
                 including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bufalo before heading pock home!"
            
            img1={Picture3}
            img2={Picture4}
            />
        </div>
    )
}
export default Destination