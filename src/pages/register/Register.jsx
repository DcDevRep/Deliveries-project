import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import signUp from "../../assets/signUp.png";
import { Link } from "react-router-dom";

import "./register.Styles.scss";
const Register = () => {
  return (
    <div className="container-register">
      <Container>
        <Row>
          <Col
            xl={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={signUp} alt="signUp"  className="singupImg"/>
          </Col>
          <Col
            xl={6}
            className="d-flex flex-row justify-content-around align-items-center"
          >
            <RenderRegister />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;

const RenderRegister = () => {
  return (
    <Col className="d-flex flex-column justify-content-center align-items-center">
      <h3 className="title-login">Register</h3>
      <form
        // onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <input
          type="text"
          placeholder="Correo electronico"
          className="form-control mb-3"
          name="email_user"
          required
          // onChange={onChangeEmail}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="form-control mb-3"
          required
          name="password_user"
          // onChange={onChangePassword}
        />

        <input
          type="password"
          placeholder="Confirmar Contraseña"
          className="form-control mb-3"
          required
          name="password_user"
          // onChange={onChangePassword}
        />

        <input
          type="submit"
          value="Iniciar sesión"
          className="form-control mb-3 login-button"
        />
      </form>
      <div className="d-flex flex-row justify-content-center text-contain">
        <p className="mx-3 qa">¿No tienes cuenta? </p>
        <Link to="register" className="text-center text-decoration-none">
          <span className="register-log">Register</span>
        </Link>
      </div>
    </Col>
  );
};
