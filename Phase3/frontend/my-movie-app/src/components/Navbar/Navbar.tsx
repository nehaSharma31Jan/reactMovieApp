import React, { useContext } from "react";
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import "../../css/sidebarStyle.css";
import { useEffect } from "react";

const Navbar: React.FC = () => {
  const { user, logout, enteredUser, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [count, setCount] = useState<boolean>();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    if (isAuthenticated) {
      setCount(true)
 
  }}, [isAuthenticated, navigate]);

  const [sidebar, setSidebar] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    user ? setCount(true) : <h1></h1>
    
    
  };



  return (
    <React.Fragment>
      {" "}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="btn" onClick={handleShow}>
            <i className="fa fa-bars"></i>
            Side Bar
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
            data-bs-scroll="true"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {count ? (
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <div className="l-navbar" id="nav-bar">
                  <nav className="nav">
                    <div>
                      {" "}
                      <a href="#" className="nav_logo">
                        {" "}
                        <i className="bx bx-layer nav_logo-icon"></i>{" "}
                        <span className="nav_logo-name">Welcome!</span>{" "}
                      </a>
                      <div className="nav_list">
                        {" "}
                        <a href="create" className="nav_link active">
                          {" "}
                          <i className="bx bx-grid-alt nav_icon"></i>{" "}
                          <span className="nav_name">Create Movies</span>{" "}
                        </a>{" "}
                        <a href="update" className="nav_link">
                          {" "}
                          <i className="bx bx-user nav_icon"></i>{" "}
                          <span className="nav_name">Update Movies</span>{" "}
                        </a>{" "}
                        <a href="delete" className="nav_link">
                          {" "}
                          <i className="bx bx-message-square-detail nav_icon"></i>{" "}
                          <span className="nav_name">Delete Movies</span>{" "}
                        </a>{" "}
                        <a href="/" className="nav_link">
                          {" "}
                          <i className="bx bx-bookmark nav_icon"></i>{" "}
                          <span className="nav_name">All Movies</span>{" "}
                        </a>{" "}
                      </div>
                    </div>
                  </nav>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          ) : (
            <h1></h1>
          )}


          <BootstrapNavbar.Brand href="#home" id="myMovie">My Movie</BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
            </Nav>
            {user ?  
              <NavDropdown title={user.email} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
      
      
      :  <Nav.Link href="home">Back to the Dashboard</Nav.Link>
          }
              </BootstrapNavbar.Collapse>
         

       
   
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
