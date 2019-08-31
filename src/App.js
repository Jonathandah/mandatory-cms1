import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import List from "./components/List";
import "./css/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App__header">{}</header>
        <main className="App__main">
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/list" component={List} />
        </main>
        <footer className="App__footer">{}</footer>
      </div>
    </Router>
  );
}

export default App;
