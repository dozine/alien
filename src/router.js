import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";
import Home from "./Pages/Home";

import Mypage from "./Pages/Mypage";
import GuideSlider from "./Components/GuideSlider";

import LifeStyle1 from "./Pages/LifeStyle1";
import LifeStyle2 from "./Pages/LifeStyle2";
import LifeStyle3 from "./Pages/LifeStyle3";
import LifeStyle4 from "./Pages/LifeStyle4";
import LifeStyle5 from "./Pages/LifeStyle5";
import LifeStyle6 from "./Pages/LifeStyle6";
import LifeStyle7 from "./Pages/LifeStyle7";
import Register from "./Pages/Register";
import Introduction from "./Pages/Introduction";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/guide" element={<GuideSlider />} />
        <Route path="/lifestyle1" element={<LifeStyle1 />} />
        <Route path="/lifestyle2" element={<LifeStyle2 />} />
        <Route path="/lifestyle3" element={<LifeStyle3 />} />
        <Route path="/lifestyle4" element={<LifeStyle4 />} />
        <Route path="/lifestyle5" element={<LifeStyle5 />} />
        <Route path="/lifestyle6" element={<LifeStyle6 />} />
        <Route path="/lifestyle7" element={<LifeStyle7 />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Introduction" element={<Introduction />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
