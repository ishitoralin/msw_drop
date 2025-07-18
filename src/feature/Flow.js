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
import CustomEdge from '../components/CustomEdge'
const parentWidth = 300
const parentHeight = 200
const numChildren = 2;
const childHeight = parentHeight / 5;

const initialChildNodes = Array.from({ length: numChildren }).map((_, i) => {
    const id = `${i + 1}-child`;
    return {
        id,
        parentId: '1',
        extent: 'parent',
        draggable: true,
        position: {
            x: (parentWidth - (parentWidth / 3)) / 2,
            y: 20 + 20 * (i + 1) + (i * childHeight),
        },
        data: { label: `Child ${i + 1}` },
        style: {
            width: parentWidth / 3,
            height: childHeight,
            backgroundColor: '#1e1e1e',
            border: '1px solid #555',
            color: '#fff',
        },
    };
});

const initialNodes = [
    {
        id: '1',
        position: { x: 100, y: 100 },
        data: { label: 'Parent Node' },
        style: {
            width: parentWidth,
            height: parentHeight,
            border: '2px solid #888',
            backgroundColor: '#1e1e1e',
        },
    },
    { id: '2', position: { x: 300, y: 400 }, data: { label: '2' } },
    { id: '3', position: { x: 300, y: 500 }, data: { label: '3' }, type: 'textUpdater' },
    ...initialChildNodes,
];
const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', type: 'custom-edge' },
    { id: '1c-2c', source: '1-child', target: '2-child', type: 'custom-edge' },
];

const nodeTypes = {
    textUpdater: TextUpdateNode
}

const edgeTypes = {
    'custom-edge': CustomEdge
}

export default function App() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const defaultEdgeOptions = { zIndex: 1 };
    const onConnect = useCallback(
        (connection) => {
            const edge = { ...connection, type: 'custom-edge' };
            setEdges((eds) => addEdge(edge, eds));
        },
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
                    colorMode="dark"
                    nodes={nodes}
                    edges={edges}
                    defaultEdgeOptions={defaultEdgeOptions}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    proOptions={{ hideAttribution: true }}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    fitView
                >
                    <Controls />
                    <MiniMap />
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
            </div>
        </>
    );
}