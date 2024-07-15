import React from "react";
import { Card } from "react-bootstrap";

const NewsCard = ({ cardData }) => {
  return (
    <Card className="resource-card shadow-none p-0 border-0 overflow-hidden rounded-2">
      <img
        src={`https://api.zalimburgers.com/${cardData.image}`}
        alt={cardData.title}
        class="card-img-top rounded-2"
      />

      <div
        class="card-body"
        style={{
          background: "rgba(250, 250, 250, 1)",
        }}
      >
        <h2 class="card-title fs-4 pb-2">{cardData.title}</h2>
        <a href="/news" class="btn btn-primary">
          View More
        </a>
      </div>
    </Card>
  );
};

export default NewsCard;
