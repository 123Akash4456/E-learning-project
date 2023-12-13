import React, { useRef, useEffect, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./header.css";
import { AuthContext } from "./../../context/AuthContext";

const nav_links = [
  {
    path: "/home",
    dispay: "Home",
  },
  {
    path: "/about",
    dispay: "About",
  },
  {
    path: "/tours",
    dispay: "Tours",
  },
];
const Header = () => {
  const topbarRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  const stickyTopbarFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        topbarRef.current.classList.add("sticky_header");
      } else {
        topbarRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyTopbarFunc();

    return window.removeEventListener("scroll", stickyTopbarFunc);
  });
  return (
    <header className="header" ref={topbarRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* --logo-- */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/* --logo end-- */}
            {/* --menu start-- */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : ""
                      }
                    >
                      {item.dispay}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* --menu end-- */}
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary_btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary_btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>

              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
