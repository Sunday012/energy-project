import React from "react";
import Favour from "../pages/images/favour.jpeg";
export default function About() {
  const viewaWidth = window.innerWidth
  return (
    <>
    <div style={{
      height: "100vh"
    }}>
      <div
        style={{
          padding: "20px",
          backgroundColor: "rgba(0,0,0,0.3)",
          marginTop: "95px",
          width: "100%"
        }}
      >
        <h1>About</h1>
      </div>
      <div
      className="contain"
        style={{
          display: "flex",
          width: "100%",
          padding: "20px",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <div 
        className="about1"
        style={{ width: "50%", height: viewaWidth <= 768 ? "30vh" : "" }}>
          <h4 className="about1text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ipsam fuga hic voluptas iste itaque odit impedit excepturi ab
            quibusdam reiciendis quisquam maxime, eum veritatis et molestias
            omnis eos aliquam?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi suscipit, optio animi
          </h4>
        </div>
        <div 
        style={{ width: "40%",marginLeft: viewaWidth <= 768 ? "70px" : "" }}>
          <div
           className="box3" 
          >
            ..
          </div>
          <div
           className="box4"
          >
            <div
              style={{
                borderRadius: "100%",
                width: "80%",
                backgroundColor: "white",
                position: "relative",
                left: "10px",
                top: "-80px",
              }}
            >
              <img
                src={Favour}
                alt="img"
                style={{
                  width: viewaWidth <= 768 ? "70%" : "50%",
                  marginLeft: viewaWidth <= 768 ? "-38px" : "",
                  borderRadius: "100%",
                  position: "relative",
                  left: "50px",
                  top: "5px",
                }}
              />
              <h4 style={{ position: "relative", top: "20px", left: "20px",fontSize: viewaWidth <= 768 ? "14px" : ""}}>
                Sunday Favour
              </h4>
              <h5 style={{ position: "relative", top: "20px", left: "10px",fontSize: viewaWidth <= 768 ? "10px" : "" }}>
                Owner,creator and C.E.O OF Genesis
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(0,0,0,0.3)", width: "100%" }}>
        <h4 style={{ marginLeft: viewaWidth <= 768 ? "60%" : "77%"}}>Founder</h4>
      </div>
      <div style={{backgroundColor: "rgba(0,0,0,0.3)",marginTop: "-5px",padding: "20px",height: viewaWidth <= 768 ? "50vh" : ""}}>
        <h1 style={{fontSize: viewaWidth <= 768 ? "14px" : "",padding: "10px"}}>If you would like to join us on our breathtaking and discovery journey,
        click the button below and you get a free profile card like the one above.</h1>
        <button style={{marginLeft: "40%",marginTop: "10px"}}>Get your profile card</button>
      </div>
      </div>
    </>
  );
}
