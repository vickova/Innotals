import React from 'react';
import styled from 'styled-components';
import Exit from '../../assets/icons/redclose.svg'

const New = ({picture, date, job, name, button}) => {
  return (
    <NewStyle>
        <div className='close'><img src={Exit} alt="close" /></div>
        <div className='new'>
        <div className='image-sec'>
            <img src={picture} alt="man" />
            <select name="mediun" id="medium">
                <option value="medium">Virtual</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Physical">Physical</option>
            </select>
        </div>
        <div className='info'>
            <h3>{name}</h3>
            <p>{job}</p>
            <p className='date'>{date}</p>
            <button>{button}</button>
        </div>
        </div>
    </NewStyle>
  )
}

const NewStyle = styled.div`
width:48%;
border: 1px solid #0950CD;
border-radius: 20px;
.close{
    display:flex;
    justify-content:right;
    padding:1rem;
}
.new{
display:flex;
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
    select{
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border:none;
        padding: 1rem 2rem;
        font-size:1.5rem;
        cursor:pointer;
        display:block;
        margin:1.5rem 0;
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
    .date{
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border:none;
        padding: 1rem 2rem;
        font-size:1.5rem;
        cursor:pointer;
    }
}
}
@media screen and (max-width: 680px){
    width:100%;
}
`
export default New