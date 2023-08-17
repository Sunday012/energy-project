import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import myImage from "./images/Logo.png";
import Image from "./images/Genesis.png";
import { useState, useEffect } from "react";
export default function NavBar() {
  const vieportWidth = window.innerWidth
  const [prevScroll, setPrevScroll] = useState(0);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const Hscroll = () => {
      const currentScroll = window.scrollY;
      setScrollUp(currentScroll < prevScroll);
      setPrevScroll(currentScroll);
    };
    window.addEventListener("scroll", Hscroll);
    return () => {
      window.removeEventListener("scroll", Hscroll);
    };
  }, [prevScroll]);
  return (
    <>
      <nav>
        <div className="nav-box1"
          style={{
            backgroundColor: scrollUp ? "rgba(0,0,0,0.3)" : "white",
            transition: "background-color 0.2s ease",
          }}
        >
          <div
           className="navbox2"
          >
            <img 
              src={scrollUp ? Image : myImage}
              alt="Logo"
              className="first-img"
              style={{
                width: vieportWidth <= 768 ? "80px" : "130px"
              }}
            />
          </div>
          <div className="link-box">
            <Link
              to={"/"}
              className="linkk"
              style={{
                textDecoration: "none",
                color: scrollUp ? "white" : "black",
                fontSize : vieportWidth <= 768 ? "15px" : ""
              }}
            >
              Home
            </Link>
            <Link
              to={"About"}
              className="linkk"
              style={{
                textDecoration: "none",
                color: scrollUp ? "white" : "black",
                fontSize : vieportWidth <= 768 ? "15px" : ""
              }}
            >
              About
            </Link>
            <Link
              to={"Contact"}
              className="linkk"
              style={{
                textDecoration: "none",
                color: scrollUp ? "white" : "black",
                fontSize : vieportWidth <= 768 ? "15px" : ""
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
