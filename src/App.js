import "./index.css";
import CanvasJsx from "./components/canvas/CanvasJsx";
import Navbar from "./components/navbar/Navbar";
import Selector from "./components/selector/Selector";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Mint Custom NFT</h1>
      <div className="mint-container">
        <div className="mint-canvas-card">
          <div className="mint-canvas-wrapper">
            <CanvasJsx />
          </div>
          <Selector />
        </div>
      </div>
    </div>
  );
}

export default App;
