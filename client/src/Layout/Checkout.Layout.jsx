
import React from "react";

//components
import Navbar from "../Components/Navbar/checkoutNavbar";

const CheckLayout = (props) => {
    return (
        <>
           <Navbar/>
           <div className="container mx-auto px-4 lg:px-20">{props.children}</div>
        </>
    );
};

export default CheckLayout;