import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link
                className="me-3 text-secondary text-decoration-none"
                to="/category/0"
              >
                Home
              </Link>
              <Link
                className="me-3 text-secondary text-decoration-none"
                to="/about"
              >
                About
              </Link>
              <Link
                className="me-3 text-secondary text-decoration-none"
                to="/career"
              >
                Career
              </Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle
                  className="me-2"
                  style={{ fontSize: "40px" }}
                ></FaUserCircle>
              )}

              {user ? (
                <Button variant="secondary">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
