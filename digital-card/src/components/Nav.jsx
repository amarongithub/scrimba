import React from "react";

export default function Nav() {
  return (
    <div className="nav">
      <a
        className="nav--website"
        href="https://laurasmith.website"
        target="_blank"
        rel="noreferrer"
      >
        laurasmith.website
      </a>
      <div className="buttons">
        <button className="nav--button nav--mail">
          <i className="fa-solid fa-envelope"></i>Email
        </button>
        <button className="nav--button nav--linkdin">
          <i className="fa-brands fa-linkedin"></i>Linkdin
        </button>
      </div>
    </div>
  );
}
