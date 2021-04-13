import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import BlogsContainer from "./Containers/BlogsContainer";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";

function App() {
  const [blogs, updateBlogs] = useState([]);
  const [search, updateSearch] = useState("");

  useEffect(async () => {
    const resp = await fetch("http://localhost:5000/blogs");
    const payload = await resp.json();
    updateBlogs(payload);
  }, []);

  const handleSearch = (e) => {
    updateSearch(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Route
        path="/"
        render={() => (
          <>
            <SearchBar handleSearch={handleSearch} />
            <BlogsContainer blogs={blogs} search={search} />
          </>
        )}
      />
    </>
  );
}

export default App;
