import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import uuidv1 from "uuid/v1";
import "../css/Home.css";

function listPosts(post, getArticle) {
  return (
    <li key={uuidv1()} className="Home__list__post">
      <h3 className="Home__list__post__title">{post.Title}</h3>
      <p className="Home__list__post__auther">{post.Auther}</p>
      <p className="Home__list__post__date">{post.Date}</p>
      {/*<p className="Home__list__post__text">{post.Post}</p>*/}

      <Link to={"/blog/" + post.Title} onClick={_ => getArticle(post._id)}>
        Read more
      </Link>
    </li>
  );
}

function Home(props) {
  const posts = props.posts;
  const getArticle = props.getArticle;
  const [page, updatePage] = useState(1);

  return (
    <div className="Home">
      <ul className="Home__list">
        {posts.length > 0 ? posts.map(i => listPosts(i, getArticle)) : null}
      </ul>
      <span>
        <p>{page}</p>
      </span>
    </div>
  );
}

export default Home;
