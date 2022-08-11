import React from "react"
import Button from "../Button/Button"
import amyImg from "../../assets/image-amy.webp"

const About = () => {
  return (
    <section>
      <div className="about">
        <img className="about__photo" src={amyImg} alt="Amy smiling" />
        <div className="about__info-container">
          <h2>I'm Amy, and I'd love to work on your next project</h2>
          <p>
            I love working with others to create beautiful design solutions.
            I've designed everything from brand illustrations to complete mobile
            apps. I'm also handy with a camera!
          </p>
          <Button color="light-red">Free Consultation</Button>
        </div>
      </div>
    </section>
  )
}

export default About
