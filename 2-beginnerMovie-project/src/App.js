import React, { useEffect, useState, useCallback } from "react";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://fir-frontend-7cedc-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) throw new Error("sometime went wrong");

      const data = await response.json();

      const movieslist = [];

      for (let key in data) {
        movieslist.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
        setMovies(movieslist);
      }

      console.log(data);
      setIsLoading(false);
    } catch (err) {
      setError("not found some error");
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  let content;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  function addMovieToFirebase() {
    fetchMovies();
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie addMovieSubmit={addMovieToFirebase} />
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
