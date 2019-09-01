import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import uuidv1 from "uuid/v1";
import "../css/Home.css";

function listPosts(post) {
  return (
    <li key={uuidv1()} className="Home__list__post">
      <h3 className="Home__list__post__title">{post.Title}</h3>
      <p className="Home__list__post__auther">{post.Auther}</p>
      <p className="Home__list__post__date">{post.Date}</p>
      {/*<p className="Home__list__post__text">{post.Post}</p>*/}
    </li>
  );
}

function Home() {
  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/collections/get/Post")
      .then(response => {
        console.log(response);
        updatePosts(response.data.entries);
      });
  }, []);

  return (
    <div className="Home">
      <ul className="Home__list">
        {posts.length > 0 ? posts.map(i => listPosts(i)) : null}
      </ul>
    </div>
  );
}

export default Home;
