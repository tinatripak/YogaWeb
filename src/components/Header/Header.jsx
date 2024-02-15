import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 960 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
  };

  return (
    <header
      className={`${classes.header} ${
        scrollPosition > 0 ? classes.scrolled : ""
      }`}
    >
      <div className={classes.content}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className={`${classes.logo}  ${
            scrollPosition > 0 ? classes.scrolled : ""
          }`}
        >
          Namaste
        </Link>
        <nav
          className={`${classes.nav} ${
            menuOpen && size.width < 960 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                onClick={menuToggleHandler}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="plan"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                onClick={menuToggleHandler}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                to="video"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                onClick={menuToggleHandler}
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                onClick={menuToggleHandler}
              >
                Contacts
              </Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>Book a Class</button>
        </nav>
        <div className={classes.toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
