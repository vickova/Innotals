import React from 'react';
import styled from 'styled-components';
import SettingsInput from '../SettingsInput';

const RecruiterPassword = () => {
  return (
    <RecruiterStyle>
      <div className='inputs'>
      <SettingsInput label='Enter previous password' inputType='text' holdertext='John Felix'/>
      <SettingsInput label='Enter new password' inputType='text' holdertext='John Felix247@gmail.com'/>
      <SettingsInput label='Confirm new password' inputType='text' holdertext='9143526566'/>
      <div className='button'>
        <button>Update</button>
      </div>
      </div>
    </RecruiterStyle>
  )
}
const RecruiterStyle = styled.div`
  margin:6rem 2rem 2rem 2rem;
  .inputs{
  width:50%;
  }
  .button{
    display:flex;
    justify-content:center;
    button{
      background-color: #0950CD;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 1rem 2rem;
      border:none;
      font-size:1.5rem;
      color:#FFF;
    }
  }
  @media screen and (max-width: 680px){
    .inputs{
      width:100%;
    }
    .button{
      button{
        font-size:1rem;
      }
    }
  }
`
export default RecruiterPassword