import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from ".";
import Home from "../../Pages/Home";

export const Main = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
