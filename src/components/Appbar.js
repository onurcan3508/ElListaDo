import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "./firebase";

import "./scss/Navbar.scss";

const Appbar = ({ Logincheck, User }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand logo" to="/">
          EL LISTADO
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Ana sayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Filmler">
                Filmler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Diziler">
                Dizi ve TV Şovları
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Ara">
                Ara
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className={Logincheck ? ("nav-link dropdown-toggle") : "nav-link" } to="" id={Logincheck ? ("navbarDropdown") : (null)} role={Logincheck ? ("button") : (null)} data-bs-toggle={Logincheck ? ("dropdown") : (null)} aria-expanded={Logincheck ? (false) : (null)}>
                {Logincheck ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                ) : (
                  "Giriş"
                )}
              </NavLink>


                <ul className="dropdown-menu user-dropdown" style={{backgroundColor:"#2c346c"}} aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="Profil">Profil</NavLink></li>
                  <li><NavLink className="dropdown-item" to="">Favorilerim</NavLink></li>
                  <li><NavLink className="dropdown-item" to="Destek">Destek</NavLink></li>
                </ul>
        
              
            </li>
            <li className="nav-item">
              <NavLink className="nav-link signup" to="Register">
                {Logincheck ? (
                  <svg
                    onClick={() => auth.signOut()}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-box-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                ) : (
                  "Kayıt Ol"
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
