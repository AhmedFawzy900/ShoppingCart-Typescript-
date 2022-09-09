import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Head>
        <h2>Shopping Cart</h2>
        <ul>
            <li><a href='#' className='active'>Home</a></li>
            <li><a href='#' >Contact</a></li>
            <li><a href='#' >About</a></li>
            <li><a href='#' >Categerios</a></li>
        </ul>
    </Head>
  )
}

export default Header
const Head = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
background: #444343;
margin: 0;
color: #eee;
padding: 0 20px;
height: 70px;
ul{
    display: flex;
    list-style: none;
    width: 30%;
    justify-content: space-evenly;

}
li{

    a{
        font-size: 19px;
        text-decoration: none;
    }
   a.active{
        color:#eee;     
       
    }
    a:not(.active){
        color: #a9a9a9;
  
    }
    a:hover{
        color: #eee;
    }
}
`