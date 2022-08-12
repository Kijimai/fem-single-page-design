import React from "react"
import Button from "../Button/Button"
const Booking = () => {
  return (
    <section>
      <div className="booking">
        <h2>Book a call with me</h2>
        <div className="booking__info">
          <p>
            I'd love to have a chat to see how I can help you. Thje best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <Button color="light-red">Free Consultation</Button>
      </div>
    </section>
  )
}

export default Booking
