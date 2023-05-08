import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h4 className="mt-5">All Category</h4>
      <div className="ps-4 my-3">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-black"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <div className="mt-4">
        <Row xs={1} md={1} lg={1} className="g-4">
          <Col>
            <Card className="p-3 h-100">
              <Card.Img variant="top" src={first} />
              <Card.Body className="p-0 mt-3">
                <Card.Title>
                  Breaking News: Uncovering the Stories That Matter
                </Card.Title>
                <Card.Text>
                  This title emphasizes the importance of breaking news stories
                  and suggests that the website is dedicated to delivering
                  up-to-the-minute coverage of important events.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-3 h-100">
              <Card.Img variant="top" src={second} />
              <Card.Body className="p-0 mt-3">
                <Card.Title>The Buzz: Trending News and Hot Takes</Card.Title>
                <Card.Text>
                  This title positions the website as a hub for trending news
                  and viral content, with a focus on providing a fresh
                  perspective and engaging analysis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="p-3 h-100">
              <Card.Img variant="top" src={third} />
              <Card.Body className="p-0 mt-3">
                <Card.Title>The Watchdog: Holding Power to Account</Card.Title>
                <Card.Text>
                  This title suggests that the website is committed to
                  investigative journalism and keeping those in power
                  accountable for their actions, making it a go-to source for
                  hard-hitting news and exposes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LeftNav;
