import React from "react";
import Navbar from './Components/Navbar'

function Dashboard() {
    return (
        <>
        <div className="container" style={{backgroundColor:"#FFE1B7", height:"100vh", width:"100vw",margin:0, padding:0, display:"flex"}}>
            <div >
            <Navbar/>
            </div>

            <div className="header" style={{margin:0, display:"flex", justifyContent:"end",alignItems:"center",height:"30px"}}>
            <div style={{fontSize:"35px", color:"black",}}>Title</div>
            <div>Search</div>
            <div>Update</div>
            <div>Profile</div>
            </div>
        </div>
        </>
    )
};

export default Dashboard;