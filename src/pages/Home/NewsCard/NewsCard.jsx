import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p className="mb-0">
            <small>{moment(author?.published_date).format("yyyy-MM-D")}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark className="me-2"></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating?.number}
            readonly
            emptySymbol={
              <FaRegStar className="text-warning fs-5 me-1"></FaRegStar>
            }
            placeholderSymbol={
              <FaStar className="text-warning fs-5 me-1"></FaStar>
            }
            fullSymbol={<FaStar className="text-warning fs-5 me-1"></FaStar>}
          />
          <span className="ms-1">{rating?.number}</span>
        </div>
        <div>
          <FaEye className="fs-5"></FaEye>
          <span className="ms-2">{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
