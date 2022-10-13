import React from 'react';
import styled from 'styled-components';

const InterviewBoxes = ({head, fst, scd, date, venue, btntext, btnbg, datecol, divbg}) => {
  return (
    <InterviewStyle btnbg={btnbg} datecol={datecol} divbg={divbg}>
        <div className='top'>
            <div className='box'></div>
            <div className='sect'>
                <h3>{head}</h3>
                <p className='hsec'>{fst}</p>
                <p className='hsec'>{scd}</p>
                <div className='dated'>
                    <p>{date}</p>
                    <p>{venue}</p>
                </div>
            </div>
        </div>
        <div className='button'>
        <button>{btntext}</button>
        </div>
    </InterviewStyle>
  )
}

const InterviewStyle = styled.div`
border: 1px solid #0950CD;
border-radius: 20px;
padding:2rem;
  .box{
    height:107px;
    width:131px;
    border-radius:10px;
    background-color: ${({divbg})=>divbg};
  }
  .button{
    display:flex;
    justify-content:center;
    margin: 2rem 0;
    left:-150px;
  button{
    background-color: ${({btnbg})=>btnbg};
    border:none;
    color:#FFF;
    padding:1rem 1.5rem;
    font-size:1.5rem;
    font-weight:700;
    border-radius:10px;
    width:50%;
  }
}
  .sect{
    h3{
      font-size:2rem;
      margin:0;
    }
    .dated{
      display:flex;
      gap:1rem;
      p:first-child{
        color: ${({datecol})=>datecol};
      }
      p:last-child{
        color: #A6A6A6;
      }
    }
    p{
      font-size:1.5rem;
      margin:.5rem;
    }
  }
  .top{
    display:flex;
    gap:1rem;
  }
  @media screen and (min-width: 700px){
    width:48%;
    .button{
      button{
        width:50%;
      }
    }
  }
  @media screen and (max-width: 680px){
    padding:1rem .5rem;
    margin:1rem 0;
    .sect{
      h3{
        font-size:1.25rem;
      }
      p{
        font-size:1rem;
      }
    }
    .button{
      button{
        font-size:1rem;
        width:100%;
      }
    }
  }
  @media screen and (max-width: 380px){
    .box{
      width:30%;
    }
    .sect{
      width: 40%;
    }
    .button{
      button{
        width:50%;
        font-size:.8rem;
      }
    }
  }
`
export default InterviewBoxes