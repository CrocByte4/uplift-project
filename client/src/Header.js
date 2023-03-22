import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <img src={require("./assets/Upliftv1.png")} className="Logo" alt="logo" />
      <nav className="Nav">
        <a href="/">Homepage</a>
        <a href="/">Logger</a>
        <a href="/">Personalisation</a>
      </nav>
    </header>
  );
}
