import { useState, useCallback } from 'react'
import ReactFlow, {
    Background,
    Controls,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
} from 'reactflow'
import 'reactflow/dist/style.css'  // 必須引入樣式
import '../style/Flow.css'

const initialNodes = [
    {
        id: '1',
        position: { x: 100, y: 50 },
        data: { label: '怪物 A' },
        draggable: true,
    },
    {
        id: '2',
        position: { x: 300, y: 150 },
        data: { label: '掉落物 X' },
        draggable: true,
    },
    {
        id: '3',
        position: { x: 300, y: -50 },
        data: { label: '出現地圖：森林' },
        draggable: true,
    },
]

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', label: '掉落' },
    { id: 'e3-1', source: '3', target: '1', label: '出現地' },
]

const Flow = () => {
    const [nodes, setNodes] = useState(initialNodes)
    const [edges, setEdges] = useState(initialEdges)

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    )

    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    )

    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        []
    )

    return (
        <div className='flow-container' style={{ height: '500px', width: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Background gap={12} color="#444" />
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default Flow
