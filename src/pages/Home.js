import React from "react";
import "./Gene.css";
import { useState } from "react";
import Image1 from "./images/sunnyday.jpg";
import Image2 from "./images/windy.jpg";
import Image3 from "./images/hydro.jpg";
import Image4 from "./images/wild.jpg";
import Image5 from "./images/hydrogen.jpg";
import Image6 from "./images/sound.jpg";
import Image7 from "./images/Energy.jpg";
export default function Home() {
  const viewWidth = window.innerWidth;
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);
  const [tab5, setTab5] = useState(false);
  const [tab6, setTab6] = useState(false);
  const [tab7, setTab7] = useState(true);

  const handleTab1 = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab5(false);
    setTab6(false);
    setTab7(false);
  };
  const handleTab2 = () => {
    setTab2(true);
    setTab1(false);
    setTab3(false);
    setTab4(false);
    setTab5(false);
    setTab6(false);
    setTab7(false);
  };
  const handleTab3 = () => {
    setTab3(true);
    setTab2(false);
    setTab1(false);
    setTab4(false);
    setTab5(false);
    setTab6(false);
    setTab7(false);
  };
  const handleTab4 = () => {
    setTab4(true);
    setTab3(false);
    setTab2(false);
    setTab1(false);
    setTab5(false);
    setTab6(false);
    setTab7(false);
  };
  const handleTab5 = () => {
    setTab5(true);
    setTab4(false);
    setTab3(false);
    setTab2(false);
    setTab1(false);
    setTab6(false);
    setTab7(false);
  };
  const handleTab6 = () => {
    setTab6(true);
    setTab5(false);
    setTab4(false);
    setTab3(false);
    setTab2(false);
    setTab1(false);
    setTab7(false);
  };
  return (
    <>
      <div className="First">
        <button onClick={handleTab1}className="text1">Solar Energy</button>
        <button onClick={handleTab2}className="text2">Wind Energy</button>
        <button onClick={handleTab3}className="text3">Hydro-Power</button>
        <button onClick={handleTab4}className="text4">Biomass Energy</button>
        <button onClick={handleTab5} className="text5">Hydrogen</button>
        <button onClick={handleTab6}className="text6">Sound Energy</button>
      </div>
      <div className="second">
      {tab1 &&(
        <div
          className="parent"
          style={{
            backgroundImage: `url(${Image1})`,
            backgroundSize: "cover",
          }}
        >
          <div
            className="parent-child"
            style={{
              position: "relative",
              zIndex: "1",
              backgroundImage: `url(${Image1})`,
              backgroundSize: "cover",
            }}
          >
            <h2>Solar Energy</h2>
            <p style={{
               fontSize: viewWidth <= 768 ? "10px" : "",
            }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              incidunt eius earum totam natus aut, asperiores voluptatibus nam
              quisquam amet adipisci. Minus beatae sequi voluptatibus dicta in
              sint ipsam ad?Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. At quia nihil expedita excepturi nam veritatis nulla ipsam
              similique consequatur beatae enim laboriosam itaque impedit vitae
              ratione dolorem, explicabo culpa fugiat!
            </p>
          </div>
        </div>
      ) 
    }
      {tab2 && (
        <div
          className="parent"
          style={{
            backgroundImage: `url(${Image2})`,
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div
          className="parent-child"
            style={{
              zIndex: "1",
              position: "relative",
              backgroundImage: `url(${Image2})`,
              backgroundSize: "cover",
            }}
          >
            <h2>Wind Energy</h2>
            <p style={{
               fontSize: viewWidth <= 768 ? "10px" : "",
            }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium quae, vero, omnis laboriosam distinctio fugiat fugit
              laborum facilis minus recusandae maiores, quasi consectetur
              perferendis dolor atque ipsam id quibusdam neque?Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. A nostrum ut itaque
              officia corrupti qui dolores reiciendis sint, cumque odit dolor!
              Libero mollitia corrupti explicabo quam atque earum vel
              distinctio!
            </p>
          </div>
        </div>
      )}

      {tab3 && (
        <div
          className="parent"
          style={{
            backgroundImage: `url(${Image3})`,
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div
          className="parent-child"
            style={{
              position: "relative",
              backgroundImage: `url(${Image3})`,
              backgroundSize: "cover",
              color: "white",
            }}
          >
            <h2>Hydro Power</h2>
            <p style={{
               fontSize: viewWidth <= 768 ? "10px" : "",
            }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              ipsam, suscipit voluptate atque, veniam enim numquam eos natus
              voluptatum consectetur odit voluptas! Ad voluptatibus placeat
              facilis repellendus similique eos cupiditate?Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Nam ipsam dignissimos magni
              veritatis excepturi rem alias corporis maxime laborum deleniti
              laboriosam voluptas sit reiciendis ratione quasi, facere,
              voluptatem similique ipsa.
            </p>
          </div>
        </div>
      )}

      {tab4 && (
        <div
          className="parent"
          style={{
            color: "white",
            backgroundImage: `url(${Image4})`,
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div
          className="parent-child"
            style={{
              position: "relative",
              backgroundImage: `url(${Image4})`,
              backgroundSize: "cover",
            }}
          >
            <h2>Biomass Energy</h2>
            <p style={{
               fontSize: viewWidth <= 768 ? "10px" : "",
            }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              nihil quisquam dicta quibusdam, excepturi doloribus eos quia
              necessitatibus sit sapiente vel? Cum, voluptate! Odit eos soluta,
              nam esse sequi corporis?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio officia eos iure placeat repellat?
              Doloribus optio illo dicta at itaque facilis praesentium tempore
              impedit similique porro repellat doloremque, unde autem.
            </p>
          </div>
        </div>
      )}

      {tab5 && (
        <div
          className="parent"
          style={{
            backgroundImage: `url(${Image5})`,
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div
          className="parent-child"
            style={{
              position: "relative",
              backgroundImage: `url(${Image5})`,
              backgroundSize: "cover",
            }}
          >
            <h2>Hydrogen</h2>
            <p style={{
               fontSize: viewWidth <= 768 ? "10px" : "",
            }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, aspernatur iusto incidunt aut nam perferendis? Et,
              sequi esse, dolorem corrupti possimus ex libero beatae itaque non
              odio optio ullam. Voluptatibus?Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quasi eaque voluptas ipsa cupiditate
              libero officiis. Libero quasi quod amet enim, sequi error eius
              voluptates vel laborum, nam omnis consequuntur id.
            </p>
          </div>
        </div>
      )}

      {tab6 && (
        <div className="parent"
          style={{
            color: "white",
            backgroundImage: `url(${Image6})`,
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div
          className="parent-child"
            style={{
              position: "relative",
              backgroundImage: `url(${Image6})`,
              backgroundSize: "cover",
            }}
          >
            <h2>Sound Energy</h2>
            <p style={{
               fontSize: viewWidth <= 768 ? "10px" : "",
            }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus consectetur veniam quasi magni, dicta cumque debitis eos blanditiis vero est reprehenderit perspiciatis rem. Adipisci, repudiandae minus facere dolore culpa quaerat,Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo tempore distinctio quidem exercitationem sunt sequi accusantium a aperiam vitae minus dolor ad, odit nesciunt ipsum rerum ea, saepe aliquam.</p>
          </div>
        </div>
      )}
      {tab7 && (
        <div
          className="parent"
          style={{
            backgroundImage: `url(${Image7})`,
            backgroundSize: "cover"

          }}
        >
          <div
          className="parent-child"
          >
            <h2>Energy</h2>
            <p style={{
               fontSize: viewWidth <= 768 ? "10px" : "",
            }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              ullam, quibusdam ratione in ex enim quas voluptatum, error
              consequuntur nihil ipsum dicta provident incidunt fuga doloribus
              ad voluptatibus tempore odit?Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Eius dicta sunt, nostrum deserunt
              vitae, laudantium odio optio molestias quo minus repudiandae.
              Harum dicta quas eaque praesentium, esse libero repudiandae non!
            </p>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
