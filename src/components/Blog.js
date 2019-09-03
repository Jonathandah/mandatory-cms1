import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function Blog(props) {
  const post = props.selectedPost.data.entries[0];

  return (
    <div className='Blog'>
      <h2 className='Blog__title'>{post.Title}</h2>
      <h3 className='Blog__date'>{post.Date}</h3>
      <ul className='Blog__list'>
        {post.Author.map(i => {
          return (
            <li key={i._id} className='Blog__list__author'>
              {i.link}
            </li>
          );
        })}
      </ul>
      <p className='Blog__post'>{post.Post}</p>
    </div>
  );
}

export default Blog;
