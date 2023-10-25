import React from "react";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="container">
      <div className="container--card">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
