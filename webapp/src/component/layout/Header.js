import React from 'react'



export const Header = () => {
    return (
        <div>
             <header class="hero">
                <div id="navbar" class="navbar top">
                    <h1 class="logo">
                        <span class="text-primary">
                            <i class="fab fa-affiliatetheme"></i>
                                CITIWIDE
                        </span>
                                Funding
                    </h1>
                        <nav>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#purchase">Purchase</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
            </div>
                <div class="content">
                <h1>
                    Your #1 Source For Everything Real-Estate
                </h1>
                    <p>
                        We provide world class financial assistance
                    </p>
        <a href="#about" class="btn"
          ><i class="fas fa-angle-double-down"></i> Read More</a
        >
      </div>
    </header>
        </div>
    )
}

export default Header