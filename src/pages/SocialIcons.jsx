import React from "react";
import { FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./page.css";

const Socialicons = () => {
  const socialLinks = {
    facebook: "https://www.facebook.com",
    whatsapp: "https://wa.me/",
    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com",
  };

  return (
    <div style={styles.container} className="Iconcontainer">
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.icon}
      >
        <FaFacebook size={40} color="red" />
      </a>
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.icon}
      >
        <FaWhatsapp size={40} color="red" />
      </a>
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.icon}
      >
        <FaTwitter size={40} color="red" />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.icon}
      >
        <FaLinkedin size={40} color="red" />
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "25px",
  },
  icon: {
    color: "#000",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  iconHover: {
    color: "darkred",
  },
};

export default Socialicons;
