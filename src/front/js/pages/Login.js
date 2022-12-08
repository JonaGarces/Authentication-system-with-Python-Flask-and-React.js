import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigation } from '@react-navigation/native';
// import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Login = () => {
  const style = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "100%",
    height: "100vh",
  };

  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(email, password, navigate);
  };

  return (
    <>
      <section id="login" style={style}>
        {/* <img className="w-100 img-fluid trip" src={trip}/> */}
        <div >
          <div className="container-main col-md-4 col-12 m-auto">
            <div className=" row text my-3">
              <h1 className=" text-center">Inicio de Sesion</h1>
            </div>
            {store.token && store.token !== "" && store.token !== undefined ? (
              "Ya iniciaste sesion"
            ) : (
              <form onSubmit={handleSubmit}>
                <div className=" col-8 mx-auto mb-4">
                  <input
                    className="form-control"
                    type="text"
                    value={email}
                    name="email"
                    id="emailLogin"
                    placeholder="Ingresa tu correo"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-8 mx-auto mb-5">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="form-control"
                    id="passwordLogin"
                    placeholder="Indica tu clave"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {store.errorMessage && (
                  <div className="row ">
                    <div className="col-10 bg-danger text-white p-3 mx-auto d-flex justify-content-center">
                      Correo y contraseña no coinciden
                    </div>
                  </div>
                )}
                <div className="m-5 text-center">
                  <button
                    // type="submit"
                    className="btn"
                    style={{ backgroundColor: "#336b87", color: "white" }}
                  >
                    Iniciar Sesion
                  </button>
                </div>
              </form>
            )}

            <div className="d-flex justify-content-center ">
              <Link to="/signup" className="link">
                <strong>No tienes una cuenta, crea una haciendo click</strong>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
