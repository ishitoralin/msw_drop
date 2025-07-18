import { useState } from 'react'
import PageSwitcher from '../components/PageSwitcher'
import Filter from '../feature/Filter'
import Cards from '../feature/Cards'

const CardsPage = () => {
    const [keywords, setKeywords] = useState("")

    return (
        <>
            <div className="PageSwitcher">
                <PageSwitcher />
            </div>
            <div className="App">
                <Filter keywords={keywords} setKeywords={setKeywords} />
                <Cards keywords={keywords} />
            </div>
        </>
    )
}

export default CardsPage