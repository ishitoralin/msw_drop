import { useState } from 'react'
import Filter from '../feature/Filter'
import Cards from '../feature/Cards'

export default function CardsPage() {
    const [keywords, setKeywords] = useState("")

    return (
        <>
            <div className="App">
                <Filter keywords={keywords} setKeywords={setKeywords} />
                <Cards keywords={keywords} />
            </div>
        </>
    )
}
