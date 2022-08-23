import React from "react"

const Button = (props) => {
  const { color, children, type, onClick, ref } = props

  if (type === "circle") {
    return (
      <button onClick={onClick} className={`btn circle ${color}`}>
        {children}
      </button>
    )
  }

  return <button ref={ref} className={`btn ${color}`}>{children}</button>
}

export default Button
