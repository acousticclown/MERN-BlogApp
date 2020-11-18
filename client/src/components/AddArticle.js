import React, {useState, useEffect} from 'react';
import axios from "axios"
import styled from 'styled-components';

const URL = 'https://grim-blood-45082.herokuapp.com'

const AddArticle = () => {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorname] = useState("");
    const [message, setMessage] = useState("");

    const changeOnClick = e => {
        e.preventDefault();

        const articles = {
            title,
            article,
            authorname
        };

        setArticle("");
        setAuthorname("");
        setTitle("");

    axios.post(URL + "/articles/add", articles)
        .then(res => setMessage(res.data))
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <MainContainer className = "container">
            <h1>
                Create Article <br/>    
            <span className = "message">{message}</span>
            </h1>
            <form onSubmit={changeOnClick} encType ="multipart/form-data">
            <div class="form-group">
                <label htmlFor="title">Title</label>
                <input
                 type="text" 
                 value={title}
                 class="form-control" 
                 placeholder="Article Title"
                 onChange ={e => setTitle(e.target.value)} />
            </div>
            <div class="form-group">
                <label htmlFor="authorname">Author</label>
                <input 
                type="text" 
                value={authorname}
                class="form-control" 
                placeholder="Article Author"
                onChange ={e => setAuthorname(e.target.value)} />
            </div>
            <div class="form-group">
                <label htmlFor="article">Article</label>
                <textarea 
                value={article}
                class="form-control" 
                rows="3"
                onChange ={e => setArticle(e.target.value)} >    
                </textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </MainContainer>
    )
}

export default AddArticle

const MainContainer = styled.div`
    h1 span{
        font-size: 1rem;
        font-weight: 700;
        color: green;
        padding: 1rem;
    }
    form{
        margin: 3rem auto;
        padding: 4rem;
        width: 31.25rem;
    }
    h1{
        text-align: center;
        margin-top: 2rem;
        margin-bottom: -5rem;
        font-weight: 900;
        color: darkgreen;
    }
    
    .btn-primary{
        background: darkgreen;
    }
    
    .btn-primary:hover{
        background: rgb(0, 201, 0);
    }
`;