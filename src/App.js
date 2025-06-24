import { useState } from "react"

const Main = () => {
  const [count, setCount] = useState([1, 2, 3, 4, 5]);
  return (
    <>
      {count.map((item, index) => {
        return (
          <div key={index}>row: {item}</div>
        )
      })}
    </>
  )
}

export default Main;