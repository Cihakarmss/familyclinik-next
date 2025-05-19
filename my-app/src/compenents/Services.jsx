import React from "react";

function Services(props) {
  const { title, image, description, button } = props;
  return (
    <div className="service-card">
      <div className="service-img">
        <img src={image} alt={title} />
      </div>
      <div className="service-content">
        <h2>
          <span>{title}</span>
        </h2>
        <div className="description">
          <p>{description}</p>
        </div>
        <button>{button}</button>
      </div>
    </div>
  );
}

export default Services;
