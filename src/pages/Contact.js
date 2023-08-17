import React, { useState } from "react";
import Wimage from "./images/whatsapp.png";
import Pimage from "./images/phone.png";

export default function Contact() {
  const viewcWidth = window.innerWidth
  const [inputValue,setinputValue] = useState("")

  const handleinputValue = (event) => {
    setinputValue(event.target.value)
  }
  const [inputText,setinputText] = useState("")
  const handleinputText = (event) => {
    setinputText(event.target.value)
  }
  const[inputArea,setinputArea] = useState("")
  const handleinputArea = (event) => {
    setinputArea(event.target.value)
  }
  const [lastInput,setlastInput] = useState("")
  const handlelastInput = (event) => {
    setlastInput(event.target.value)
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "90px",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{ padding: "20px", boxShadow: "0 3px 10px rgba(0,0,0,0.3)" }}
        >
          <h2 style={{fontSize: viewcWidth <= 768 ? "14px" : ""}}>Contact Us</h2>
          <h4 style={{fontSize: viewcWidth <= 768 ? "14px" : ""}}>Get the info you're looking for now</h4>
          <button style={{ width: viewcWidth <= 768 ? "20px" : "", borderRadius: "15px",fontSize: "12px",height: viewcWidth <= 768 ? "20px" : ""}}>
            Energy Transformation
          </button>
          <button style={{ width: viewcWidth <= 768 ? "20px" : "", borderRadius: "15px",fontSize: "12px",height: viewcWidth <= 768 ? "20px" : ""}}>
            Energy sustainability
          </button>
          <button style={{ width: viewcWidth <= 768 ? "20px" : "", borderRadius: "15px",fontSize: "12px",height: viewcWidth <= 768 ? "20px" : ""}}>
            Energy Generation
          </button>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button style={{ width: viewcWidth <= 768 ? "20px" : "", borderRadius: "15px",fontSize: "12px",height: viewcWidth <= 768 ? "20px" : ""}}>
              Energy uses
            </button>
            <button style={{ width: viewcWidth <= 768 ? "20px" : "", borderRadius: "15px",fontSize: "12px",height: viewcWidth <= 768 ? "20px" : ""}}>
              Energy Availability
            </button>
            <button style={{ width: viewcWidth <= 768 ? "20px" : "",borderRadius: "15px",fontSize: "12px",height: viewcWidth <= 768 ? "20px" : ""}}>
              Research materials
            </button>
          </div>
          <h3 style={{fontSize: viewcWidth <= 768 ? "14px" : ""}}>Need immediate help</h3>
          <h4 style={{fontSize: viewcWidth <= 768 ? "10px" : ""}}>Reach us through</h4>
          <div style={{ display: "flex", gap: viewcWidth <= 768 ? "20px" : "", padding: "30px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: viewcWidth <= 768 ? "20px" : "", marginRight: "70px" }}
                src={Pimage}
                alt="Phone call"
              />
              <br></br>
              <h5 style={{fontSize: viewcWidth <= 768 ? "14px" : ""}}>Call +234-9092001540</h5>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <img
                style={{ width: viewcWidth <= 768 ? "20px" : "", marginLeft: "20px" }}
                src={Wimage}
                alt="Whatsapp"
              />
              <br></br>
              <h5 style={{fontSize: viewcWidth <= 768 ? "14px" : ""}}>Chat using Whatsapp</h5>
              <span style={{fontSize: viewcWidth <= 768 ? "14px" : ""}}>09092001540</span>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <h5 style={{ marginTop: "30px",fontSize: viewcWidth <= 768 ? "14px" : ""}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            et quos impedit ipsa tempore ab amet voluptatibus, necessitatibus
            laudantium modi quaerat. Maiores harum sunt
          </h5>
          <div style={{ display: "flex", marginTop: "30px",position: "relative"}}>
          <label className={inputValue ? "floating-label active" : "floating-label" } htmlFor="input-box">First name</label>
            <input
              style={{
                border: "none",
                outline: "none",
                width: "290px",
                gap: "20px",
                height: "50px",
                marginLeft: "30px",
                padding: "20px",
              }}
              type="text"
              id="input-box"
              name="input-box"
              value={inputValue}
              onChange={handleinputValue}
            />
            <div style={{position: "relative"}}>
            <label className={inputText ? "floating-label active" : "floating-label"} htmlFor="input-text" >Last name</label>
            <input
              style={{
                border: "none",
                outline: "none",
                width: "290px",
                gap: "20px",
                marginLeft: "20px",
                height: "50px",
                padding: "20px",
              }}
              type="text"
              value={inputText}
              name="input-text"
              id="input-text"
              onChange={handleinputText}
            />
            </div>
          </div>
          <div style={{position: "relative"}}>
            <label className={inputArea ? "floating-label active" : "floating-label"} htmlFor="input-area">Your Email</label>
          <input
            style={{
              display: "flex",
              flexDirection: "column",
              width: "600px",
              height: "80px",
              border: "none",
              outline: "none",
              marginTop: "20px",
              marginLeft: "30px",
              padding: "20px",
            }}
            type="text"
            id="input-area"
            name="input-area"
            value={inputArea}
            onChange={handleinputArea}
          />
          </div>
          <div style={{position: "relative",width: "100%"}}>
           <label htmlFor="last-input" className={lastInput ? "up" : "down"} >Tell us your worries or suggestion or better still how you would like to impact the energy sector...</label>
           <textarea
            
            style={{
              width: "600px",
              height: "150px",
              border: "none",
              outline: "none",
              marginTop: "20px",
              marginLeft: "30px",
              padding: "20px",
            }}
            type="text"
            id="last-input"
            name="last-input"
            value={lastInput}
            onChange={handlelastInput}
           />
          </div>
          <button style={{ marginLeft: "30%" }}>Talk with one of us</button>
        </div>
      </div>
    </>
  );
}
