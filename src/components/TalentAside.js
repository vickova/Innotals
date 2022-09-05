import React from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import HouseIcon from '../assets/images/home.png';
import MentorIcon from '../assets/images/mentor.png';
import Resume from '../assets/icons/resume.svg';
import CoursesIcon from '../assets/icons/book.jpg';
import InterviewIcon from '../assets/icons/interview.svg';
import CommunityIcon from '../assets/icons/download.svg';
import SettingsIcon from '../assets/icons/settings.svg';

const TalentAside = () => {
    const {pathname} = useLocation()
  return (
    <AsideStyle>
            <div className='talents' id={pathname === '/talenthome/'|| pathname === '/talenthome'||pathname === '/talenthome/talenthomepage/jobs'?'selected':''}>
              <Link to='/talenthome/'>
              <img src={HouseIcon} alt="houseicon" style={{background:'#FFF'}}/>
              <p>Home</p>
              </Link>
            </div>
            <div className='talents' id={pathname === '/talenthome/mentor'? 'selected': ''}>
              <Link to='/talenthome/mentor'>
              <img src={pathname === '/talenthome/mentor'?MentorIcon:Resume} alt="mentoricon" />
              <p>Mentor</p>
              </Link>
            </div>
            <div className='talents' id={pathname === '/talenthome/courses'? 'selected':''}>
              <Link to='/talenthome/courses'>
              <img src={CoursesIcon} alt="coursesicon" style={{background:'#FFF'}}/>
              <p>Courses</p>
              </Link>
            </div>
            <div className='talents' id={pathname === '/talenthome/resume'? 'selected':''}>
              <Link to='/talenthome/resume'>
              <img src={Resume} alt="coursesicon" style={{background:'#FFF'}}/>
              <p>Resume</p>
              </Link>
            </div>
            <div className='talents' id={pathname === '/talenthome/interview'?'selected':''}>
              <Link to='/talenthome/interview'>
              <img src={InterviewIcon} alt="interviewicon" style={{background:'#FFF'}}/>
              <p>Interview</p>
              </Link>
            </div>
            <div className='talents' id={pathname === '/talenthome/community'? 'selected':''}>
              <Link to='/talenthome/community'>
              <img src={CommunityIcon} alt="communityicon" style={{background:'#FFF'}}/>
              <p>Community</p>
              </Link>
            </div>
            <div className='talents' id={pathname === '/talenthome/settings'?'selected':''}>
              <Link to='/talenthome/settings'>
              <img src={SettingsIcon} alt="settingsicon" style={{background:'#FFF'}}/>
              <p>Settings</p>
              </Link>
            </div>
        </AsideStyle>
  )
}

const AsideStyle = styled.div`
padding: 2rem 0 2rem 2rem;
text-align: left;
border-right:1px solid #2976FC;
  #selected{
    background-color: #2976FC;
    border-top-left-radius: 10px;
    border-bottom-left-radius:10px;
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
    }
    }
  }
  @media screen and (max-width: 680px){
    display:none;
}
`;
export default TalentAside