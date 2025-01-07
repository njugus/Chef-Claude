import "./header.css"
//better practice - import static asset
import chef from "../../assets/chef-logo.jpg"

const Header = () => {
    return(
        <>
        <header className = "main-header">
            <img src = {chef} alt = "chef logo"  className = "header-image"/>
            <h1 className="main-heading">Chef Claude</h1>
        </header>
        </>
    )
}

export default Header