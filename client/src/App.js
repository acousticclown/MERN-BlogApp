import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Article from "./components/Article";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AddArticle from "./components/AddArticle";
import ModifyArticle from "./components/ModifyArticle";

const URL = "https://shivanshblog.herokuapp.com";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(URL + "/articles")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="App">
      <Header />
      <Route exact path="/" render={() => <Articles posts={posts} />} />
      <Route
        path="/article/:id"
        render={(props) => <Article {...props} posts={posts} />}
      />
      <Route
        path="/update/:id"
        render={(props) => <ModifyArticle {...props} posts={posts} />}
      />
      <Route path="/add-article" component={AddArticle} />
    </div>
  );
}

export default App;
