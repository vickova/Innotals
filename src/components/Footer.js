import React from 'react'
import WhiteLogo from '../assets/icons/White-Logo.svg';
import styled from 'styled-components';
import Facebook from '../assets/icons/Vector (6).svg'
import Twitter from '../assets/icons/Vector (7).svg'
import Linkedin from '../assets/icons/Vector (8).svg'
import Message from '../assets/icons/Vector (5).svg'
import Button from './Button';

const Footer = () => {
  return (
    <FooterStyle>
        <div className='logo'><img src={WhiteLogo} alt="innotals-logo" /></div>
        <FooterInner>
            <div>
                <h2>Resources</h2>
                <p>About us</p>
                <p>Terms of service</p>
                <p>FAQ</p>
            </div>
            <div>
                <h2>Companies</h2>
                <p>Companies</p>
                <p>Collaborate with us</p>
            </div>
            <div>
                <div>
                    <h2>Contact US</h2>
                    <div className='message'>
                        <img src={Message} alt="Message-icon" />
                        <p>innotals@gmail.com</p>
                    </div>
                    <div className='social-media'>
                        <img src={Facebook} alt="twitter-icon" />
                        <img src={Twitter} alt="facebook-icon" />
                        <img src={Linkedin} alt="linkedin-icon" />
                    </div>
                </div>
                <div>
                    <h3>Subscribe to our newsletter</h3>
                    <input type="email" placeholder='Enter email address'/>
                    <Button text='Subscribe' Bg='#0950CD'/>
                </div>
            </div>
        </FooterInner>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    background-color: #121212;
    color: #FBFBFB;
    padding: 3rem;
    display:flex;
    gap: 10rem;
    p{
        font-size: 1.2rem;
        font-family: 'Ubuntu', sans-serif;
    }
    h2, h3{
        font-family: 'Inter', sans-serif;
    }
    @media (max-width: 768px){
        display: block;
        padding: 2rem;
    }
`;
const FooterInner = styled.div`
    width: 70%;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
    img{
        width: 30px;
        height: 30px;
    }
    input{
        height: 50px;
        width: 80%;
        padding: .5rem 1rem;
        background-color: inherit;
        border: 3px solid #FBFBFB;
        font-size: 1rem;
        border-radius: 10px;
        color: #FBFBFB;
    }
    h3{
        font-size: 2rem;
    }
    
    .message{
        display:flex;
        gap: 2rem;
        border:1px solid transparent;
        p{
            margin:0;
        }
    }
    .social-media{
        img{
            margin: 1rem 1rem 1rem 0;
        }
    }
    @media (max-width: 768px){
        display: block;
        gap:0;
        padding: 2rem;
    }
`;
export default Footer