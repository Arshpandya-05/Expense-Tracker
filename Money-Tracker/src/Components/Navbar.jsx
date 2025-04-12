import React from "react";

function Navbar(){
    return(
        <>
            <div className="pages" style={{margin:0,padding:"100px 25px",backgroundColor:"#0B0B0B",display:"flex",flexDirection:"column",width:"12vw",height:"100vh", justifyContent:"start",lineHeight:"2"}}>
                <div className="home" style={{color:"white",fontSize:"24px"}}>Home</div>
                <div className="input" style={{color:"white",fontSize:"24px"}}>Input</div>
                <div className="profile" style={{color:"white",fontSize:"24px"}}>Profile</div>
                <div className="calendar" style={{color:"white",fontSize:"24px"}}>Calendar</div>
                <div className="report" style={{color:"white",fontSize:"24px"}}>Report</div>
                <div className="setting" style={{color:"white",fontSize:"24px"}}>Setting</div>
                <div className="contact" style={{color:"white",fontSize:"24px"}}>Contact Us</div>
            </div>
        </>
    )
};

export default Navbar;