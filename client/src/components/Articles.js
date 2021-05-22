import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const URL = "https://shivanshblog.herokuapp.com";

const Articles = ({ posts }) => {
  const [article, setArticle] = useState([]);
  //delete Article BY ID
  const deleteArticle = (id) => {
    axios.delete(URL + `/articles/${id}`).then((res) => alert(res.data));
    setArticle(article.filter((elem) => elem._id !== id));
  };
  return (
    <MainConatainer>
      {posts.map((article, key) => (
        <div className="card">
          <div className="card-body">
            <Link
              className="red"
              to={{
                pathname: `/article/${article._id}`,
              }}
            >
              <h2 className="card-title">{article.title}</h2>
            </Link>
            <p className="card-text">{article.article}</p>
            <span>{article.authorname}</span>
          </div>
          <div className="row align-items-center my-2 mx-1">
            <div className="col-sm-2">
              <Link
                to={`/update/${article._id}`}
                className="btn btn-outline-success"
              >
                Edit Article
              </Link>
            </div>
            <div className="col-sm-3">
              <button
                onClick={() => {
                  deleteArticle(article._id);
                }}
                className="btn btn-outline-danger"
              >
                Delete Article
              </button>
            </div>
          </div>
        </div>
      ))}
    </MainConatainer>
  );
};

export default Articles;

const MainConatainer = styled.div`
  .card {
    width: 60%;
    margin-left: 18rem;
    margin-top: 3rem;
  }
  .card-body {
    background: darkgreen;
    color: rgb(182, 177, 156);
  }

  .red {
    color: pink;
  }
`;
