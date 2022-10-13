import React, {useState} from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import HouseIcon from '../../assets/images/home.png';
import MentorIcon from '../../assets/icons/ChalkboardTeacher.svg';
import Resume from '../../assets/icons/Notebook.svg';
import CoursesIcon from '../../assets/icons/book.jpg';
import InterviewIcon from '../../assets/icons/Suitcase.svg';
import CommunityIcon from '../../assets/icons/group.svg';
import SettingsIcon from '../../assets/icons/Gear.svg';

const RecruiterAside = () => {
    const {pathname} = useLocation()
    const [toggle, setToggle] = useState(false);

  return (
    <AsideStyle>
            <div className='talents' id={pathname === '/recruiter/'|| pathname === '/recruiter'?'selected':''}>
              <Link to='/recruiter/'>
              <img src={HouseIcon} alt="houseicon"/>
              <p>Home</p>
              </Link>
            </div>
            <div className='talents' id={pathname === '/recruiter/interview'?'selected':''}>
              <Link to='/recruiter/interview'>
              <img src={InterviewIcon} alt="interviewicon"/>
              <p>Interview</p>
              </Link>
            </div>
            <div className='talents settings' onClick={()=>setToggle(!toggle)} >
              <Link to='/recruiter/settings' id={pathname === '/recruiter/settings'? 'selected':''}>
              <img src={SettingsIcon} alt="communityicon"/>
              <p>Settings</p>
              </Link>
              {
                toggle?
                <ul>
                  <Link to='/recruiter/settings' id={pathname === '/recruiter/settings'? 'settingselect':''}>
                    <li>Update account</li>
                  </Link>
                  <Link to='/recruiter/settings/changepassword' id={pathname === '/recruiter/settings/changepassword'? 'settingselect':''}>
                    <li>Change password</li>
                  </Link>
                </ul>:
                <></>
              }
            </div>
        </AsideStyle>
  )
}

const AsideStyle = styled.div`
padding: 2rem 0 2rem 2rem;
text-align: left;
border-right:1px solid #2976FC;
#settingselect{
  border-right:10px solid #2976FC;
  border-radius:10px;
}
  #selected{
    background-color: #2976FC;
    border-top-left-radius: 10px;
    border-bottom-left-radius:10px;
    color: #fff;
    a{
    color: #FFF;
    }
  }
  .settings{
    a{
        margin-bottom:0;
    }
  }
  .talents{
    a{
    display:flex;
    justify-content:left;
    margin: 2rem 0;
    gap: 2rem;
    padding:.5rem 2rem;
    text-decoration:none;
    color: #434242;
    p{
      font-size: 1.2rem;
      margin:0;
    }
    img{
      width:30px;
      height:30px;
      background-color:#FFF;
    }

  }
    ul{
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
      border-radius: 0px 0px 0px 20px;
      padding:1rem 0;
      width:inherit;
      margin:0;
      background-color: #FFF;
      a{
        display:block;
        margin:0;
        padding:0;
        font-size:1rem;
        color:#121212;
        font-family: 'Ubuntu', sans-serif;
      }
      a:hover{
        background-color:#F0F0F0;
        color:gray;
        font-size:.9rem;
      }
      li{
          list-style-type:none;
          padding: 1rem 2rem;
          color:#121212;
        }
    }
  }
  .settings{
    a{
      margin-bottom:0;
    }
  }
  @media screen and (max-width: 680px){
    display:none;
}
`
export default RecruiterAside