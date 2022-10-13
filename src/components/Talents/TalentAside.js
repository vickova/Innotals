import React, { useState } from 'react';
import styled from 'styled-components';
import {Link, useLocation, useParams} from 'react-router-dom';
import HouseIcon from '../../assets/images/home.png';
import MentorIcon from '../../assets/icons/ChalkboardTeacher.svg';
import Resume from '../../assets/icons/Notebook.svg';
import CoursesIcon from '../../assets/icons/book.jpg';
import InterviewIcon from '../../assets/icons/Suitcase.svg';
import CommunityIcon from '../../assets/icons/group.svg';
import SettingsIcon from '../../assets/icons/Gear.svg';

const TalentAside = () => {
    const {pathname} = useLocation();
    const [toggle, setToggle] = useState(false);
  return (
    <AsideStyle>
            <div className='talents' id={pathname === '/talenthome/'|| pathname === '/talenthome'||pathname === '/talenthome/talenthomepage/jobs'?'selected':''}>
              <Link to='/talenthome/' onClick={()=>setToggle(false)}>
              <img src={HouseIcon} alt="houseicon"/>
              <p>Home</p>
              </Link>
            </div>
            <div className='talents' id={pathname === '/talenthome/mentor'? 'selected': ''}>
              <Link to='/talenthome/mentor' onClick={()=>setToggle(false)}>
              <img src={MentorIcon} alt="mentoricon" />
              <p>Mentor</p>
              </Link>
            </div>
            <div className='talents' id={pathname === '/talenthome/courses'? 'selected':''}>
              <Link to='/talenthome/courses' onClick={()=>setToggle(false)}>
              <img src={CoursesIcon} alt="coursesicon"/>
              <p>Courses</p>
              </Link>
            </div>
            <div className='talents' id={pathname === '/talenthome/resume'? 'selected':''}>
              <Link to='/talenthome/resume' onClick={()=>setToggle(false)}>
              <img src={Resume} alt="coursesicon"/>
              <p>Resume</p>
              </Link>
            </div>
            <div className='talents' id={pathname === '/talenthome/interview'?'selected':''}>
              <Link to='/talenthome/interview' onClick={()=>setToggle(false)}>
              <img src={InterviewIcon} alt="interviewicon"/>
              <p>Interview</p>
              </Link>
            </div>
            <div className='talents' id={pathname === '/talenthome/community'? 'selected':''}>
              <Link to='/talenthome/community' onClick={()=>setToggle(false)}>
              <img src={CommunityIcon} alt="communityicon"/>
              <p>Community</p>
              </Link>
            </div>
            <div className='talents settings' onClick={()=>setToggle(!toggle)} >
              <a className='orig' href='#' id={pathname==='/talenthome/settings/'||pathname === '/talenthome/settings'||pathname === '/talenthome/settings/wallet'||pathname === '/talenthome/settings/changepassword'?'set':''}>
                  <img src={SettingsIcon} alt="settingsicon"/>
                  <p>Settings</p>
              </a>
              {
                toggle?
                <ul>
                  <Link to='/talenthome/settings' id={pathname === '/talenthome/settings'? 'settingselect':''}>
                    <li>Update account</li>
                  </Link>
                  <Link to='/talenthome/settings/wallet' id={pathname === '/talenthome/settings/wallet'? 'settingselect':''}>
                    <li>My Wallet</li>
                  </Link>
                  <Link to='/talenthome/settings/changepassword' id={pathname === '/talenthome/settings/changepassword'? 'settingselect':''}>
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
  #set{
    background-color: #2976FC;
    border-top-left-radius: 10px;
    color: #fff;
    img{
      background-color:#FFF;
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
      a{
        display:block;
        margin:0;
        padding:0;
        font-size:1.rem;
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
`;
export default TalentAside