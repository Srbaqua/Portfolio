import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer text-white py-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Column 1: About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Saurabh</h5>
            <p className="small">
              Passionate developer building interactive web experiences.
              Always learning, always growing.
            </p>
          </div>

          {/* Column 2: Social Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Follow Me</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://github.com/Srbaqua"
                className="text-white social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/saurabh-chaudhary-ba083929b/"
                className="text-white social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:aquastudent2801@gmail.com"
                className="text-white social-icon"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Contact</h6>
            <p className="small mb-1">Email: 23bcs101@nith.ac.in</p>
            <p className="small">Location: Lucknow, India</p>
          </div>
        </div>
        <hr className="border-light" />
        <div className="text-center small mt-3">
          &copy; {year} Saurabh. Built with ❤️ and React.
        </div>
      </div>

    </footer>
  );
};
export default Footer;
