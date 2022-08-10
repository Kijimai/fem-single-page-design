import React from "react"
import Button from "../Button/Button"
import siteLogo from "../../assets/logo.svg"
const Navigator = () => {
  return (
    <div className="container">
      <header className="navigator">
        <div className="navigator__site-logo">
          <img src={siteLogo} alt="site logo" />
        </div>
        <nav className="navigator__nav">
          <Button color="dark">Free Consultation</Button>
        </nav>
      </header>
    </div>
  )
}

export default Navigator
