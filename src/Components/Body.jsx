import RestCardComponent from "./RestaurantCard";
import restList from "../Utils/apiData";


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
                    image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8"
                    resName="Domino's" cuisine="Pizza's, Pastas, Desserts" stars="4.3 stars" time="25 min"
                /> */}

                
                {/* <RestCardComponent
                    resData = {restList[0]}
                />

                <RestCardComponent
                    resData = {restList[1]}
                />

                <RestCardComponent
                    resData = {restList[2]}
                /> */}

                {restList.map((restaurant) => (
                    < RestCardComponent key={restaurant.info.id} resData={restaurant} />    //🔸Passing key as unique ID to each restaurant is good practice
                ))} 
                
   
            </div>
            
        </div>
    )
};

export default Body;