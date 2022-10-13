import React from 'react';
import styled from 'styled-components';
import Chat from '../../assets/icons/chat-image.svg';
import BluePlus from '../../assets/icons/blue-plus.svg';
import BlueCam from '../../assets/icons/Blue-cam.svg';
import Send from '../../assets/icons/send.svg';
import Fred from '../../assets/images/fred.png';




const IsraelCommunity = ({name}) => {
  return (
    <IsraelStyle>
      <div className='top'>
        <h2 style={{color:'#FFF'}}>{name}</h2>
        <div className='inn'>
          <p>Assign Task</p>
          <img src={Fred} alt="israel" />
        </div>
      </div>
      <div className='messages'>
        <div className='receiver'>
          <img src={Chat} alt="chat" />
          <p>Hi, guys, how was your day</p>
        </div>
      </div>
      <div className='messages'>
        <p className='sender'>Hello isreal, Hows the family and i hope
          you’ve thought about what i told you the
          other day and now have an answer?
        </p>
      </div>
      <form>
        <div className='chatsend'>
          <div className='cameraplus'>
            <img src={BluePlus} alt="plus" />
            <img src={BlueCam} alt="camera" />
          </div>
          <input type="text" />
          <img className='send' src={Send} alt="send" />
        </div>
      </form>
    </IsraelStyle>
  )
}

const IsraelStyle = styled.div`
width:100%;
margin:2rem;
.top{
  background-color:#0950CD;
  color:#FFF;
  padding:1rem;
  border: 1px solid #0950CD;
  border-radius: 10px 10px 0px 0px;
  display:flex;
  justify-content:space-between; 
  .inn{
    display:flex;
    gap:1rem;
    img{
      height:66px;
      width:66px;
    }
  }
}
.messages{
  position:relative;
  .receiver{
    display:flex;
    position:absolute;
    align-items:center;
    gap:1rem;
    p{
      background-color: #0950CD;
      color:#FFF;
    }
  }
  .sender{
    background-color: #F0F0F0;
    position:absolute;
    top:20px;
    right:0;
    width:30%;
  }
  p{
    padding:1rem;
    font-size:1.5rem;
    border-radius:5px;
  }
}
form{
  margin: 200px 0 0 0;
  position:fixed;
  bottom:60px;
  width:83%;
  .chatsend{
    position:relative;
  }
  .cameraplus{
    display:flex;
    position:absolute;
    top:20px;
    gap:1rem;
    left:20px;
  }
  input{
    width:88%;
    padding:1.5rem 2rem 1.5rem 8rem;
    border: 3px solid #0950CD;
    border-radius: 40px;
    outline:0;
    font-size:1.5rem;
    color:#121212;
  }
  .send{
    position:absolute;
    right:40px;
    top:20px;
  }
}
@media screen and (max-width: 680px){
  height:100vh;
  margin:1rem;
  .messages{
    .receiver{
      img{
        width:40px;
        height:40px;
      }
    }
    .sender{
      width:75%;
      top:100px;
    }
    p{
      font-size:1rem;
    }
  }
  form{
    width:60%;
    bottom:0;
    input{
      padding:1rem 3.2rem 1rem 5.5rem;
      font-size:1rem;
    }
    .send, .cameraplus{
      gap:.5rem;
      top:15px;
    }
    .cameraplus img, .send{
      width:24px;
      height:24px;
    }
    .send{
      right:-100px;
    }
  }
}
`

export default IsraelCommunity;