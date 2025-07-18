// src/router/routes.jsx
import { Routes, Route } from 'react-router-dom'
import CardsPage from '../pages/CardsPage.js'
import FlowPage from '../pages/FlowPage.js'
import ChartPage from '../pages/ChartPage.js'

export default function AppRoutes({ keywords }) {
    return (
        <Routes>
            <Route path="/" element={<CardsPage keywords={keywords} />} />
            <Route path="/flow" element={<FlowPage keywords={keywords} />} />
            <Route path="/chart" element={<ChartPage keywords={keywords} />} />
        </Routes>
    )
}
