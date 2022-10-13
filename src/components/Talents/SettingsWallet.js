import React from 'react';
import styled from 'styled-components';
import {Link, Route,Routes} from 'react-router-dom';
import WalletHome from './WalletHome';
import WalletBenefits from './WalletBenefits';


const SettingsWallet = () => {
  return (
    <WalletStyle>
      <div className='links'>
          <Link to='/talenthome/settings/wallet' className='first'>Wallet</Link>
          <Link to='/talenthome/settings/wallet/benefit' className='second'>Benefits</Link>
      </div>
      <Routes>
        <Route path='/' element={<WalletHome/>}/>
        <Route path='/benefit' element={<WalletBenefits/>}/>
      </Routes>
    </WalletStyle>
  )
}

const WalletStyle = styled.div`
  margin:6rem 2rem 2rem 2rem;
  .links{
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    background-color:#F0F0F0;
    height:74px;
    width:30%;
    a{
      width:50%;
      padding:1.5rem;
      border:none;
      cursor:pointer;
      text-decoration:none;
      color:#121212;
      font-size:1.5rem;
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
  
`
export default SettingsWallet