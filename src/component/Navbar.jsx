import { Component } from "react"
import "./NavbarStyle.css"
import { MenuData } from "./MenuData"
import { Link } from "react-router-dom";


class Navbar extends Component {

    // navbar toggle...............................................
    state = {clicked: false};
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
    return(
        <nav className="NavbarItems">
            <h1 className="Nav-logo">Trippy</h1>


{/* navbar toggler */}

            <div className="menuicons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                
            </div>


            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuData.map((item, index) =>{
                    return(
                        <li key={index}>
                        <Link to={item.url} className={item.cNmae}>
                         <i className={item.icon}>                       
                         </i>
                         {item.title}
                         </Link>
                     </li>
                    )
                })}
               <button>Sign Up</button>
            </ul>
        </nav>
    )
        
    
}
}
export default Navbar