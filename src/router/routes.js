// src/router/routes.jsx
import { Routes, Route } from 'react-router-dom'
import CardsPage from '../pages/CardsPage.js'
import FlowPage from '../pages/FlowPage.js'
import ChartPage from '../pages/ChartPage.js'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<CardsPage />} />
            <Route path="/flow" element={<FlowPage />} />
            <Route path="/chart" element={<ChartPage />} />
        </Routes>
    )
}
