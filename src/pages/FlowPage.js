import { useNavigate } from 'react-router-dom'
import Flow from '../feature/Flow'

export default function FlowPage() {
    const navigate = useNavigate()

    return (
        <>
            <div className="App">
                <button onClick={() => navigate('/')}>切換回卡片模式</button>
                <Flow></Flow>
            </div>
        </>
    )
}
