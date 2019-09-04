import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Blog from "./components/Blog";
import List from "./components/List";
import "./css/App.css";

function App() {
  const [posts, updatePosts] = useState([]);
  const [selectedPost, updateSelectedPost] = useState({});
  const [author, updateAuthor] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api/collections/get/Post?token=79e0270984c18ff8447814563d5a1f"
      )
      .then(response => {
        console.log(response);
        updatePosts(response.data.entries);
      });
  }, []);

  function getArticle(id) {
    console.log(id);
    axios
      .get(
        `http://localhost:8080/api/collections/get/Post?token=79e0270984c18ff8447814563d5a1f&filter[_id]=${id}`
      )
      .then(response => {
        console.log(response);
        updateSelectedPost(response);
      });
  }

  function getAuthor(id) {
    axios
      .get(
        "http://localhost:8080/api/collections/get/Author?token=79e0270984c18ff8447814563d5a1f"
      )
      .then(response => {
        console.log(response);
        updateAuthor(response);
      });
  }

  return (
    <Router>
      <div className="App">
        <header className="App__header">{}</header>
        <main className="App__main">
          <Route
            exact
            path="/"
            render={() => <Home posts={posts} getArticle={getArticle} />}
          />
          {selectedPost.data ? (
            <Route
              path="/blog/:id"
              render={() => <Blog selectedPost={selectedPost} />}
            />
          ) : null}
          <Route path="/list" component={List} />
        </main>
        <footer className="App__footer">{}</footer>
      </div>
    </Router>
  );
}

export default App;
