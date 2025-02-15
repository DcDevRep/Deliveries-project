import React from "react";
import { Row } from "react-bootstrap";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/about/About";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import FollowProduct from "./pages/followProduct/FollowProduct";
import Admin from "./pages/admin/Admin";
import Error from "./pages/404/Error";

const App = () => {
  const token = localStorage.getItem("token");
  const idRol = localStorage.getItem("id_rol");
  // ** ID 4 = ADMIN **

  return (
    <>
      <Row xxl={12} xl={12}>
        <NavbarComponent>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/nosotros" exact element={<About />} />
            <Route path="/contacto" exact element={<Contact />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/admin" exact element={<Admin />} />
            <Route
              path="/followProduct"
              element={
                !token ? <Navigate replace to="/login" /> : <FollowProduct />
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </NavbarComponent>
      </Row>
    </>
  );
};

export default App;
