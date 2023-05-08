import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";

const EditorsInsights = () => {
  return (
    <div>
      <h3 className="my-4">Editors Insight</h3>
      <Row xs={1} md={2} lg={3} className="g-4">
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
                This title positions the website as a hub for trending news and
                viral content, with a focus on providing a fresh perspective and
                engaging analysis.
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
                investigative journalism and keeping those in power accountable
                for their actions, making it a go-to source for hard-hitting
                news and exposes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorsInsights;
