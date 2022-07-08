import "./index.css";
import React, { useState } from "react";
import CanvasJsx from "./components/canvas/CanvasJsx";
import Navbar from "./components/navbar/Navbar";
import Selector from "./components/selector/Selector";

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
  const [aura, setAura] = useState("#FF0000");

  // console.log({ ...props });
  // const auraState = "#32a852";
  return (
    <div className="App">
      <Navbar />
      <h1>CUSTOMIZE NFT</h1>
      <div className="mint-container">
        <div className="mint-canvas-card">
          <div className="mint-canvas-wrapper">
            <CanvasJsx
              // customColors={{
              // aura: auraState,
              // antenna: "white",
              // hair: "black",
              // face: "white",
              // body: "black",
              // hex: "ffffff",
              // }}
              // customColors={customColors}
              setAura={setAura}
              aura={aura}
              hex={hex}
            />
          </div>
          <Selector setAura={setAura} aura={aura} hex={hex} />
        </div>
      </div>
    </div>
  );
}

export default App;
