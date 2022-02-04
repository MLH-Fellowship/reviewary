import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { setLocationInfo } from "./redux/userSlice";
import Home from "./pages/Home";
import Map from "./pages/Map";
import axios from "axios";

async function getLocationInfo(dispatch) {
  await axios
    .get(`https://api.ipdata.co/?api-key=a4098f89e8ceb83ca53f144e14088a4f1407aabb77d9b479b3a3b005`)
    .then((res) => {
      console.log(res);
      dispatch(setLocationInfo(res.data));
      
    });
}
function App() {
  const dispatch = useDispatch();
  getLocationInfo(dispatch);
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
