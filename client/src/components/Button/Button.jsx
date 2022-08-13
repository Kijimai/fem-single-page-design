import React from "react"

const Button = (props) => {
  const { color, children, type } = props

  if (type === "circle") {
    return <button className={`btn circle ${color}`}>{children}</button>
  }

  return <button className={`btn ${color}`}>{children}</button>
}

export default Button
