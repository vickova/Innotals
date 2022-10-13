import React from 'react';
import styled from 'styled-components';
import InterviewBoxes from './InterviewBoxes';

const TalentInterview = () => {
  return (
    <TalentInterviewStyle>
      <h2>Upcoming interview</h2>
      <div>
        <div className='interview'>
          <InterviewBoxes head='Product Design role' fst='XYZ limited, Lagos' 
          scd='First stage interview' 
          date='Tomorrow' venue='(virtual)' btntext='Join interview' divbg='#7B61FF' 
          datecol='#04B500' btnbg='#2F822D'/>
          <InterviewBoxes head='UI designer' fst='Exify, Lagos' 
          scd='final interview' date='15/04/2022' venue='(Physical)' btntext='View Schedule' divbg='#FF6600' 
          datecol='#121212CC' btnbg='#0950CD'/>
        </div>
        <div className='circles'>
          <div className='circle first'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
      </div>
      <h3 className='recent'>Recently completed interview</h3>
      <div className='completed'>
        <div className='complete-sect'>
          <div className='bullet'></div>
          <p>Ogitech</p>
        </div>
        <div className='complete-sect'>
          <div className='bullet'></div>
          <p>Afribay, Lagos</p>
        </div>
      </div>
    </TalentInterviewStyle>
  )
}


const TalentInterviewStyle = styled.div`
margin:2rem;
h2{
  font-size:2.5rem;
}
  .interview{
    display:flex;
    gap:3.5rem;
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
  .completed{
    border: 1px solid #0950CD;
    border-radius: 20px;
    height:183px;
    padding:2rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:2rem;
  .complete-sect{
    display:flex;
    align-items:center;
    gap:1rem;
    p{
      margin:0;
      font-size:1.5rem;
    }
    .bullet{
      width:10px;
      height:10px;
      border-radius:50%;
      background-color: #2976FC;
    }
  }
  }
  .recent{
    font-size:1.5rem;
  }
  @media screen and (min-width: 1200px){
    .completed{
      width:40%;
    }
  }
  @media screen and (max-width: 680px){
    width:100%;
    margin:1rem;
    h2{
      font-size:1.5rem;
    }
    .interview{
      display:block;
    }
    .circles{
      display:none;
    }
    .recent{
      font-size:1.2rem;
    }
  }
`
export default TalentInterview