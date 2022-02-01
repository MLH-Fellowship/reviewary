import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Map from "./pages/Map";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
