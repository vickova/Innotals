import React from 'react';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import Update from './Update';
import RecruiterPassword from './RecruiterPassword';
import Fred from '../../assets/images/fred.png';
import Camera from '../../assets/icons/Camera.svg';

const RecruiterSettings = () => {
  return (
    <div style={{width:'100%'}}>
      <RecruiterSettingStyle>
        <div className='profilebg'>
            <div className='position'>
                <div>
                    <img src={Fred} alt="fred" />
                    <img className='camera first' src={Camera} alt="camera" />
                </div>
                <img className='camera last' src={Camera} alt="camera" />
            </div>
        </div>
    </RecruiterSettingStyle>
    <Routes>
      <Route path='/*'element={<Update/>}/>
      <Route path='/changepassword'element={<RecruiterPassword/>}/>
    </Routes>
    </div>
  )
}
const RecruiterSettingStyle = styled.div`
    .profilebg{
        height:218px;
        background-color:rgba(9, 80, 205, 0.72);
        position: relative;
        display:flex;
        justify-content:center;
        .camera{
            height:30px;
            width:30px;
            background-color:#FFF;
            padding:1rem;
            border-radius:50%;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .first{
            margin-left:-80px;
        }
        .last{
            margin-top:80px;
        }
        .position{
            position:absolute;
            bottom:-60px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            width:80%;
        }
    }
    @media screen and (max-width: 680px){
        .profilebg{
            height:120px;
            .camera{
                width:18px;
                height: 18px;
            }
            .first{
                display:none;
            }
            .last{
                margin-top:30px;
            }
            .position{
                bottom:-30px;
                img:first-child{
                    width:90px;
                    height:90px;
                }
            }
        }
    }
`
export default RecruiterSettings;