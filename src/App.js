import "./index.css";
import React, { useState } from "react";
import CanvasJsx from "./components/canvas/CanvasJsx";
import Navbar from "./components/navbar/Navbar";
import Selector from "./components/selector/Selector";

function App() {
  const hex = "#ffffff";
  // const [aura, setAura] = useState("#ffffff");
  // const [antenna, setAntenna] = useState("#000000");
  // const [customColor, setCustomColor] = useState([{ aura: "#ff0000" }]);

  const [customColors, setCustomColors] = useState({
    aura: "#32a852",
    antenna: "#32a852",
    hair: "#32a852",
    face: "#32a852",
    body: "#32a852",
    hex: "ffffff",
  });
  console.log(customColors);
  console.log(customColors.aura);

  // console.log(customColor.aura);

  return (
    <div className="App">
      <Navbar />
      <h1>CUSTOMIZE NFT</h1>
      <div className="mint-container">
        <div className="mint-canvas-card">
          <div className="mint-canvas-wrapper">
            <CanvasJsx aura={customColors.aura} hex={hex} />
          </div>
          <Selector
            setAuraColor={setCustomColors.aura}
            // customColor={customColor}
            // aura={customColor}
            aura={customColors.aura}
            antenna={customColors.antenna}
            hair={customColors.hair}
            face={customColors.face}
            body={customColors.body}
            hex={hex}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
