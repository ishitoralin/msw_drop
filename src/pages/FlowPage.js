import { useNavigate } from 'react-router-dom'

export default function FlowPage() {
    const navigate = useNavigate()

    return (
        <>
            <div className="App">
                <button onClick={() => navigate('/')}>切換回卡片模式</button>
            </div>
        </>
    )
}
