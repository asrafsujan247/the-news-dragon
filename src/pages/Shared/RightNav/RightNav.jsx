import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-5 mb-3">Login With</h4>
      <Button className="mb-2 w-100" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button className="w-100" variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4 className="mt-4 mb-2">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="text-primary" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="text-info" /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="text-danger" /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="position-relative">
        <img className="w-100" src={bg} alt="" />
        <div className="text-center position-absolute text-white top-50 start-50 translate-middle">
          <h2 className="mb-3 fw-bold">Create an Amazing Newspaper</h2>
          <p className="mb-4">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button className="fw-semibold px-3 py-2 fs-5" variant="danger">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
