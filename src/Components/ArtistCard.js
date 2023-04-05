import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "../ArtistCard.css";
import { NavLink } from "react-router-dom";

const ArtistCard = (props) => {
  const bandName = props.name;
  const bandPic = props.profilePicture;
  const isTouring = props.touring;
  const bandId = props.id;

  return (
    <NavLink to={"artist/" + bandId}>
      <Card className="bg-dark text-white artistCard" style={{ width: "auto" }}>
        <Card.Img src={bandPic} alt="Artist Picture" />
        <Card.ImgOverlay>
          <Card.Title className="bandName">{bandName}</Card.Title>
          {isTouring ? (
            <Card.Footer className="isTouring">Upcoming Shows</Card.Footer>
          ) : null}
        </Card.ImgOverlay>
      </Card>
    </NavLink>
  );
};

export default ArtistCard;
