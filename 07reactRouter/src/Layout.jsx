import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";


//Ye LayOut defined karega hamare webPage ka ki har render me Header Pahle rahega and Footer rahega
function Layout(){
    return(
<>
<Header />
<Outlet />
<Footer />
</>
    )
}
export default Layout;