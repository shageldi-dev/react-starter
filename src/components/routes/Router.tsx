import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../home/MainLayout";
import Home from "../../page/Home";
import SecondPage from "../../page/SecondPage";
import Login from "../../page/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="second-page" element={<SecondPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
