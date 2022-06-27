import React from 'react';
import Question1 from '../assets/images/circle-image3.png'
import Question2 from '../assets/images/circle-image2.png'
import Question3 from '../assets/images/circle-image1.png'
import Button from './Button';
import styled from 'styled-components';

const Questions = () => {
  return (
    <QuestionStyle>
        <div>
            <div className='question-images'>
                <img src={Question1} alt="questions-rep" />
                <img className='moved' src={Question2} alt="questions-rep" />
                <img className='moved' src={Question3} alt="questions-rep" />
            </div>
            <div className='text-cover'>
                <div className='text'>
                    <h2>Still have questions?</h2>
                    <div className='underline'>
                        <div></div>
                    </div>
                </div>
            </div>
            <p>Can't find the answer you are looking for? Chat with our awesome team</p>
            <Button text='Request Help' Bg='#0950CD'/>
        </div>
    </QuestionStyle>
  )
}
const QuestionStyle = styled.div`
    text-align: center;
    .question-images{
        display:flex;
        justify-content: center;
        .moved{
            margin-left: -1rem;
        }
        img{
            width: 55px;
            height: 55px;
        }
    }
    .text-cover{
        display:flex;
        justify-content: center;
    }
    .text{
        margin: 2rem 0;
        width: fit-content;
        text-align:center;
        .underline{
            display: flex;
            justify-content:center;
            div{
                height:.5rem;
                width: 50%;
                background-color:#0950CD;
            }
        }
    }
`
export default Questions