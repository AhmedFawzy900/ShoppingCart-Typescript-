import React from 'react'
import styled from 'styled-components'
import heart from './images/heart.png'
function Footer() {
  return (
    <End>
    <p>Made By <div>Ahmed Attia</div></p>   
     <img src={heart} alt="heart" />
    </End>
  )
}

export default Footer

const End = styled.div`

display: flex;
justify-content: center;
align-items: center;
background: #3b3b3b;
height: 88px;
padding: 15px;
color: #eee;
font-size: 26px;

img{
    width: 31px;

}
p{
    margin-right:8px;
     div{
    font-family:cursive;
    display:inline-block;
    }

}
`