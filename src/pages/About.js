import React from "react";
import Favour from "../pages/images/favour.jpeg";
export default function About() {
  return (
    <>
      <div
        style={{
          padding: "20px",
          backgroundColor: "rgba(0,0,0,0.3)",
          marginTop: "95px",
        }}
      >
        <h1>About</h1>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          padding: "20px",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ width: "60%", height: "60vh" }}>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ipsam fuga hic voluptas iste itaque odit impedit excepturi ab
            quibusdam reiciendis quisquam maxime, eum veritatis et molestias
            omnis eos aliquam?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi suscipit, optio animi
          </h4>
        </div>
        <div style={{ width: "40%" }}>
          <div
            style={{
              backgroundColor: "blue",
              borderRadius: "20px 20px 0 0",
              width: "70%",
              marginLeft: "20%",
              height: "20vh",
            }}
          >
            ..
          </div>
          <div
            style={{
              padding: "40px",
              backgroundColor: "white",
              width: "70%",
              borderRadius: "0 0 20px 20px",
              height: "50vh",
              marginLeft: "20%",
            }}
          >
            <div
              style={{
                borderRadius: "100%",
                width: "80%",
                backgroundColor: "white",
                position: "relative",
                left: "20px",
                top: "-70px",
              }}
            >
              <img
                src={Favour}
                alt="img"
                style={{
                  width: "50%",
                  borderRadius: "100%",
                  position: "relative",
                  left: "50px",
                  top: "5px",
                }}
              />
              <h4 style={{ position: "relative", top: "20px", left: "20px" }}>
                Sunday Favour
              </h4>
              <h5 style={{ position: "relative", top: "30px", left: "20px" }}>
                Owner,creator and C.E.O OF Genesis
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "rgba(0,0,0,0.3)", width: "100%" }}>
        <h4 style={{ marginLeft: "77%" }}>Founder</h4>
      </div>
      <div style={{backgroundColor: "rgba(0,0,0,0.3)",marginTop: "-5px",padding: "20px",height: "60vh"}}>
        <h1 style={{fontSize: "30px",padding: "30px"}}>If you would like to join us on our breathtaking and discovery journey,
        click the button below and you get a free profile card like the one above.</h1>
        <button style={{marginLeft: "40%",marginTop: "80px"}}>Get your profile card</button>
      </div>
    </>
  );
}
