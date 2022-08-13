import React from "react";
import "../App.css";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="movie-poster">
          <img src={movie.Poster} alt="movie" />
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
