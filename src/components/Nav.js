import React, {useState} from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/Logo.png';
import Search from '../assets/images/search.png';
import Notify from '../assets/icons/notify.svg';
import Box from '../assets/icons/box.svg';
import Fred from '../assets/images/fred.png';
import Menu from '../assets/icons/menu.svg';
import Exit from '../assets/icons/close.svg';
import VArrow from '../assets/icons/v-arrow.svg';
import {Link, useLocation, useParams} from 'react-router-dom';



const Nav = () => {
    const {pathname} = useLocation();
    const [toggle, setToggle] = useState(false);
  return (
    <NavStyle Fred={Fred}>
        <img className='logo' src={Logo} alt="logo" />
        <div className='set'>
            <div className='input-search'>
                <input type="text" placeholder='Search'/>
                <img src={Search} alt="search" />
            </div>
            <div className='menu-cover'>
                <img onClick={()=>setToggle(true)} className={`menu ${toggle?'icons-set': ''}`} src={Menu} alt="menu"/>
                <div className='icons-set' id={toggle? 'icons-setmenu':''}>
                    <img onClick={()=>setToggle(false)} className={`exit ${toggle?'':'icons-set'}`} src={Exit} alt="exit"/>
                    <img className='navbar-icons' src={Box} alt="box" />
                    <img className='navbar-icons' src={Notify} alt="notification" />
                    <div className="mentors-n">
                        {(pathname === '/talenthome/'|| pathname==='/talenthome/mentor'||pathname==='/talenthome/courses'
                        ||pathname==='/talenthome/resume'||pathname==='/talenthome/interview'||pathname==='/talenthome/community'
                        ||pathname==='/talenthome/settings')?
                        <img src={Fred} alt="fred" />:(pathname === '/recruiter/'|| pathname==='/recruiter/interview'||pathname==='/recruiter/settings'
                        ||pathname==='/recruiter/settings/password')?
                        <div style={{borderRadius:'50%', background:'#FF6600', height:'45px',width:'45px'}}></div>:<div style={{borderRadius:'50%', background:'#E40F0F', height:'45px',width:'45px'}}></div>
                        }
                        <img src={VArrow} alt="v-arrow" />
                    </div>
                </div>
            </div>
        </div>
    </NavStyle>
  )
}

const NavStyle = styled.div`
    border-bottom:1px solid #0950CD;
    display:flex;
    justify-content:space-between;
    padding:2rem 1rem;
    .logo{
        width:50px;
        height:50px;
    }
    .navbar-icons{
        width:20px;
        height:20px;
        background-color:#dcdce9;
        padding:.8rem;
        border-radius:50%;
    }
    .set{
        display:flex;
        gap:2rem;
    }
    .input-search{
        position:relative;
        img{
            position:absolute;
            right: 10px;
            top:8px;
        }
        input{
            height:10px;
            padding:1rem 1.8rem;
            border-radius:10px;
            border:none;
            background-color: #dcdce9;
            font-size:1rem;
        }
    }
    .option{
        display:flex;
        img{
            width:45px;
            height:45px;
        }
    }
    .icons-set{
        display:flex;
        gap:1rem;
        .mentors-n{
            display:flex;
            align-items:center;
            gap:1rem;
            #fed{
                background-image:url(${Fred});
            }
            img:first-child{
                width:45px;
                height:45px;
            }
            img:last-child{
                width:20px;
                height:20px;
            }
        }
    }
    .menu-cover{
        .menu{
            display:none;
        }
        .exit{
            display: none;
        }
    }
    @media screen and (max-width: 680px){
        .input-search{
            img{
                top:0;
                right:0;
                background-color:#dcdce9;
                padding:.5rem;
                border-radius:50%;
            }
            input{
                display:none;
            }
        }
        .menu-cover{
            
                .menu{
                    display:block;
                    cursor:pointer;
                }

                .exit{
                    width:25px;
                    height:25px;
                    display: block;
                    cursor:pointer;
                }
            }
            .icons-set{
                display:none;
                background-color:#F2F2F2;
                width: 50%;
            }
            #icons-setmenu{
                display:flex;
                flex-direction:column;
                position:fixed;
                right:0;
                top:0;
                padding:1rem;
            }
            
    }
`
export default Nav;