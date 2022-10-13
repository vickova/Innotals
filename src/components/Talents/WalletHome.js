import React from 'react';
import styled from 'styled-components';
import SettingsInput from '../SettingsInput';


const WalletHome = () => {
  return (
    <WalletHomeStyle>
        <PasswordStyle>
            <div className='balance'>
                <h3>Balance</h3>
                <h4>N5000</h4>
            </div>
            <div className='inputs'>
                <h3>Withdrawal information</h3>
                <SettingsInput label='Enter previous password' inputType='text' holdertext='John Felix'/>
                <SettingsInput label='Enter new password' inputType='text' holdertext='3244546523'/>
                <SettingsInput label='Confirm new password' inputType='text' holdertext='UBA'/>
                <div className='button'>
                    <button>Withdraw</button>
                </div>
            </div>
    </PasswordStyle>
    <div className='history'>
        <h3>History</h3>
        <div className='box'>

        </div>
    </div>
    </WalletHomeStyle>
  )
}

const WalletHomeStyle = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    .history{
        width:40%;
        .box{
            border: 1px solid #0950CD;
            border-radius: 20px;
            height:500px;
        }
        h3{
            font-size:2rem;
            color:#121212;
            text-align:center;
        }
    }
`
const PasswordStyle = styled.div`
  margin:6rem 2rem 2rem 2rem;
  width:50%;
  .balance{
    border: 1px solid #0950CD;
    border-radius: 20px;
    width:fit-content;
    padding:1rem 1.5rem;
    h3, h4{
        margin:0;
        color:#121212;
    }
    h3{
        font-size:2.5rem;
    }
    h4{
        font-size:4rem;
    }
  }
  .inputs{
  width:100%;
  h3{
    font-size:2rem;
    color:#121212;
  }
  }
  .button{
    display:flex;
    button{
      background-color: #0950CD;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 1rem 2.5rem;
      border:none;
      font-size:1.5rem;
      color:#FFF;
      cursor:pointer;
    }
  }
`
export default WalletHome