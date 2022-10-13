import React from 'react';
import {Link} from 'react-router-dom';
import Upload from '../../assets/icons/upload.svg';
import styled from 'styled-components';


const TalentMentorTask = () => {
  return (
    <TalentTaskStyle>
        <div className='mentor-tasks'>
            <div className='mentor-task-inner'>
                <h2 className='tasked'><Link to='/talenthome/mentor/'>Mentor</Link></h2>
                <h2><Link to='/talenthome/mentor/task'>Task</Link></h2>
            </div>
            <div className='mentor-task-line'><div id='line'></div></div>
        </div>
        <div className='task-flex'>
            <div className='task-circle'></div>
            <p>Draw out your monthly plan</p>
        </div>
        <div className='task-flex'>
            <div className='task-circle'></div>
            <p>Chcek the meaning of padding and alignment on google</p>
        </div>
        <div className='task-flex'>
            <div className='task-circle'></div>
            <p>Watch the youtube video sent</p>
        </div>
        <div className='task-flex'>
            <div className='task-circle'></div>
            <p>Join my slack channel <a href="/talenthome/mentor">http//:slack.com/johnbosco247</a></p>
        </div>
        <form>
            <input className='text-upload' type="text" />
            <div>
            <label htmlFor="upload">
                Upload <img style={{width:'20px', height:'20px',margin:'0 1rem'}} src={Upload} alt="upload" />
                </label>
                <input type="file" accept='.pdf, .txt, .doc' id='upload' name='upload' style={{display:'none'}}/>
                <button>Submit</button>
            </div>
        </form>
        <h3>Recently completed task</h3>
        <div className='boxed'>
            <div className='task-flex'>
                <div className='smaller-circle'></div>
                <p>Schedule for first appointment</p>
            </div>
            <div className='task-flex'>
                <div className='smaller-circle'></div>
                <p>Complete your profile</p>
            </div>
        </div>
    </TalentTaskStyle>
  )
}

const TalentTaskStyle = styled.div`
    margin:1rem;
    width:100%;
    .mentor-tasks{
        width:20%;
        margin:1rem;
        .mentor-task-inner{
            display:flex;
            justify-content:space-between;
            h2{
                margin:0;
                a{
                    text-decoration:none;
                    color: #121212;
                }
            }
            .tasked{
            a{
            color: gray;
            }
        }
        }
        .mentor-task-line{
            background-color:#0950CD;
            height: 5px;
            width:100%;
            #line{
                width:50%;
                height:100%;
                background-color: gray;
            }
        }
    }
    .task-flex{
        display:flex;
        align-items:center;
        gap:1rem;
        .task-circle{
            width:20px;
            height:20px;
            border-radius:50%;
            background-color:#0950CD;
        }
        .smaller-circle{
            width:15px;
            height:15px;
            border-radius:50%;
            background-color:#0950CD;
        }
        p{
            a{
                text-decoration:none;
                color:#0950CD;
            }
        }
    }
    form{
        display:flex;
        flex-direction:column;
        label{
            border:1px solid #0950CD;
            margin:1rem 1rem 1rem 0;
            font-size:1rem;
            padding:1rem;
            border-radius: 10px;
            color:#0950CD;
        }
        button{
            background-color:#0950CD;
            border-radius: 10px;
            color:#FFF;
            font-size:1rem;
            padding:1rem 2rem;
            border:none;
        }
        .upload{
            display:none
        }
        .text-upload{
            width:50%;
            height:80px;
            margin:2rem 0;
            border:1px solid #0950CD;
            border-radius: 10px;
        }
    }
    .boxed{
        border:1px solid #0950CD;
        border-radius: 10px;
        padding:2rem;
        width:70%;
    }
`
export default TalentMentorTask