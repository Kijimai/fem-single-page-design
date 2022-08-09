import React from "react"

const Button = (props) => {
  const { color, children } = props
  return <button className={`btn ${color}`}>{children}</button>
}

export default Button
