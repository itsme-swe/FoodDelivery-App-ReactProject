import { CDN_URL } from "../Utils/contants";

const RestCardComponent = (props) => {

    const {resData} = props;
    // const {image, resName, cuisine, stars, time} = props;    // Destructring props

    const {
        cloudinaryImageId,
        name, 
        cuisines,
        avgRating,
        } = resData?.info;

    const { slaString } = resData?.info?.sla;
   

    return (
        // <div className="rest-card">
        //     <img
        //     className="res-logo" 
        //     alt="res-logo" src={props.image}/>
        //     <h3 className="rest-card-content">{props.resName}</h3>
        //     <h4 className="rest-card-content">{props.cuisine}</h4>
        //     <h5 className="rest-card-content">{props.stars}</h5>
        //     <h5 className="rest-card-content">{props.time}</h5>
        // </div>

        //🔸Destructuring the props is the second way to pass props as arguments to components
        <div className="rest-card">

            <img
            className="res-logo" 
            alt="res-logo" src={ + cloudinaryImageId}/>
            <h3 className="rest-card-content">{name}</h3>
            <h4 className="rest-card-content">{cuisines.join(", ")}</h4>
            <h5 className="rest-card-content">{avgRating} stars</h5>
            <h5 className="rest-card-content">{slaString}</h5>

        </div>
     
    )
};

export default RestCardComponent;