import { useState } from "react"
import Filter from './feature/Filter'
import Cards from './feature/Cards'

export default function App() {
  const [keywords, setKeywords] = useState("")

  return (
    <>
      <div className="App">
        <Filter keywords={keywords} setKeywords={setKeywords}></Filter>
        <Cards keywords={keywords}></Cards>
      </div>
    </>
  );
}
