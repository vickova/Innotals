import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/Logo.png';
import Fine from '../assets/images/fine.png';
import Google from '../assets/images/google.png';
import Github from '../assets/images/git.png';
import Question from '../assets/images/Q.png';


const SignIn = () => {
  return (
    <SignInStyle>
        <div>
            <div className='logo-container' style={{margin: '1rem 0'}}>
                <img src={Logo} alt="Logo"  style={{width: '3.5rem', height: '3.5rem'}}/>
            </div>
            <div>
                <h2>Welcome Back!</h2>
                <div className='sign-flex'>
                    <FormStyleLeft>
                        <div className='form-cover'>
                            <form action="">
                            <button><span><img src={Google} alt="google-logo" /></span> <p>Login With Google</p></button>
                            <button><span><img src={Github} alt="google-logo" /></span> <p>Login With Github</p></button>
                            <div className='input-cover'>
                                <label htmlFor="email">Email Address</label>
                                <input type="text" name='email' id='email' placeholder='example247@gmail.com'/>
                            </div>
                            <div className='input-cover'>
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' id='password' placeholder='.....'/>
                            </div>
                            <div className='check-input-cover'>
                                <div className='check-input'>
                                    <input type="checkbox" name='checkbox'/>
                                    <label htmlFor="checkbox">Remember me</label>
                                </div>
                                <span>Forgot password?</span>
                            </div>
                            <button><p>Log In</p></button>
                            <p>Want to become a member? <span>Join now</span></p>
                            </form>
                        </div>
                    </FormStyleLeft>
                    <SignInLeft>
                        <div className='signIn-cards'>
                        <img src={Fine} alt="" />
                        <div id='first' className='signIn-tags'><p>Ready to take a step getting closer to your dream job???</p></div>
                        <div id='second' className='signIn-tags'><p>We breed the best talents in the tech space with substanding relationship</p></div>
                        <div id='third' className='signIn-tags'><p>We've got a lot prepared just for you!!</p></div>
                        </div>
                    </SignInLeft>
                </div>
            </div>
            <div className='question-sect'>
                <img src={Question} alt="question" />
            </div>
        </div>
    </SignInStyle>
  )
}

const SignInStyle = styled.div`
height: 100%;
.logo-container{
    margin:0;
    padding: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid lightblue;
}
.sign-flex{
    display:flex;
    justify-content: space-around;
    gap: 10px;
    
    label{
        display: block;
    }
}
h2{
    margin: 2rem;
    font-size: 2rem;
    font-family: 'Inter', sans-serif;
}
p, label, span{
    font-family: 'Ubuntu', sans-serif;
}
.question-sect{
    display: flex;
    justify-content: flex-end;
    img{
        margin:0 .5rem;
        width: 30px;
        height: 30px;
    }
}

@media screen and (max-width: 1040px){
    .sign-flex{
        display: flex;
        flex-direction: column-reverse;
        margin: 1.5rem;
    }
    
}

`
const FormStyleLeft = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    .form-cover{
        width: 100%;
        display: flex;
        align-items: center;
        form{
            width: 100%;
        }
    }
    
    .input-cover{
        width: 100%;
        position: relative;
        label{
            position: absolute;
            top: 20px;
            left: 25px;
            background-color: #FFF;
        }
    }
    button{
        padding: 1.2rem 2rem;
        border-radius: 50px;
        margin: 1rem 0;
        font-size: 1rem;
        background-color: #0950CD;
        border: none;
        width: 100%;
        color: #FFF;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        p{
            font-size: 1.2rem;
            margin: 0;
        }
        span{
            background-color: #FFF;
            height: 30px;
            width: 30px;
            padding: .2rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
            width: 25px;
            height: 25px;
        }
        }
    }
    #email, #password{
        border-radius: 50px;
        height: 60px;
        margin: 2rem 0;
        font-size: 1rem;
        width: 92%;
        border: 1px solid #0950CD;
        padding:0 1.5rem;
    }
    #email:focus, #password:focus{
        outline: 2px solid #0950CD;
    }
    .check-input-cover{
        display: flex;
        justify-content: space-between;
        .check-input{
            display:flex;
            input{
                width: 20px;
                height: 20px;
            }
        }
    }
    span{
        color: red;
    }
    p{
        text-align:center;
    }
    p, label, span{
        font-size: 1.2rem;
    }
    @media screen and (max-width: 1040px){
        width: 100%;
    }
    @media screen and (max-width: 680px){
        button{
            font-size: .6rem;
            gap: 1rem;
            padding: 1rem 2rem;
            
            span{
                width: 20px;
                height: 20px;
                img{
                    width: 18px;
                    height: 18px;
                }
            }
            p{
                font-size: .8rem;
            }
        
        }
        p, label, span{
            font-size: 1rem;
        }
        #email, #password{
            padding: 0 1rem;
            font-size: .8rem;
        }
    }
`
const SignInLeft = styled.div`
    color: #fff;
    width: 38%;
    height: 700px;
    margin: 2rem 0;
    position: relative;
    border-radius: 25px 20px 25px 20px;
    .signIn-cards{
        height: 100%;
        width: 100%;
        position: absolute;
        border-radius: 25px 25px 25px 25px;
        background-color: #abd6e4;
        img{
            width: 100%;
            height: 100%;
            margin-left: -28px;
            margin-top: -28px;
        }
        
    }

    .signIn-tags{
        position:absolute;
        width: 15rem;
        height: fit-content;
        padding: .2rem .5rem;
        border-radius: 6px;
        box-shadow: 1px 1px 1px gray;
        p{
            font-size: 1rem;
        }
    }
    #first{
        background-color: orange;
        left: -80px;
        top: 50px;
    }
    #second{
        background-color: green;
        bottom: 150px;
        left: -65px;
    }
    #third{
        background-color: white;
        color: blue;
        bottom: 140px;
        right: -50px;
    }
    @media screen and (max-width: 680px){
        width: 100%;
        height: 400px;
        .signIn-cards{
            img{
            margin-left:-5px;
            margin-top: -5px;
            }
        }
        .signIn-tags{
            width: 6rem;
            p{
                margin: .3rem;
                font-size: .6rem;
            }
        }
        
        #first{
            left: -15px;
        }
        #second{
            left: -15px;
            bottom: 70px;
        }
        #third{
            right: -20px;
            bottom: 20px;
        }
    }
    
`
export default SignIn