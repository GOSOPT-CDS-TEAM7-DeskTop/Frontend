import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/pin/:pinId" element={<PinDetail />} />
          <Route path="/mypage/:userId" element={<Mypage />} />
          <Route path="/pinupload" element={<Upload />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
