import React from "react";
import FavoriteCard from "../Card/FavoriteCard";

import FavoriteSalonCard from "../Card/FavoriteSalonCard";

const Favourite = ({ type }) => {
  return (
    <div>{type === "salon" ? <FavoriteSalonCard /> : <FavoriteCard />}</div>
  );
};

export default Favourite;
