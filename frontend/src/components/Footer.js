// Footer.js

import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#ecbca4",
        color: "#000",
        padding: "20px",
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <div>
        <h2>Follow Us</h2>
        <div>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={30}
              style={{ margin: "0 10px", color: "#3b5998" }}
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={30}
              style={{ margin: "0 10px", color: "#c13584" }}
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube
              size={30}
              style={{ margin: "0 10px", color: "#cd201f" }}
            />
          </a>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2>Contact Us</h2>
        <p>Email: info@foodie.com</p>
        <p>Phone: +91 95374 75864</p>
      </div>
    </footer>
  );
};

export default Footer;
