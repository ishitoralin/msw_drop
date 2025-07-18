import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../style/PageSwitcher.css'

const routes = [
    { path: '/', label: '卡片模式' },
    { path: '/flow', label: '流程圖模式' },
    { path: '/chart', label: '報表模式' },
]

export default function PageSwitcher() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className="page-switcher">
            {routes.map(({ path, label }) => (
                <button
                    key={path}
                    className={
                        'page-switcher-btn' + (location.pathname === path ? ' active' : '')
                    }
                    onClick={() => navigate(path)}
                >
                    {label}
                </button>
            ))}
        </div>
    )
}
