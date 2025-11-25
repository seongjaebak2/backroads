import { useEffect, useRef, useState } from "react";
import { pageLinks, socialLinks } from "../data";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setShowLinks(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = isMobile
    ? { height: showLinks ? `${linksRef.current.scrollHeight}px` : "0px" }
    : {};

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="/images/logo.svg" className="nav-logo" alt="backroads" />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={toggleLinks}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div
          className="nav-links"
          style={
            isMobile
              ? {
                  height: showLinks
                    ? `${linksRef.current.scrollHeight}px`
                    : "0px",
                }
              : undefined
          }
        >
          <ul ref={linksRef}>
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} target="_blank" className="nav-icon">
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
