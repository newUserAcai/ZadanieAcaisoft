import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Navigation() {
  return (
    <>
      <div className="nav">
        <Button
          className="spacebtn"
          variant="contained"
          size="medium"
          component={Link}
          to="/"
        >
          Character List
        </Button>

        <Button variant="contained" size="medium" component={Link} to="/fav">
          Favourites List
        </Button>
      </div>
    </>
  );
}

export default Navigation;
