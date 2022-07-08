import "./index.css";
import React, { useState } from "react";
import CanvasJsx from "./components/canvas/CanvasJsx";
import Navbar from "./components/navbar/Navbar";
import Selector from "./components/selector/Selector";

function App() {
  // const [aura, setAura] = useState("#ffffff");
  // console.log({ ...props });
  // const aura = "blue"
  return (
    <div className="App">
      <Navbar />
      <h1>CUSTOMIZE NFT</h1>
      <div className="mint-container">
        <div className="mint-canvas-card">
          <div className="mint-canvas-wrapper">
            <CanvasJsx
              customColors={{
                aura: "blue",
                antenna: "red",
                hair: "black",
                face: "green",
                body: "red",
                hex: "ffffff",
              }}
            />
          </div>
          <Selector customColors={{}} />
        </div>
      </div>
    </div>
  );
}

export default App;
