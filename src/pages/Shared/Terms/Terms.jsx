import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container className="mt-4 w-50 mx-auto">
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod debitis
        minima nam nisi. Animi delectus beatae recusandae dolorum nulla magnam
        iusto deserunt in autem excepturi possimus, quas commodi asperiores ut.
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
