/**
 * Major 3 components we'll have:
 * 🔸Header Component
 *      -- Logo
 *      -- Nav items (Home AboutUs Cart)
 * 🔸Body Component
 *      -- Search Bar with search button
 *      -- Restaurant Container
 *          --  Individual Restaurant Cards
 *              🔸Img of restaurant
 *              🔸Name of restaurant
 *              🔸Star rating
 *              🔸Cuisines served by restaurant
 * 🔸Footer Component
 *      -- Copyright
 *      -- Links
 *      -- Address
 *      -- Contact Us
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

//1️⃣ Header Component
const Header = () => {
    return (
        <div className="header">

            <div className="logo-container">
                <img
                className="logo" 
                src="https://s.cafebazaar.ir/images/icons/by.menu.app-9a55c699-3507-4d72-8bf1-c5c97ac962c7_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart<img className="cart" src="https://www.shareicon.net/data/256x256/2015/05/18/40238_basket_512x512.png" /></li>
                </ul>
            </div>
        </div>
    )
};

//🔸Background color for Restaurant cards, we'll be using as inline CSS with the help of {} braces.
const styleCard = {
    backgroundColor: "#FFFFF0", 
};

//🔸Restaurant Card Component
const RestCardComponent = (props) => {

    // const {image, resName, cuisine, stars, time} = props;

    const {resData} = props;

    return (
        // <div className="rest-card" style={styleCard}>
        //     <img
        //     className="res-logo" 
        //     alt="res-logo" src={props.image}/>
        //     <h3 className="rest-card-content">{props.resName}</h3>
        //     <h4 className="rest-card-content">{props.cuisine}</h4>
        //     <h5 className="rest-card-content">{props.stars}</h5>
        //     <h5 className="rest-card-content">{props.time}</h5>
        // </div>

        //🔸Destructuring the props is the second way to pass props as arguments to components
        <div className="rest-card" style={styleCard}>
            <img
            className="res-logo" 
            alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
            <h3 className="rest-card-content">{resData.info.name}</h3>
            <h4 className="rest-card-content">{resData.info.cuisines.join(',')}</h4>
            <h5 className="rest-card-content">{resData.info.avgRating} stars</h5>
            <h5 className="rest-card-content">{resData.info.sla.slaString}</h5>
        </div>
     
    )
}

//🔸Data coming from backend through API for every individual restaurant
const anandjiObj = {
    "info": {
                      "id": "56623",
                      "name": "Anandji Sweets",
                      "cloudinaryImageId": "64d8ec906c52b7d62aaa47cd38bab13a",
                      "locality": "Sector 1",
                      "areaName": "Malviya Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Sweets",
                        "Snacks",
                        "Indian"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "32920",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      }
            }
        };

const gudmishriObj = {
    "info": {
                      "id": "729690",
                      "name": "GudMishri",
                      "cloudinaryImageId": "20c6e89e00a2268a01d057e64ee1ca5c",
                      "locality": "University Marg",
                      "areaName": "Lal Kothi",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "281854",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      }
            }
};

const bombayMisthanObj = {
    "info": {
                      "id": "61560",
                      "name": "Bombay Mishthan Bhandar (BMB)",
                      "cloudinaryImageId": "127d6d2a1a4f3e995fba2c5dd93b574f",
                      "locality": "Durgapura",
                      "areaName": "Durgapura",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Sweets",
                        "Indian",
                        "Snacks"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "13728",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "6.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      }
            }          
};

//2️⃣ Body Component
const Body = () => {
    return (
        <div className="body-container">

            <div className="search-bar">
                Search
            </div>

            <div className="restaurant-container">

                {/* <RestCardComponent 
                    image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/27/fe6afdda-d264-438a-80d4-78837536a36e_44507.jpg"
                    resName="Kanha" cuisine="North Indian, Sweets" stars="4.2 stars" time="20 min" 
                />  

                <RestCardComponent
                    image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xemfgnlxuwzskxr0h3nt"
                    resName="Sahu Chai" cuisine="Chai, Fast Fooad" stars="4.0 stars" time="30 min"
                /> 
                      
                <RestCardComponent
                    image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8"
                    resName="Domino's" cuisine="Pizza's, Pastas, Desserts" stars="4.3 stars" time="25 min"
                /> */}

                <RestCardComponent
                    resData = {anandjiObj}
                />

                <RestCardComponent
                    resData = {gudmishriObj}
                />

                <RestCardComponent
                    resData = {bombayMisthanObj}
                />

              
                     
            </div>
            
        </div>
    )
}

//🔸This is a outer container for our app in which our all components will be present.
const AppLayout = () => {
    return (
        <div className="appcontainer">
            <Header/>
            <Body/>

        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);



