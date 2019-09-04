import React, { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Blog from './components/Blog';
import List from './components/List';
import './css/App.css';

function App() {
  const [posts, updatePosts] = useState([]);
  const [selectedPost, updateSelectedPost] = useState({});
  const [authors, updateAuthors] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://cockpit-mandatory-cms1.devspace.host/api/collections/get/Article?token=42222d25d287392adc01146049c75b'
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
        `https://cockpit-mandatory-cms1.devspace.host/api/collections/get/Article?token=42222d25d287392adc01146049c75b&filter[_id]=${id}`
      )
      .then(response => {
        console.log(response);
        updateSelectedPost(response);
      });
  }

  function getAuthors(id) {
    axios
      .get(
        'https://cockpit-mandatory-cms1.devspace.host/api/collections/get/Author?token=42222d25d287392adc01146049c75b'
      )
      .then(response => {
        console.log('fafsa');
        console.log(response);
        updateAuthors(response);
      });
  }

  return (
    <Router>
      <div className='App'>
        <header className='App__header'>
          <Link to='/'>Home</Link>
          <Link to='/authors' onClick={_ => getAuthors()}>
            Authors
          </Link>
        </header>
        <main className='App__main'>
          <Route
            exact
            path='/'
            render={() => <Home posts={posts} getArticle={getArticle} />}
          />
          {selectedPost.data ? (
            <Route
              path='/blog/:id'
              render={() => <Blog selectedPost={selectedPost} />}
            />
          ) : null}
          {authors.data ? (
            <Route path='/authors' render={() => <List authors={authors} />} />
          ) : null}
        </main>
        <footer className='App__footer'>{}</footer>
      </div>
    </Router>
  );
}

export default App;
