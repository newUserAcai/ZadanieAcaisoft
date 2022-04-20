import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function CharCard({ character, favouriteComponent, handleWishClick }) {
  const FavouriteComponent = favouriteComponent;
  return (
    <>
      {character &&
        character.results.map((character, index) => (
          <div key={index} className="thumb-container">
            <Card sx={{ minWidth: 160 }}>
              <CardMedia
                component="img"
                height="300"
                image={character.image}
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {character.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component={"span"}
                >
                  <p> Gender: {character.gender}</p>
                  <p> Species: {character.species}</p>
                </Typography>
              </CardContent>
              <div
                className="overlay"
                style={{ justifyContent: "center", width: "100%" }}
                onClick={() => handleWishClick(character)}
              >
                <FavouriteComponent />
              </div>
            </Card>
          </div>
        ))}
    </>
  );
}
export default CharCard;
