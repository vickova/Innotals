import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Jobs from './Jobs';

const TalentHomeJobs = () => {
  return (
    <TalentJobsStyle>
        <h2><Link to='/talenthome'>Home</Link><span id='slash'>/</span><span id='job-t'>Jobs</span></h2>
        <div className='job-flex'>
            <Jobs/>
            <Jobs/>
        </div>
        <div className='job-flex'>
            <Jobs/>
            <Jobs/>
        </div>
    </TalentJobsStyle>
  )
}

const TalentJobsStyle = styled.div`
    margin:3rem 4rem;
    width:70%;
    h2{
        color:#4d4c4c;
        a{
            text-decoration:none;
            color:#4d4c4c;;
        }
        #slash{
            font-weight: 800;
            color:#0950CD;
            margin: 0 1rem;
        }
        #job-t{
            color:#212121;
        }
    }
    .job-flex{
        display:flex;
        width:100%;
    }
    @media screen and (max-width: 680px){
        width:100%;
        margin:1rem;
        .job-flex{
            display:block;
            width:100%;
        }
    }
`
export default TalentHomeJobs