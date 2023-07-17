import React from 'react'
import './header.css'
import banner from './images/banner.png'

export default function Header() {
  return (
    <header>
        <nav>
            <div class="logo">
                G3 Architects
            </div>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
{/* <!-- navigation seciton complated here --> */}
<div class="headerDescription">
    <h2>Brand new <br/> group of architects</h2>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
    <button>Explore More</button>
</div>

<div class="headerImg">
    <img src={banner} />
</div>
    </header>
  )
}
