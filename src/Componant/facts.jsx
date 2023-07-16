import React from 'react'
import ribon from './images/icons/ribon.png'
import projects from './images/icons/projects.png'
import customers from './images/icons/customers.png'
import email from './images/icons/email.png'




const fact ={paddingBottom: "4rem"}
const Facts = ()=> {
  return (
<section style={fact}>
<div className="factsTitle">
    <h3>Some Facts</h3>
<p>There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration.</p>
</div>

<div className="box">
    <div className="boxborder">
        <img src={ribon} alt="" />
<h1>54</h1>
<p>Awards Winnings</p>
    </div>
    <div className="boxborder">
        <img src={projects} alt=""/>
        <h1>1458</h1>
<p>Awards Winnings</p>
    </div>
    <div className="boxborder">
        <img src={email} alt="" />
        <h1>590</h1>
<p>Awards Winnings</p>
    </div>
    <div className="boxborder">
        <img src={customers} alt="" />
        <h1>22578</h1>
<p>Awards Winnings</p>
    </div>
</div>
</section>
  )
}
// Successfully added facts section




export default Facts