import { useState } from "react"
import '../style/Filter.css'

const Filter = () => {
    const [keyWords, setKeyWords] = useState("")
    const handleSearch = (e) => {
        setKeyWords(e.target.value)
    }

    return (
        <div className="filter-container">
            <label>搜尋</label>
            <input onChange={(e) => handleSearch(e)}></input>
        </div>
    )
}

export default Filter