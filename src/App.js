import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


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



