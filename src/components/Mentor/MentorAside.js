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

const MentorAside = () => {
    const {pathname} = useLocation()
    const [toggle, setToggle] = useState(false);
    const [commun, setCommun] = useState(false);

  return (
    <MentorStyle pathname={pathname}>
            <div className='talents' id={pathname === '/mentor/'|| pathname === '/mentor'?'selected':''}>
              <Link to='/mentor/'>
              <img src={HouseIcon} alt="houseicon"/>
              <p>Home</p>
              </Link>
            </div>
            <div className='talents settings' onClick={()=>setCommun(!commun)} >
              <a className='orig' href='#' id={pathname==='/mentor/community/'||pathname === '/mentor/community'||pathname === '/mentor/community/israel'||pathname === '/mentor/community/victor'?'selected':''}>
                  <img src={CommunityIcon} alt="communityicon"/>
                  <p>Community</p>
              </a>
              {
                commun?
                <ul>
                  <Link to='/mentor/community' id={pathname === '/mentor/community'? 'settingselect':''}>
                    <li>All Mentee</li>
                  </Link>
                  <Link to='/mentor/community/israel' id={pathname === '/mentor/community/israel'? 'settingselect':''}>
                    <li>Isreal Banton</li>
                  </Link>
                  <Link to='/mentor/community/victor' id={pathname === '/mentor/community/victor'? 'settingselect':''}>
                    <li>Victor Braman</li>
                  </Link>
                </ul>:
                <></>
              }
            </div>
            <div className='talents settings' onClick={()=>setToggle(!toggle)} >
              <a className='orig' href='#' id={pathname==='/mentor/settings/'||pathname === '/mentor/settings'||pathname === '/mentor/settings/changepassword'?'selected':''}>
                  <img src={SettingsIcon} alt="settingsicon"/>
                  <p>Settings</p>
              </a>
              {
                toggle?
                <ul>
                  <Link to='/mentor/settings' id={pathname === '/mentor/settings'? 'settingselect':''}>
                    <li>Update account</li>
                  </Link>
                  <Link to='/mentor/settings/changepassword' id={pathname === '/mentor/settings/changepassword'? 'settingselect':''}>
                    <li>Change password</li>
                  </Link>
                </ul>:
                <></>
              }
            </div>
        </MentorStyle>
  )
}

const MentorStyle = styled.div`
padding: 2rem 0 2rem 2rem;
text-align: left;
border-right:1px solid ${({pathname})=> pathname === '/mentor'|| pathname==='/mentor/'?'transparent':'#2976FC'};
height:${({pathname})=> pathname === '/mentor/community'|| pathname === '/mentor/community/israel'||pathname === '/mentor/community/victor'?'75vh':''};
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
export default MentorAside