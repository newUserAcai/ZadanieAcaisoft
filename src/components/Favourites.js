import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const Fav = ({ characters, favouriteComponent, handleWishClick }) => {
  const favList = JSON.parse(localStorage.getItem("rick&morty-favChar"));
  const FavouriteComponent = favouriteComponent;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="app-container">
          <div className="all-container">
            {favList.map((character, index) => (
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
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Fav;
