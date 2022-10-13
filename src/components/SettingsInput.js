import React from 'react';
import styled from 'styled-components';
import Pencil from '../assets/icons/PencilSimple.svg';

const SettingsInput = ({label, inputType, holdertext}) => {
  return (
    <InputStyle>
        <label htmlFor={label}>{label}</label>
        <input type={inputType} id={label} placeholder={holdertext}/>
        <img src={Pencil} alt="pencil" />
    </InputStyle>
  )
}
const InputStyle = styled.div`
position:relative;
margin: 2rem 0;
width:100%;

    img{
        position:absolute;
        right:45px;
        bottom:20px;
    }
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
        width: 82%;
        border: 1px solid #0950CD;
        border-radius: 40px;
        padding: .2rem 3rem .2rem 3rem;
        outline:none;
        font-size:1.5rem;
    }
    input::placeholder{
        font-weight:500;
    }
    @media screen and (max-width: 1200px){
        input{
            width:90%;
        }
    }
    @media screen and (max-width: 680px){
        margin-bottom:1rem;
        img{
            right:10px;
        }
        label{
            font-size:1rem;
        }
        input{
            width:72%;
            height:60px;
            padding:0 3rem;
            font-size:1rem;
        }
    }
`
export default SettingsInput