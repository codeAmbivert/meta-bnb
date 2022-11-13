import "./App.css";
import "./Media.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import PlaceToStay from "./PlaceToStay";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place_to_stay" element={<PlaceToStay />} />
      </Routes>
    </div>
  );
}

export default App;
