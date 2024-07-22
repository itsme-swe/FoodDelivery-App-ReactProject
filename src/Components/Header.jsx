import { LOGO_URL } from "../Utils/contants";
import { LOGO_CART } from "../Utils/contants";

const Header = () => {
    return (
        <div className="header">

            <div className="logo-container">
                <img
                className="logo" 
                src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart<img className="cart" src={LOGO_CART}/></li>
                </ul>
            </div>
        </div>
    )
};
export default Header;