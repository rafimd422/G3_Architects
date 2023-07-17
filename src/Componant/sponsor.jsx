import React from 'react'
import './sponsor.css'
import amazon from './images/sponsors/amazon.png'
import telarama from './images/sponsors/telerama.png'
import spotify from './images/sponsors/spotify.png'
import google from './images/sponsors/google.png'
import figma from './images/sponsors/figma.png'
const Sponsor = () => {
  return (
<section>
<div className="sponsorTitle">
<h1>Our sponsors</h1>
<p>There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration.</p>
</div>
<div className="sponsors">
    <img src={spotify} alt="" />
    <img src={amazon} alt="" />
    <img src={google} alt="" />
    <img src={telarama} alt="" />
    <img src={figma} alt="" />
</div>
</section>
  )
}
{/* <!-- sponsors section done --> */}

export default Sponsor