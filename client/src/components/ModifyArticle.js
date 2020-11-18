import React, {useState, useEffect} from 'react';
import axios from "axios"
import styled from 'styled-components';

const URL = 'https://grim-blood-45082.herokuapp.com'

const ModifyArticle = (props) => {
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

    axios.put(`${URL}/articles/update/${props.match.params.id}`, articles)
        .then(res => setMessage(res.data))
        .catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        axios.get(`${URL}/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorname(res.data.authorname)
        ])
        .catch(err => console.log(err));
    }, []);

    return (
        <MainContainer className = "container">
            <h1>
                Edit Article <br/>    
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

export default ModifyArticle

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