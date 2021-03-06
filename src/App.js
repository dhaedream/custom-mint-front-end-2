import "./index.css";
import React, { useState } from "react";
import CanvasJsx from "./components/canvas/CanvasJsx";
import Navbar from "./components/navbar/Navbar";
import Selector from "./components/selector/Selector";
import Footer from "./components/footer/Footer";

function App() {
  // const [customColors, setCustomColors] = useState({
  //   aura: "#32a852",
  //   antenna: "#32a852",
  //   hair: "#32a852",
  //   face: "#32a852",
  //   body: "#32a852",
  //   hex: "ffffff",
  // });
  const hex = "#ffffff";
  const [aura, setAura] = useState("#ffffff");
  const [antenna, setAntenna] = useState("#ffffff");
  const [hair, setHair] = useState("#ffffff");
  const [face, setFace] = useState("#ffffff");
  const [body, setBody] = useState("#ffffff");

  //setAntt
  // console.log({ ...props });
  // const auraState = "#32a852";
  return (
    <div className="App">
      <Navbar />
      <h1 className="mint-header">CUSTOMIZE NFT</h1>
      <div className="mint-container">
        <div className="mint-canvas-card">
          <div className="mint-canvas-wrapper">
            <CanvasJsx
              body={body}
              face={face}
              hair={hair}
              antenna={antenna}
              aura={aura}
              hex={hex}
            />
          </div>
          <Selector
            body={body}
            setFace={setFace}
            setBody={setBody}
            face={face}
            setAura={setAura}
            aura={aura}
            antenna={antenna}
            setAntenna={setAntenna}
            hex={hex}
            hair={hair}
            setHair={setHair}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
