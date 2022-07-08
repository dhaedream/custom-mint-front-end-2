import "./index.css";
import CanvasJsx from "./components/canvas/CanvasJsx";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CanvasJsx />
    </div>
  );
}

export default App;
