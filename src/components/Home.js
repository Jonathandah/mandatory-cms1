import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import uuidv1 from 'uuid/v1';
import '../css/Home.css';

function listPosts(post, getArticle) {
  return (
    <li key={uuidv1()} className='Home__list__post'>
      <h3 className='Home__list__post__title'>{post.Title}</h3>
      <ul className='Home__list__post__authors'>
        {post.Author.map(i => {
          return (
            <li key={i._id} className='Home__list__post__authors__item'>
              {i.display}
            </li>
          );
        })}
      </ul>
      <p className='Home__list__post__date'>{post.Date}</p>
      {/*<p className="Home__list__post__text">{post.Post}</p>*/}

      <Link to={`/blog/${post.Title}`} onClick={_ => getArticle(post._id)}>
        Read more
      </Link>
    </li>
  );
}

function Home(props) {
  const posts = props.posts;
  const getArticle = props.getArticle;
  const getArticles = props.getArticles;
  const updatePage = props.updatePage;
  const page = props.page;

  function pagiantion(page, updatePage, e) {
    let number = page;

    if (e.target.textContent === 'next') {
      number++;
      updatePage(number);
      let skip = 5 * number;
      return skip;
    } else {
      number--;
      updatePage(number);
      let skip = 5 * number;
      return skip;
    }
  }

  return (
    <div className='Home'>
      <ul className='Home__list'>
        {posts.length > 0 ? posts.map(i => listPosts(i, getArticle)) : null}
      </ul>
      <span className='Home__pageContainer'>
        <button
          className='Home__pageContainer__button'
          onClick={e => {
            getArticles(pagiantion(page, updatePage, e));
          }}
        >
          previous
        </button>
        <p className='Home__pageContainer__indicator'>{page}</p>
        <button
          className='Home__pageContainer__button'
          onClick={e => {
            getArticles(pagiantion(page, updatePage, e));
          }}
        >
          next
        </button>
      </span>
    </div>
  );
}

export default Home;
