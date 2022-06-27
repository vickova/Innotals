import React from 'react';
import styled from 'styled-components';
import Button from './Button';


const Subscription = () => {
  return (
      <SubscriptionStyle>
        <div className='sub'>
            <div className='line-cover'><div className='line'></div></div>
            <h2>Subscribe to our Newsletter</h2>
            <div className='sub-cover'><p>To be the first to get notified on an upcoming events and the release of our news letters.</p></div>
            <form>
                <div> 
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" placeholder='abayomi.tosin2017@gmail.com'/>
                </div>
                <Button text='Subscribe' Bg='#FBFBFB'/>
            </form>
        </div>
    </SubscriptionStyle>
  )
};

const SubscriptionStyle = styled.div`
    text-align: center;
    background-color: #231F20;
    padding: 4rem 2rem;
    color: #FBFBFB;
    margin: 3rem 0;
    .sub{
        p{
            color:#FBFBFB;
            font-size: 1.2rem;
        }
        h2{
            color:#FBFBFB;
            font-size: 2.2rem;
        }
        form{
            display: flex;
            flex-wrap:wrap;
            justify-content:center;
            gap: 1rem;
            div{
                display:block;
                width:45%;
                text-align:left;
                input{
                    height: 50px;
                    width: 90%;
                    padding: .5rem 1rem;
                    background-color: inherit;
                    border: 3px solid #FBFBFB;
                    font-size: 1.2rem;
                    border-radius: 10px;
                    color: #FBFBFB;
                }
                label{
                color:#FBFBFB;
                font-family: 'Ubuntu', sans-serif;
                }
            }
            button{
                margin: 1rem 0;
                padding: 1.6rem 4rem;
                font-size: 1rem;
                font-weight: 600;
            }
        }
        .line-cover{
            display: flex;
            justify-content: center;
            .line{
                height: .2rem;
                background-color: #FBFBFB;
                width: 5%;
            }
        }
        .sub-cover{
            display:flex;
            justify-content:center;
            p{
                width:30%;
            }
        }
    }
    @media (max-width: 400px){
        padding: 2rem 1.5rem;
        .sub{
            form{
                display:block;
                text-align:left;
                div{
                    width: inherit;
                    text-align:left;
                    input{
                        width: 85%;
                    }
                }
                button{
                    margin:1rem 0;
                    padding: 1rem 2rem;
                }
            }
            .sub-cover{
                display:block;
                p{
                    width: 100%;
                }
            }
        }
        
    }
`

export default Subscription;