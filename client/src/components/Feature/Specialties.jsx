import React from "react"
import {
  graphicDesign,
  apps,
  illustrations,
  motionGraphics,
  photography,
  uiUx,
} from "../../assets/allAssets"

const Specialties = () => {
  return (
    <section>
      <div className="grid specialties">
        <div className="specialties__gdesign">
          <div className="specialties__content">
            <img
              className="specialties__image"
              src={graphicDesign}
              alt="Graphic design"
            />
            <span className="specialties__text"> Graphic Design</span>
          </div>
        </div>
        <div className="specialties__ui-ux">
          <div className="specialties__content">
            <img className="specialties__image" src={uiUx} alt="UI/UX" />
            <span className="specialties__text">UI/UX</span>
          </div>
        </div>
        <div className="specialties__apps">
          <div className="specialties__content">
            <img className="specialties__image" src={apps} alt="Apps" />
            <span className="specialties__text">Apps</span>
          </div>
        </div>
        <div className="specialties__illustrations">
          <div className="specialties__content">
            <img
              className="specialties__image"
              src={illustrations}
              alt="Illustrations"
            />
            <span className="specialties__text">Illustrations</span>
          </div>
        </div>
        <div className="specialties__photography">
          <div className="specialties__content">
            <img
              className="specialties__image"
              src={photography}
              alt="Photography"
            />
            <span className="specialties__text">Photography</span>
          </div>
        </div>
        <div className="specialties__motion">
          <div className="specialties__content">
            <img
              className="specialties__image"
              src={motionGraphics}
              alt="Motion graphics"
            />
            <span className="specialties__text">Motion Graphics</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specialties
