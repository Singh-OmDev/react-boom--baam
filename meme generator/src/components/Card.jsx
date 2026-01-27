import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MemeCard = ({ img, title }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    const encodedUrl = encodeURIComponent(img); 
    navigate(`/edit?url=${encodedUrl}`);
  };

  return (
    <Card style={{ width: "18rem", margin: "25px" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button onClick={handleEdit} variant="primary">
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
