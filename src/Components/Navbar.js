import React from 'react'
import rishabh from './rishabh.avif'
export default function Navbar() {
    
    const onclick = ()=>{


        let a= document.querySelector('#menu')
        let b = document.querySelector('.header')
    
        if (b.style.display ==='none') {
                b.style.display = 'flex'
                a.innerHTML = 'X'
                a.style.fontSize = '2.5rem'
            }
            else {
                b.style.display = 'none'
                a.innerHTML = `<div class="burger"></div>
                <div class="burger"></div>
                <div class="burger"></div>`
            }
                
    }
 
    
    return (<>
        <header className="header">
        <div className="user">
            <img src={rishabh} alt=""/>
            <h3 className="name">Rishabh Goswami</h3>
            <p>Web developer</p>
        </div>

        <nav className="navbar">
            <ul>
                <a href="#home">
                    <li>Home</li>
                </a>
                <a href="#about">
                    <li>About</li>
                </a>
                <a href="#education">
                    <li>Education</li>
                </a>
                {/* <a href="/">
                    <li>Portfolio</li>
                </a> */}
                <a href="#contact">
                    <li>Contact</li>
                </a>
            </ul>
        </nav>
        
    </header>
    <div id="menu" onClick={onclick} class="fa fa-bars">
        <div class="burger"></div>
        <div class="burger"></div>
        <div class="burger"></div>
    </div>
    </>
    )
}
