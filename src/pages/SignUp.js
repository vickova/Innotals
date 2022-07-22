import React, {useState} from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/Logo.png';
import Fine from '../assets/images/fine.png';
import Google from '../assets/images/google.png';
import Github from '../assets/images/git.png';
import Question from '../assets/images/Q.png';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';





const SignUp = () => {
    const [closePassword, setClosePassword] = useState(false);

  return (
    <SignInStyle>
        <div>
            <div className='logo-container' style={{margin: '1rem 0'}}>
                <img src={Logo} alt="Logo"  style={{width: '3.5rem', height: '3.5rem'}}/>
            </div>
            <div>
                <h2>Join Talsgrow</h2>
                <div className='sign-flex'>
                    <FormStyleLeft>
                        <div className='form-cover'>
                            <form action="">
                                <div className='input-cover'>
                                <label htmlFor="email">Full Name</label>
                                <input type="text" name='full name' id='fullname' placeholder='Felix Simon'/>
                            </div>
                            <div className='input-cover'>
                                <label htmlFor="email">Email Address</label>
                                <input type="text" name='email' id='signUpemail' placeholder='example247@gmail.com'/>
                            </div>
                            <div className='input-cover' id='password-cover'>
                                <label htmlFor="password">Password</label>
                                <input type={closePassword?'text': 'password'} name='password' id='password' placeholder='.......'/>
                                <div style={{cursor:'pointer'}} className='eye' onClick={()=> setClosePassword(!closePassword)}>
                                { closePassword? (
                                <FaEye style={{width:'30px', height:'30px'}}/>):(
                                <FaEyeSlash style={{width: '30px', height:'30px'}}/>)
                                    }</div>
                            </div>
                            <ButtonStyle><p>Sign Up</p></ButtonStyle>
                            <p>Want to become a member? <span>Join now</span></p>
                            </form>
                        </div>
                    </FormStyleLeft>
                    <SignInLeft>
                        <div className='signIn-cards'>
                            <img src={Fine} alt="singUp" />
                            <div>
                                <ButtonStyle style={{backgroundColor: '#FFF', color: '#1f6bef', fontWeight:'600'}}><span style={{border: '3px solid #0950CD'}}><img src={Google} alt="google-logo" /></span> <p>Login With Google</p></ButtonStyle>
                                <ButtonStyle style={{backgroundColor:'#1f6bef'}}><span><img src={Github} alt="google-logo" /></span> <p>Login With Github</p></ButtonStyle>
                            </div>
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
    border-bottom: 1px solid #d8d6d6;
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
    color: #504e4e;
    margin: 2rem 2rem 0 3rem;
    font-size: 2.5rem;
    font-family: 'Inter', sans-serif;
}
p, label, span{
    font-family: 'Ubuntu', sans-serif;
}
.question-sect{
    display: flex;
    justify-content: flex-end;
    padding: 3rem;
    img{
        margin:0 .5rem;
        width: 40px;
        height: 40px;
    }
}
@media screen and (max-width: 1040px){
    .sign-flex{
        display: flex;
        flex-direction: column-reverse;
        margin: 2rem;
    }
    
}

`
const FormStyleLeft = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    .form-cover{
        width: 100%;
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
    #password-cover{
        input::placeholder{
            font-size: 4rem;
        }
        .eye{
            width: 35px;
            height: 35px;
            position: absolute;
            right: 30px;
            top: 45px;
            cursor: pointer;
            display:flex;
            justify-content:center;

        }
    }
    #signUpemail, #password, #fullname{
        border-radius: 50px;
        height: 55px;
        margin: 2rem 0;
        font-size: 1rem;
        width: 92%;
        border: 1px solid #0950CD;
        padding:0 1.5rem;
    }
    #signUpemail:focus, #password:focus, #fullname:focus{
        outline: 2px solid #0950CD;
    }
    span{
        color: orange;
        cursor:'pointer';
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
        margin-top: 150px;
        p, label, span{
            font-size: 1rem;
        }
        #signUpemail, #password, #fullname{
            padding: 0 1rem;
            font-size: .8rem;
        }
    }
`
const ButtonStyle = styled.button`
        padding: 1rem 2rem;
        border-radius: 50px;
        margin: 1rem 0;
        font-size: 1rem;
        width: 100%;
        background-color: #0950CD;
        border: none;
        color: #FFF;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        p{
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
        @media screen and (max-width: 680px){
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
`
const SignInLeft = styled.div`
    color: #fff;
    width: 40%;
    height: fit-content;
    border-radius: 25px 40px 25px 40px;
    box-sizing: border-box;
    margin: 2rem 0;
    position: relative;
    .signIn-cards{
        justify-content: center;
        gap:0;
        align-items:center;
        height: fit-content;
        img{
            width: 100%;
            height: 100%;
        }
        div{
            margin: 3rem 0;
            position: absolute;
            top: 250px;
            left: 50px;
            width: 80%;
        }
        
    }

    @media screen and (max-width: 1040px){
        width: 100%;
        display: flex;
        justify-content: center;
        .signIn-cards{
            width: 100%;
        }
        
    }
    @media screen and (max-width: 680px){
        height: 400px;
        .signIn-cards{
            div{
                position: static;
                top:0;
                left: 0;
                width: 100%;
                button{
                    box-shadow: 2px 2px 3px 3px #e5e2e2;
                }
            }
        }
    }
    @media screen and (max-width: 360px){
        height: 300px;
        .signIn-cards{
            width: 90%;
        }
        .signIn-tags{
            width:100px;
            padding: .2rem .5rem;
            p{
                font-size: .8rem;
            }
        }
        
    }
    
`
export default SignUp