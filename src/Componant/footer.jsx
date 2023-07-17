import React from 'react'


const footerParent = {height: "100px",
    width: "100%",
    borderRadius: "6px",
    background: "#FFF4E7",
    paddingBottom: "1rem"}

const footerChildren = {
    textAlign: "center",
fontSize: "14px",
paddingTop: "3rem",
fontWeight:"600",
lineHeight:"20px"
}

const Footer = () => {
  return (
    <div>
      <footer style={footerParent}>
    <p style={footerChildren}>All rights reserved copyright@2023  <br />startup landing page design</p>
</footer>
    </div>
  )
}
export default Footer;