import React from 'react'
import architect from './images/architect.png'

const OtherFeatures = () => {
  return (
<section className="moreFeatures">
    <div className="description">
        <div className="featureTitle">
            <div className="div1"></div>
            <h2>Features you will <br /> love & enjoy</h2>
        </div>
<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
   

    <div className="descBox">
        <h3>Dexktop & Mobile Version</h3>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
    </div>
    <div className="descBox">
        <h3>Drag & Drop Builder</h3>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
    </div>
    <div className="descBox">
        <h3>Super Easy to Edit</h3>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
    </div>
    <div className="descBox">
        <h3>Dexktop & Mobile Version</h3>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
    </div>
    </div>

<div className="featureImg">
        <button>10+Year <br/>
       <span>Experience</span> </button>
    <img src={architect} />
</div>
</section>
  )
}

export default OtherFeatures;