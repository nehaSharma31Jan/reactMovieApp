import React from "react";
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";

const WelcomeNavbar = () =>  {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      logout();
      navigate('/login');
    };
  

  
  
  
    
  
    return (
  
      <React.Fragment>   <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
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
     
  
       
      
        <BootstrapNavbar.Brand href="#home">My Movie</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
          
            
            
          </Nav>
          
        </BootstrapNavbar.Collapse>
      </div>
    </nav>
  
    </React.Fragment>
   
  
    
    
  
      // <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
      // <div classNameName="container-fluid">
      //   <BootstrapNavbar.Brand href="#home">My Movie App</BootstrapNavbar.Brand>
      //   <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      //   <BootstrapNavbar.Collapse id="basic-navbar-nav">
      //     <Nav classNameName="mr-auto">
      //       <Nav.Link href="#home">Home</Nav.Link>
      //       <Nav.Link href="#movies">Movies</Nav.Link>
            
            
      //     </Nav>
      //     {user ? (
      //       <NavDropdown title={user.email} id="basic-nav-dropdown">
      //         <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
      //       </NavDropdown>
      //     ) : (
      //       <Nav.Link href="#login">Login</Nav.Link>
      //     )}
      //   </BootstrapNavbar.Collapse>
      //   </div>
      //   </nav>
   
    );
  };
  

export default WelcomeNavbar;