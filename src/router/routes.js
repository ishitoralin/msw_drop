// src/router/routes.jsx
import { Routes, Route } from 'react-router-dom'
import CardsPage from '../pages/CardsPage.js'
import FlowPage from '../pages/FlowPage.js'

export default function AppRoutes({ keywords }) {
    return (
        <Routes>
            <Route path="/" element={<CardsPage keywords={keywords} />} />
            <Route path="/flow" element={<FlowPage keywords={keywords} />} />
        </Routes>
    )
}
