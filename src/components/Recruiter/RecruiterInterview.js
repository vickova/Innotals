import React from 'react';
import styled from 'styled-components';
import Scheduled from './Scheduled';
import Braman from '../../assets/images/braman.png';
import John from '../../assets/images/john.png';
import Felix from '../../assets/images/felix.png';
import James from '../../assets/images/james.png';
import New from './New';

const RecruiterInterview = () => {
  return (
    <InterviewStyle>
        <h2>Scheduled interview</h2>
        <div>
            <div className='scheduled'>
                <Scheduled name='Daniel james' picture={James} type='Virtual' job='Product designer' date='22/04/2022' button='View bio'/>
                <Scheduled name='Felix badmus' picture={Felix} type='Physical' job='Front-end Dev' date='22/04/2022' button='View bio'/>
            </div>
            <div className='circles'>
                <div className='circle first'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
        </div>
        <h2>Schedule new interview</h2>
            <div className='scheduled'>
                <New name='Victor Braman' picture={Braman} job='Product designer' date='22/04/2022' button='Schedule'/>
                <New name='John Doe' picture={John} job='Snr Product designer' date='22/04/2022' button='Schedule'/>
            </div>
    </InterviewStyle>
  )
}

const InterviewStyle = styled.div`
width:100%;
margin:2rem;
    .scheduled{
        display:flex;
        justify-content:space-between;
    }
    .circles{
    display:flex;
    justify-content:center;
    gap:.5rem;
    margin: 2rem 0;
    .circle{
      height:24px;
      width:24px;
      border: 1px solid #0950CD;
      border-radius:50%;
    }
    .first{
      background: #0950CD;
    }
  }
  @media screen and (max-width: 680px){
    .scheduled{
      display:block;
    }
  }
`
export default RecruiterInterview