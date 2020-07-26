import React from "react";
// import axios from "axios";
function search() {
  return (
    <div className="search-button">
      <h1>unsplash search button</h1>
      <input type="text" name="photo" placeholder="search for images here" />
      <button type="submit">search</button>
    </div>
  );
}
export default search;
