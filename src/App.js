import React, { useState } from "react";
import icon from "./logo.svg";
import "./App.css";
import axios from "axios";
// import item from "./components/item";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import searchbutton from "./components/search";

function App() {
  const [photo, setPhoto] = useState("");
  const [clientId, SetClientId] = useState(
    "qO9EkoChdXkbwxA-zwrN5-wvMVq5ULgp3tXLVS4YKTg"
  );
  const [results, setResults] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  function handleSubmit() {
    console.log(photo);
  }

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    photo +
    "&client_id=" +
    clientId +
    " ";

  axios.get(url).then((response) => {
    // console.log(response);
    setResults(response.data.results);
  });

  return (
    <div className="App">
      {/* <searchbutton /> */}
      <div className="search-bar">
        <input
          type="text"
          className="input"
          onChange={handleChange}
          name="photo"
          placeholder="search for images here"
        />

        <div className="search-btn">
          <button
            type="submit"
            onClick={handleSubmit}
            className="search-button"
          >
            <i className="fa fa-search" aria-hidden="true"></i>
            <icon />
          </button>
        </div>
      </div>
      <div>
        {results.map((photo) => (
          <div className="col-12 col-md-4">
            <img src={photo.urls.small} alt="image" />
          </div>
        ))}
      </div>
      {/* <item photos={photo} /> */}
    </div>
  );
}

export default App;
