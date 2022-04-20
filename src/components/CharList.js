import React from "react";
import { useQuery } from "@apollo/client";
import { query } from "../qql/query";
import CharCard from "./CharCard";
import "./../style/CharList.css";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";

const CharList = ({ characters, favouriteComponent, handleWishClick }) => {
  const { loading, error } = useQuery(query);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="app-container">
          <div className="all-container">
            {loading ? (
              <CircularProgress />
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <CharCard
                key={characters.id}
                character={characters}
                favouriteComponent={favouriteComponent}
                handleWishClick={handleWishClick}
              />
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default CharList;
