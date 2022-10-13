import React from 'react'
import Chevron from '../assets/icons/CaretDown.svg';
import styled from 'styled-components'

const Toggle = ({children, country, toggle, setToggle, current}) => {
  return (
    <ToggleStyle toggle={toggle}>
        <div className='select'>
            <div className='code-sec-cover'>
                <div className='code-sec'>
                    <img src={current.image} alt="flag" />
                </div>
                <div className={`${toggle?'open':''}`}>
                {toggle?children:''}
                </div>
            </div>
            <img className='caret' src={Chevron} alt="arrow" onClick={()=>setToggle(!toggle)}/>
        </div>
    </ToggleStyle>
  )
}

const ToggleStyle = styled.div`
    .select{
      width: 120px;
      height:40px;
      display:flex;
      align-items:center;
      gap:.5rem;
      position:absolute;
      top:10px;
      right:25px;
      .caret{
        cursor: pointer;
        transform:${({toggle})=> toggle?'rotate(-90deg)':''}
      }
      .code-sec{
        display:flex;
        align-items:center;
        gap:.5rem;
        height:40px;
        width:70px;
        img{
          width:35px;
        }
        p{
          margin:0;
          width:50%;
        }
      }
      .country-option{
        background-color:#FFF;
        width:150px;
        z-index:2;
      }
      .open{
        position:absolute;
        top:50px;
        left:-15px;
        z-index:2;
        background-color:#FBFBFB;
        width:100px;
      }
    }
    @media screen and (max-width:1600px){
      .select{
        gap:2rem;
        
        .code-sec{
          width:100%;
        }
      }
    }
    @media screen and (max-width:680px){
      .select{
        width:100px;
        .open{
          top:-50px;
        }
      }
    }
    /* @media screen and (min-width:1200px){
      .select{
        width:13%;
      }
    } */
`
export default Toggle