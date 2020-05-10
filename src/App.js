import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { getMovies, preUrl } from "./services/movies";

const App = () => {
  const [movies, setMovies] = useState([]);

  const chargeMovies = useCallback(async () => {
    const res = await getMovies();
    if (res && res.data && res.data.results) {
      console.log(res.data.results);
      setMovies(res.data.results);
    }
  }, []);

  useEffect(() => {
    chargeMovies();
  }, [chargeMovies]);

  const renderShowMovies = () =>
    movies.map((movie) => (
      <div key={movie.id}>
        <div style={{ fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>
          {" "}
          {movie.original_title}{" "}
        </div>
        <div>
          <img
            style={{ width: 400 }}
            src={preUrl + movie.poster_path}
            alt="imagenotworking"
          />
        </div>
        <div style={{ fontWeight: "bold", color: 'blue', marginTop: 20, marginBottom: 10 }}>
          {movie.overview}
        </div>
      </div>
    ));

  return <div className="App">{renderShowMovies()}</div>;
};

export default App;
