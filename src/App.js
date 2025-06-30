import { useState } from "react"
import Cards from './feature/Cards'

export default function App() {
  const [keyWords, setKeyWords] = useState("")
  const handleSearch = (e) => {
    setKeyWords(e.target.value)
  }

  return (
    <>
      <div className="App">
        <input onChange={(e) => handleSearch(e)}></input>
        <Cards keyWords={keyWords}></Cards>
      </div>
    </>
  );
}
