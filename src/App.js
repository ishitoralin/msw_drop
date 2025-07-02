import { useState } from "react"
import Filter from './feature/Filter'
import Cards from './feature/Cards'

export default function App() {


  return (
    <>
      <div className="App">
        <Filter></Filter>
        <Cards></Cards>
      </div>
    </>
  );
}
