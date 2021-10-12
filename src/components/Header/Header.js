import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import header from "../../images/header.png";
import logo from "../../images/icons/logo.png";
import UseAuth from "../Login/useFirebase/UseAuth";

const Header = () => {
  const {user, logOut} = UseAuth();
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`,
      }}
      className="header"
    >
      <nav className="nav">
        <ul>
          <li>
            <img className="logo" src={logo} alt="" />
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link className="btn-book" to="/book">
              Book
            </Link>
          </li>
          {user.email ? (
            <button className="button-Logout rounded ms-5" onClick={logOut}>Log Out</button>
          ) : (
            <li>
              <Link className="btn-book" to="/login">
                Login
              </Link>
            </li>
          )}
          <li>
              <Link className="btn-book" to="/register">
                Register
              </Link>
            </li>
        </ul>
      </nav>
      <div className="title-container">
        <h1>Burj Al Arab</h1>
        <h2>A global icon of Arabian luxury</h2>
      </div>
    </div>
  );
};

export default Header;
