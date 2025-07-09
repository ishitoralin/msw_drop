import React, { useCallback } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '../style/Flow.css';

import TextUpdateNode from '../components/TextUpdaterNode';

const initialNodes = [
    { id: '1', position: { x: 300, y: 300 }, data: { label: '1' } },
    { id: '2', position: { x: 300, y: 400 }, data: { label: '2' } },
    { id: '3', position: { x: 300, y: 500 }, data: { label: '3' }, type: 'textUpdater' },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
const nodeTypes = {
    textUpdater: TextUpdateNode
}

export default function App() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const handleAddNode = () => {
        setNodes([...nodes, {
            id: "4",
            position: { x: 50, y: 50 },
            data: { label: '4' },
        }])
    }

    return (
        <>
            <div>
                <button onClick={() => handleAddNode()}>add+++</button>
            </div>
            <div className='flow-container'>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    proOptions={{ hideAttribution: true }}
                    nodeTypes={nodeTypes}
                >
                    <Controls />
                    <MiniMap />
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
            </div>
        </>
    );
}