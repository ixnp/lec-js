import React from "react";
import { Route, Switch } from "react-router-dom";
import BlogsList from "../Components/BlogsList";
import SavedBlogsList from "../Components/SavedBlogsList";

function BlogsContainer({ blogs, search }) {
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Switch>
      <Route path="/blogs/saved" component={SavedBlogsList} />
      <Route path="/" render={() => <BlogsList blogs={filteredBlogs} />} />
    </Switch>
  );
}

export default BlogsContainer;
