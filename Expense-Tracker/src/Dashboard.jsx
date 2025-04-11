import React from "react";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "Input", link: "#input" },
  { name: "Profile", link: "#profile" },
  { name: "Calendar", link: "#calendar" },
  { name: "Report", link: "#report" },
  { name: "Settings", link: "#settings" },
  { name: "Contact Us", link: "#contact" },
];

const Dashboard = () => {
  return (
    
    <div className:container style={{ display: "flex", backgroundColor: "#f4dec1",width:"100vw", height: "100vh", margin: 0 }}>
      <div style={{ width: "180px", backgroundColor: "#2b2927", color: "white", padding: "20px 10px" }}>
        <nav style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <div style={{ flex: 1, padding: "20px 30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #aaa", paddingBottom: "10px" }}>
          <h1>Dashboard</h1>
          <div className:search style={{  position:"relative", top:"5px",left:"-20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <input type="text" placeholder="Search" style={{padding: "5px 10px", borderRadius: "20px", border: "1px solid #333" }} />
            <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#fff", border: "1px solid #333" }}></div>
            <button style={{ backgroundColor: "#aee2ff", padding: "5px 15px", borderRadius: "20px", border: "1px solid #333" }}>Profile</button>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h2>Overview</h2>
          <button style={{ float: "right", marginTop: "-30px", padding: "5px 10px", borderRadius: "10px", border: "1px solid #999" }}>last 30 days</button>
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            <div style={{ backgroundColor: "#d9cebe", padding: "20px", borderRadius: "10px", flex: 1, textAlign: "center" }}>
              <h3>Total Income</h3>
              <p>$10,000</p>
            </div>
            <div style={{ backgroundColor: "#d9cebe", padding: "20px", borderRadius: "10px", flex: 1, textAlign: "center" }}>
              <h3>Total Expense</h3>
              <p>$5,000</p>
            </div>
            <div style={{ backgroundColor: "#d9cebe", padding: "20px", borderRadius: "10px", flex: 1, textAlign: "center" }}>
              <h3>Net Balance</h3>
              <p>$5,000</p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ backgroundColor: "#d9cebe", padding: "20px", borderRadius: "15px", width: "60%" }}>
              <h3>Analytics</h3>
              <p>Entertainment &nbsp;&nbsp;&nbsp;&nbsp; $345</p>
              <p>Food &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $65</p>
              <p>Transport &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $129</p>
              <p>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $87</p>
            </div>
            <div style={{ backgroundColor: "#d9cebe", padding: "20px", borderRadius: "15px", width: "30%", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center" }}>
              <h3>Investments</h3>
              <button style={{ backgroundColor: "#ccc", border: "none", padding: "10px", borderRadius: "10px", width: "80%" }}>Invested</button>
              <button style={{ backgroundColor: "#ccc", border: "none", padding: "10px", borderRadius: "10px", width: "80%" }}>Profits</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
