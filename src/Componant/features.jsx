import React from 'react'
import './features.css'
import team1 from './images/team1.png'
import team2 from './images/team2.png'
import team3 from './images/team3.png'
import team4 from './images/team4.png'


export default function Features() {
  return (
    <section className="features">
    <div className="featureImages">
        <img src={team1} alt=""/>
        <img src={team2} alt=""/>
        <img src={team3} alt=""/>
        <img src={team4} alt=""/>
    </div>

<div className="featureDesc">
    <h3>Quick list <span className="span1">of Our</span> <br/> <span className="span2">Features </span></h3>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
    <button>Explore More</button>
</div>
</section>
  )
}
