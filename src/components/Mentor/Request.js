import React from 'react';
import styled from 'styled-components';

const Request = ({picture, date, job, name, button, type}) => {
  return (
    <RequestStyle>
        <div className='image-sec'>
            <img src={picture} alt="man" />
            <p className='select'>{type}</p>
        </div>
        <div className='info'>
            <h3>{name}</h3>
            <p>{job}</p>
            <p className='date'>{date}</p>
            <button>{button}</button>
        </div>
    </RequestStyle>
  )
}

const RequestStyle = styled.div`
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
    .select{
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        border:none;
        padding: .8rem 1rem;
        font-size:1.5rem;
        cursor:pointer;
        display:block;
        margin:1.5rem 0;
    }
}
.info{
    font-size:1.5rem;
    width:50%;
    h3, p{
        margin:.5rem 0;
    }
    button{
        background: #0950CD;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border:none;
        color:#FFF;
        padding: 1rem 2.8rem;
        font-size:1.5rem;
        cursor:pointer;
        margin: 1.5rem 0;
    }
    .date{
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        border:none;
        padding: 1rem 2rem;
        font-size:1.5rem;
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
        .select{
            font-size:.8rem;
            width:100%;
        }
    }
    p{
        font-size:1rem;
    }
    .info{
        .date{
            font-size:.8rem;
            padding:.5rem;
            width:fit-content;
        }
        h3, button{
            font-size:1rem;
        }
        button{
            padding:1rem .5rem;
        }
    }
}

`
export default Request