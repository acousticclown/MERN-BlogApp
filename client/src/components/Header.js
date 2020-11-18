import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const Header = () => {
    return (
        <MainContainer>
            <div>
                <ul className = "nav">
                    <li>
                        <Link className="white" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="white" to="/add-article">
                            Add Article
                        </Link>
                    </li>
                </ul>
            </div>
        </MainContainer>
    )
}

export default Header

const MainContainer = styled.div`

    .nav{
        height: 5rem;
        background: darkgreen;
        list-style: none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .nav li{
        color: cornsilk;
        margin: .5rem 2rem;
    }

    .white{
        color: white;
    }
    .white:hover{
        color: rgb(255, 212, 119);
    }

`;
