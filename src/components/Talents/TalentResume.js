import React from 'react';
import styled from 'styled-components';
import BluePlus from '../../assets/icons/blue-plus.svg';
import RedPlus from '../../assets/icons/red-plus.svg';
import Download from '../../assets/icons/DownloadSimple.svg';

const TalentResume = () => {
  return (
    <TalentResumeStyle>
      <div className='head'>
        <div className='left'>
          <h2>FELIX JOHN PHILIP</h2>
          <div className='inn'>
            <p>Add About</p>
            <img src={BluePlus} alt="plus-sign" />
            </div>
        </div>
        <p className='prev'>Preview Resume</p>
      </div>
      <div className='sect'>
        <h3>Skills</h3>
        <div className='skill-flex'>
          <p>Add Skills</p>
          <img src={BluePlus} alt="plus-sign" />
        </div>
        <div className='options-cover'>
          <div className='options'>
            <p>Communication</p>
            <img src={RedPlus} alt="plus-sign" />
          </div>
          <div className='options'>
            <p>Problem solving</p>
            <img src={RedPlus} alt="plus-sign" />
          </div>
        </div>
      </div>
      <div className='sect'>
        <h3>Languages</h3>
        <select name="languages" id="languages">
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
        </select>
        <div className='options-cover'>
          <div className='options'>
            <p>English</p>
            <img src={RedPlus} alt="plus-sign" />
          </div>
          <div className='options'>
            <p>French</p>
            <img src={RedPlus} alt="plus-sign" />
          </div>
        </div>
      </div>
      <div className='sect'>
        <h3>Education</h3>
        <form>
          <div className='input-cover'>
            <label htmlFor="certification">
              Certification
            </label>
            <input type="text" />
          </div>
          <div className='input-cover'>
            <label htmlFor="certification">
              Year
            </label>
            <input type="text" />
          </div>
          <div className='button'>
          <button><p>Add Education</p> <img src={BluePlus} alt="plus-sign" /></button>
          </div>
        </form>
      </div>
      <div className='sect'>
        <h3>Experience</h3>
        <form>
          <div className='input-cover'>
            <label htmlFor="company">
              Company
            </label>
            <input type="text" />
          </div>
          <div className='input-cover'>
            <label htmlFor="year">
              Year
            </label>
            <input type="text" />
          </div>
          <div className='input-cover'>
            <label htmlFor="post">
              Post
            </label>
            <input type="text" />
          </div>
          <div className='input-cover'>
            <label htmlFor="about">
              About
            </label>
            <input type="text" />
          </div>
          <div className='button'>
          <button><p>Add Experience</p> <img src={BluePlus} alt="plus-sign" /></button>
          </div>
        </form>
      </div>
      <div className='flex-button'>
        <button><p>Download</p> <img src={Download} alt="download button" /></button>
        <button>Update</button>
      </div>
    </TalentResumeStyle>
  )
}

const TalentResumeStyle = styled.div`
width:100%;
padding:2rem;
p, h2, h3{
  margin:0;
}
P{
  font-size:1.5rem;
}
h3{
  font-size:2rem;
}
  .head{
    display:flex;
    justify-content:space-between;
    .left{
      h2{
        color: #121212;
        font-size:2.5rem;
      }
      p{
        color: rgba(9, 80, 205, 0.65);
      }
      .inn{
        display:flex;
        gap:1rem;
        margin:1rem 0;
      }
    }
    .prev{
      color: rgba(0, 0, 0, 0.5);
      font-size:1.5rem;
    }
  }
  .sect{
    margin:2rem 0;
    h3{
      color: rgba(0, 0, 0, 0.7);
    }
    .skill-flex{
      display:flex;
      gap:1rem;
      p{
        font-size:1rem;
        color: rgba(9, 80, 205, 0.65);
      }
    }
    .options-cover{
      display:flex;
      gap:1rem;
      margin:1rem 0;
      .options{
        display:flex;
        border: 1px solid #0950CD;
        filter: drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.25));
        border-radius: 40px;
        padding:.8rem 1.5rem;
        gap:1rem;
        p{
          font-size:1rem;
        }
      }
    }
    select{
      width:30%;
      padding: 1rem 1.5rem;
      border: 1px solid #0950CD;
      border-radius: 40px;
      font-size:1rem;
      outline:none;
    }
  }
  .input-cover{
    position:relative;
    label{
      position:absolute;
      background-color:#FFF;
      left:25px;
      top:5px;
    }
    input{
      border: 1px solid #0950CD;
      border-radius: 40px;
      width:35%;
      padding:1.5rem 2rem;
      margin: 1rem 0;
    }
  }
  form{
    .button{
      display:flex;
      justify-content:right;
      width:40%;
      button{
        background-color:transparent;
        border:none;
        cursor: pointer;
        display:flex;
        color: rgba(9, 80, 205, 0.5);
        p{
          font-size:1.5rem;
        }
      }
    }
  }
  .flex-button{
    display:flex;
    justify-content:center;
    gap:1rem;
    margin:1rem 0;
    button{
      font-size:1rem;
      border-radius: 10px;
      padding:1rem;
    }
    button:first-child{
      border: 1px solid #0950CD;
      background-color:transparent;
      display:flex;
    }
    button:last-child{
      background: #0950CD;
      border:none;
      padding:1rem 2rem;
    }
  }
  @media screen and (max-width: 680px){
    padding:1rem;
    p{
      font-size:1rem;
    }
    .head{
      .left{
        h2{
          font-size:1.5rem;
        }
      }
      .prev{
        display:none;
      }
    }
    .sect{
      .options-cover{
        display:none;
      }
      .input-cover{
        input{
          width:85%;
          padding:.8rem 1rem;
        }
      }
      select{
        width:95%;
        padding:.8rem 1rem;
        font-size:1rem;
      }
      form{
        .button{
          align-items:center;
          gap:2em;
          button{
            p{
              font-size:1rem;
            }
          }
        }
      }
    }
    .flex-button{
      justify-content:left;
        button{
          font-size:.8rem;
          padding: .5rem 1rem;
        }
        button:last-child{
          width:45%;
        }
      }
      form{
        .button{
          width:60%;
          justify-content:left;
          gap:3rem;
          align-items:center;
          button{
            display:flex;
            gap:1rem;
            p{
              font-size:1rem;
              width:80%;
            }
          }
        }
      }
      .flex-button{
        width:100%;
        button{
          cursor: pointer;
        }
        button:first-child{
          width:40%;
          display:flex;
          justify-content:center;
          img{
            display:block;
          }
          p{
            display:none;
          }
        }
        button:last-child{
          width:50%;
        }
      }}

`

export default TalentResume