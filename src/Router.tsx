import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PinDetail from "./pages/PinDetail";
import Mypage from "./pages/Mypage";
import userDataHooks from "./hooks/userDataHooks";

const Router = () => {
  userDataHooks();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/pin/:pinId" element={<PinDetail />} /> 보미 파이팅!
          {/* <Route path="/mypage/:userId" element={<Mypage />} /> 예현 파이팅!*/}
          {/* <Route path="/pin/:pinId" element={<PinDetail />} /> 보미 파이팅!*/}
          <Route path="/mypage/:userId" element={<Mypage />} />
          {/* <Route path="/pinupload" element={<Upload />} /> 재욱 파이팅!*/}
          {/* <Route path="*" element={<ErrorPage />} /> 찬우 파이팅!*/}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
