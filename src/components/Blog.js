import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

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
      <ReactMarkdown className='Blog__post' source={post.Post} />
    </div>
  );
}

export default Blog;
