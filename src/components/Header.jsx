import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header">
      <img src={logo} className="header--img" />
      <p className="header--text">my travel journal.</p>
    </nav>
  );
}
