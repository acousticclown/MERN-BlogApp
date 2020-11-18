import Axios from 'axios';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

const URL = 'https://grim-blood-45082.herokuapp.com'

const Article = (props) => {

    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorname] = useState("");

    useEffect(() => {
        axios.get(URL + `/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorname(res.data.authorname)
        ])
        .catch(err => console.log(err));
    }, [props]);

    return (
        <MainContainer className = "card">
                <div className = "card-body">  
                    <h2 className = "card-title">{title}</h2>
                    
                    <p className = "card-text">{article}</p>
                    <span>{authorname}</span>
                    <br/>
                    <Link to="/" type="submit" class="btn btn-primary">Back To Home</Link>
                </div>
            </MainContainer>
    )
}

export default Article

const MainContainer = styled.div`

.card {
    width: 60%;
    margin-left: 18rem;
    margin-top: 3rem;
  }
.card-body{
      background: rgb(0, 0, 0);
      color: rgb(182, 177, 156);
  }

.btn-primary{
    background: darkgreen;
    margin-top: 2rem;
}  

`;