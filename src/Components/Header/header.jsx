import "./header.css"
import chef from "../../assets/chef-logo.jpg"

const Header = () => {
    return(
        <>
        <header>
            <img src = {chef} alt = "chef logo" />
            <h1>Chef Claude</h1>
        </header>
        </>
    )
}

export default Header