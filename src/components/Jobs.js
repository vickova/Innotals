import React from 'react'
import Location from '../assets/icons/location.svg';
import Amount from '../assets/icons/case.svg';
import styled from 'styled-components';

const Jobs = () => {
  return (
    <JobStyle>
        <div>
        <h3 className='sub-head'>Junior software developer</h3>
        <div>
            <h3 className='sub-head'>JALINGO GROUP</h3>
            <div className='jalingo'>
            <div>
                <div className='pegs'>
                <img src={Location} alt="location" />
                <p>Remote</p>
                </div>
                <div className='pegs'>
                <img style={{width:'20px', height:'20px'}} src={Amount} alt="amount" />
                <p>200k - 500k</p>
                </div>
            </div>
            <button className='view'>View</button>
            </div>
        </div>
        </div>
    </JobStyle>
  )
}

const JobStyle = styled.div`
    border:1px solid #0950CD;
    border-radius: 10px;
    padding:2rem;
    margin:1rem;
    .sub-head{
        font-size:1.5rem;
        color: #717171;
    }
    .pegs{
    display:flex;
    align-items:flex-end;
    gap:1rem;
    margin: 1rem 0;
    p{
        margin:0;
        font-size:1.2rem;
    }
    }
    .jalingo{
    display:flex;
    align-items:center;
    justify-content:space-between;
    }
    .view{
    background-color:#0950CD;
    border:none;
    padding: .5rem;
    color:#FFF;
    cursor:pointer;
  }
  @media screen and (max-width: 680px){
    padding:1rem;
    h3{
      font-size:1.2rem;
    }
    p{
      font-size:1rem;
    }
  }
`
export default Jobs