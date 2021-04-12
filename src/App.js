import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import BlogsContainer from "./Containers/BlogsContainer";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";


class App extends React.Component {
  state = { allBlogs: [], blogs: [] };

  async componentDidMount() {
    const resp = await fetch("http://localhost:5000/blogs");
    const payload = await resp.json();
    this.setState({ blogs: payload, allBlogs: payload });
  }

  searchFilter = (e) => {
    const filteredBlogs = this.state.allBlogs.filter((blog) => {
      let title = blog.title.toLowerCase();
      return title.includes(e.target.value);
    });
    this.setState({ blogs: filteredBlogs });
  };

  render() {
    return (
      <>
        <Navbar />
        <Route
          path="/"
          render={() => (
            <>
            <SearchBar searchFilter={this.searchFilter}/>
            <BlogsContainer
              blogs={this.state.blogs}
            />
            </>
          )}
        />
      </>
    );
  }
}

export default App;
