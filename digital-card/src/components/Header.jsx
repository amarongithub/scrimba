import React from "react";
export default function Header() {
  return (
    <div className="header">
      <img
        className="header--image"
        src="/src/assets/hero.png"
        alt="Hero Image"
      />
      <h1 className="header--title">Laura Smith</h1>
      <p className="header--designation">Frontend Developer</p>
    </div>
  );
}
