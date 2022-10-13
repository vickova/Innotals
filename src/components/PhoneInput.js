import React, {useState} from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import Nigeria from '../assets/icons/nigeria.svg';
import SouthAfrica from '../assets/icons/south-africa-flag.svg';
import Ghana from '../assets/icons/ghana-flag.svg';
import Uganda from '../assets/icons/uganda-flag.svg';
import Uk from '../assets/icons/united-kingdom-flag.svg';
import France from '../assets/icons/france-flag.svg';
// import CountryList from 'country-list-with-dial-code-and-flag/dist'

const country = [
    {
      code:'Lagos',
      image:Nigeria
    },
    {
      code:'South Africa',
      image:SouthAfrica
    },
    {
      code:'Ghana',
      image:Ghana
    },
    {
      code:'Uganda',
      image:Uganda
    },
    {
      code:'United Kingdom',
      image:Uk
    },
    {
      code:'Ghana',
      image:Ghana
    },
    {
      code:'France',
      image:France
    },
  ];
// You just have to pass the props 'country' from App.js
const PhoneInput = () => {
    const [toggle, setToggle] = useState(false);
    const [current, setCurrent] = useState(country[0]);
    const [focus, setFocus] = useState(false);

    const expand = ()=>{
      setFocus(true);
    }
    const close = ()=>{
      setFocus(false);
    }
    const Set = (val)=>{
        setCurrent(val);
        setToggle(false);
      }
  return (
    <PhoneInputStyle>
        <div className='label' tabIndex={0} onFocus={expand} onBlur={close}>
          <label>Location</label>
          <input type="text" value={current?current.code:''} onChange={(e)=>e.target.value === current.code}/>
          <Toggle country={country} toggle={toggle} setToggle={setToggle} current={current}>
            {focus?(
          <div className='coded'>
            {country.map((items, i)=>{
              return(
              <div className='option' key={i} onClick={()=>Set(items)}>
                <img src={items.image} alt="alt" />
                <p>{items.code}</p>
              </div>
              )
            })}
            </div>):null}
          </Toggle>
        </div>
    </PhoneInputStyle>
  )
}

const PhoneInputStyle = styled.div`
    .label{
      position:relative;
      margin:1rem 0;
      label{
        position:absolute;
        font-size:1.5rem;
        background-color:#FFF;
        left: 50px;
        top:-10px;
        color: #121212;
        font-weight:500;
      }
      input{
        display:block;
        height: 70px;
        width: 86%;
        border: 1px solid #0950CD;
        border-radius: 40px;
        padding: 0 1.5rem;
        outline:none;
        font-size:1.5rem;
        padding-left:3rem;
      }
    }
    .coded{
      height: 300px;
      width: 180px;
      overflow-y:auto;
      background-color:#FFF;
      margin-left:-50px;
      padding: 0.5rem;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    }
    .option{
      display:flex;
      align-items:center;
      gap:1rem;
      font-size:1.2rem;
      img{
        width: 50px;
        height:50px;
      }
    }
    .option:hover{
      background-color: #d6d4d4;
      padding:0 .5rem;
      font-size:1rem;
      color: #999999;
      img{
        width:40px;
        height:40px;
      }
    }
    @media screen and (max-width: 1200px){
      .label{
        input{
          width:92%;
        }
      }
    }
    @media screen and (max-width: 680px){
      .label{
        label{
          font-size:1rem;
        }
        input{
            width:79%;
            height:60px;
            font-size:1rem;
        }
      }
      .coded{
      position:absolute;
    }
    .option{
      img{
        width:30px;
      }
      p{
        font-size:1rem;
      }
    }
    }
`
export default PhoneInput