import React from 'react'
import styled from 'styled-components'
import SettingsInput from '../SettingsInput';


const Professional = () => {
  return (
    <ProfStyle>
        <div className='section'>
        <SettingsInput label='Stack' inputType='text' holdertext='UI/UX DESIGN'/>
        <SettingsInput label='Expertise' inputType='text' holdertext='Design, User research'/>
        <SettingsInput label='Linkedin profile' inputType='text' holdertext='http://'/>
        <SettingsInput label='Github link' inputType='text' holdertext='http://'/>
        <SettingsInput label='Portfolio website link' inputType='text' holdertext='http://'/>
      </div>
    </ProfStyle>
  )
}

const ProfStyle = styled.div`
display:flex;
    justify-content:space-between;
    gap:1.5rem;
    /* font-family: 'Ubuntu', sans-serif; */
    font-family:sans-serif;
    .email{
      width:100%;
      background-color:transparent;
      border:none;
      display:flex;
      justify-content:flex-end;
      align-items:center;
      gap:1rem;
      margin-bottom:2rem;
      p{
      color: rgba(9, 80, 205, 0.5);
      font-size:1.5rem;
      margin:0;
      }
    }
    .section{
      width:48%;
    }
    select{
      height:70px;
      width: 100%;
      border: 1px solid #0950CD;
      border-radius: 40px;
      font-size:1rem;
      outline:none;
      padding: 0 1rem;
      gap:1rem;
    }
    .area{
      position:relative;
      margin: 2rem 0;
      width:100%;

    img{
        position:absolute;
        right:40px;
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
    textarea{
        display:block;
        width: 83%;
        border: 1px solid #0950CD;
        border-radius: 40px;
        padding: 1.5rem 3rem 1.5rem 2.5rem;
        outline:none;
        font-size:1.5rem;
        overflow:hidden;
        resize:none;
    }
    textarea::placeholder{
      font-family:sans-serif;
    }
    }
    @media screen and (max-width: 1200px){
      display:block;
      .section{
        width:100%;
      }
      .area{
      textarea{
        width:90%;
      }
    }
    }
    @media screen and (max-width: 680px){
      .email{
        display:none;
      }
      .section{
        width:100%;
      }
      .area{
        img{
          right:20px;
        }
        label{
          font-size:1rem;
        }
          textarea{
            width:79%;
            font-size:1rem;
            padding:1rem 1.5rem 1rem 3rem;
          }
      }
    }
`
export default Professional