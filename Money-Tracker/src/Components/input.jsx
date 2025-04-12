import React from "react";
import Navbar from "./Navbar";

function Input() {
    return (
        <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
            <Navbar />
            <div style={{ width: "88%", height: "100vh", backgroundColor: "#FFE1B7", margin: 0, padding: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>

                <div className="buttons" style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", justifyContent: "center" }}>
                    <button style={{ height: "50px", backgroundColor: "green" }}>Incom</button>
                    <button style={{ height: "50px", backgroundColor: "red" }}>Expense</button>
                </div>
                <label htmlFor="amount" style={{ margin: "0px 25px", color: "black" }}>Enter Your amount:</label>
                <input className="amount" type="numbers" style={{ height: "25px", margin: "0px 25px", maxWidth: "25vw", backgroundColor: "white", border: "1px solid black", borderRadius: "5px" }} />
                <label htmlFor="title" style={{ margin: "0px 25px", color: "black" }}>Title for this amount:</label>
                <input className="title" type="text" style={{ height: "25px", margin: "0px 25px", maxWidth: "25vw", backgroundColor: "white", border: "1px solid black", borderRadius: "5px" }} />
                <label htmlFor="Description" style={{ margin: "0px 25px", color: "black" }}>Other information:</label>
                <input className="Description" type="text" style={{ height: "25px", margin: "0px 25px", maxWidth: "25vw", backgroundColor: "white", border: "1px solid black", borderRadius: "5px" }} />
                <button style={{ height: "50px", width: "25vw", margin: "15px 25px" }}>Submt</button>

            </div>
        </div>
    )
}
export default Input;