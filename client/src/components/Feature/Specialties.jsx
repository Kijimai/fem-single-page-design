import React from "react"

const Specialties = () => {
  return (
    <section>
      <div className="grid specialties">
        <div className="specialties__gdesign">
          <span className="specialties__text">Graphic Design</span>
        </div>
        <div className="specialties__ui-ux">
          <span className="specialties__text">UI/UX</span>
        </div>
        <div className="specialties__apps">
          <span className="specialties__text">Apps</span>
        </div>
        <div className="specialties__illustrations">
          <span className="specialties__text">Illustrations</span>
        </div>
        <div className="specialties__photography">
          <span className="specialties__text">Photography</span>
        </div>
        <div className="specialties__motion">
          <span className="specialties__text">Motion Graphics</span>
        </div>
      </div>
    </section>
  )
}

export default Specialties
