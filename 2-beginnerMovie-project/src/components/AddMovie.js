import React, { useRef } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  async function addMovieToFirebse(movie) {
    const response = await fetch(
      "https://fir-frontend-7cedc-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.ok);
    if (response.ok) props.addMovieSubmit();
  }

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };
    addMovieToFirebse(movie);

    titleRef.current.value = "";
    openingTextRef.current.value = "";
    releaseDateRef.current.value = "";
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" required ref={releaseDateRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows="5"
          id="opening-text"
          required
          ref={openingTextRef}
        ></textarea>
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
