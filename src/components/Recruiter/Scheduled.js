import React from 'react';
import styled from 'styled-components';
import Braman from '../../assets/images/braman.png';

const Scheduled = ({type, picture, date, job, name, button}) => {
  return (
    <ScheduledStyle>
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
    </ScheduledStyle>
  )
}

const ScheduledStyle = styled.div`
width:48%;
display:flex;
border: 1px solid #0950CD;
border-radius: 20px;
padding:2rem;
margin: 0 1rem;
gap:1rem;
.image-sec{
    img{
        width:170px;
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
        background: #0950CD;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border:none;
        color:#FFF;
        padding: 1rem 2rem;
        font-size:1.5rem;
        cursor:pointer;
    }
}
@media screen and (max-width: 680px){
    width:85%;
}
`
export default Scheduled