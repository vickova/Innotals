import React from 'react';
import {Link, Route,Routes} from 'react-router-dom';
import styled from 'styled-components';
import SettingsInput from '../SettingsInput';
import BluePlus from '../../assets/icons/blue-plus.svg';
import Pencil from '../../assets/icons/PencilSimple.svg';
import PhoneInput from '../PhoneInput';
import Professional from './Professional';
import Personal from './Personal';


const SettingsUpdate = () => {
  return (
    <Settings>
      <div className='links'>
          <Link to='/talenthome/settings/' className='first'>personal</Link>
          <Link to='/talenthome/settings/professional' className='second'>Professional</Link>
      </div>
      <div className='routed'>
        <Routes>
        <Route path='/' element={<Personal/>}/>
        <Route path='/professional' element={<Professional/>}/>
        </Routes>
      </div>
    <UpdateStyle>
      <div className='section'>
        <SettingsInput label='Name' inputType='text' holdertext='John Felix'/>
        <div>
          <SettingsInput label='Email Address' inputType='email' holdertext='John Felix247@gmail.com'/>
          <button className='email'>
            <p>Add email address</p>
            <img src={BluePlus} alt="plus-sign" />
          </button>
        </div>
        <PhoneInput/>
        <div className='area'>
          <label htmlFor='About'>About</label>
          <textarea placeholder='A user centric, proactive ui designer
            with experience in user satisfaction'/>
          <img src={Pencil} alt="pencil" />
        </div>
        <SettingsInput label='Phone number' inputType='number' holdertext='9143526566'/>
        <SettingsInput label='Professional Languages' inputType='text' holdertext='English, French'/>
      </div>
      <div className='section'>
        <SettingsInput label='Stack' inputType='text' holdertext='UI/UX DESIGN'/>
        <SettingsInput label='Expertise' inputType='text' holdertext='Design, User research'/>
        <SettingsInput label='Linkedin profile' inputType='text' holdertext='http://'/>
        <SettingsInput label='Github link' inputType='text' holdertext='http://'/>
        <SettingsInput label='Portfolio website link' inputType='text' holdertext='http://'/>
      </div>
    </UpdateStyle>
    <div className='button'>
      <button>Update</button>
    </div>
    </Settings>
  )
}


const UpdateStyle = styled.div`
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
      display:none;
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
export const Settings = styled.div`
margin:6rem 2rem 2rem 2rem;
.button{
display:flex;
justify-content:center;
padding:1rem;
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
.links{
    display:none;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    background-color:#F0F0F0;
    height:50px;
    a{
      width:50%;
      padding:1rem 1.5rem;
      border:none;
      cursor:pointer;
      text-decoration:none;
      color:#121212;
    }
    .first{
      border-top-left-radius:20px;
      border-bottom-left-radius:20px;
      background-color: #0950CD;
      color:#FFF;
    }
    .second{
      border-top-right-radius:20px;
      border-bottom-right-radius:20px;
    }
  }
  .routed{
    display:none;
  }
  @media screen and (max-width: 680px){
    margin:3rem .8rem 2rem .8rem;
    .button{
    button{
      font-size:1rem;
    }
  }
  .links{
    display:flex;
  }
  .routed{
    display:block;
  }
  }
`
export default SettingsUpdate