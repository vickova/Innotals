import React from 'react'
import styled from 'styled-components';
import RedGuy from '../../assets/images/redguy.png';
import WhiteGuy from '../../assets/images/whiteguy.png';
import WhiteLady from '../../assets/images/whitelady.png';
import Chinese from '../../assets/images/chinese.png';

export const Circles = ({text}) => {
  return (
    <CircleStyle>
        <img src={RedGuy} alt="small-circles" />
        <img className='left' src={WhiteLady} alt="small-circles" />
        <img className='left' src={WhiteGuy} alt="small-circles" />
        <img className='left' src={Chinese} alt="small-circles" />
        <div className='left number'><p>{text}</p></div>    
    </CircleStyle>
  )
}
const CircleStyle = styled.div`
    display:flex;
    margin: 2rem 0;
    gap:1rem;
    p{
        font-size:1rem;
    }
    img{
        width:40px;
        height:40px;
    }
    .number{
        background-color:#0950CD;
        border-radius:50%;
        width:35px;
        height:35px;
        display:flex;
        justify-content:center;
        align-items:center;
        p{
            color:#FFF;
        }
    }
    .left{
        margin-left:-35px;
    }
`
export default Circles