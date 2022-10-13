import React from 'react';
import styled from 'styled-components';

const Session = ({type, picture, date, job, name, button, btncol}) => {
  return (
    <SessionStyle btncol={btncol}>
        <div className='image-sec'>
            <img src={picture} alt="man" />
            <p>{type}</p>
        </div>
        <div className='info'>
            <h3>{name}</h3>
            <p>{job}</p>
            <p>{date}</p>
            <button>{button}</button>
        </div>
    </SessionStyle>
  )
}

const SessionStyle = styled.div`
display:flex;
border-radius: 20px;
padding:2rem;
margin: 0 1rem;
gap:1rem;
.image-sec{
    img{
        width:100%;
        height:150px;
    }
    p{
        text-align:center;
        font-size:1.5rem;
        color:#666565;
    }
}
.info{
    font-size:1.5rem;
    h3, p{
        margin:.5rem 0;
    }
    button{
        background:${({btncol})=> btncol};
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border:none;
        color:#FFF;
        padding: 1rem 2rem;
        font-size:1.5rem;
        margin:2rem 0;
        cursor:pointer;
    }
}
@media screen and (min-width: 1200px){
    width:48%;
}
@media screen and (max-width: 680px){
    border:1px solid #0950CD;
    margin:.5rem 0;
    padding:1rem;
    .image-sec{
        p{
            font-size:1rem;
        }
    }
    p{
        font-size:1rem;
    }
    .info{
        h3, button{
            font-size:1rem;
        }
        button{
            padding:1rem;
        }
    }
}
`
export default Session