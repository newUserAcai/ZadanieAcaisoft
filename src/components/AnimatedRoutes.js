import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CharList from "./CharList";
import Fav from "./Favourites";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { query } from "./../qql/query";
import AddFav from "./addFav";
import removeFav from "./removeFav";

function AnimatedRoutes() {
  const { data: { characters = [] } = {} } = useQuery(query);
  const [favChar, setFavChar] = useState([]);

  const saveCookie = (characters) => {
    localStorage.setItem("rick&morty-favChar", JSON.stringify(characters));
  };

  const addFavChar = (character) => {
    let filteredChar = favChar.filter(
      (favChar) => favChar.name !== character.name
    );
    const newFavList = [...filteredChar, character];
    setFavChar(newFavList);
    saveCookie(newFavList);
  };

  const removeFavChar = (character) => {
    const newFavList = favChar.filter((favChar) => favChar.id !== character.id);

    setFavChar(newFavList);
    saveCookie(newFavList);
  };

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem("rick&morty-favChar"));

    if (favList) {
      setFavChar(favList);
    }
  }, []);
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          element={
            <CharList
              characters={characters}
              favouriteComponent={AddFav}
              handleWishClick={addFavChar}
            />
          }
        />
        <Route
          exact
          path="/fav"
          element={
            <Fav
              characters={favChar}
              favouriteComponent={removeFav}
              handleWishClick={removeFavChar}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
