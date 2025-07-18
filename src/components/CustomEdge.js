import {
    BaseEdge,
    EdgeLabelRenderer,
    getStraightPath,
    getSmoothStepPath,
    getBezierPath,
    useReactFlow,
} from '@xyflow/react';

import '../style/CustomEdge.css'

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) {
    const { deleteElements } = useReactFlow();
    const [edgePath, labelX, labelY] = getSmoothStepPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
    });

    return (
        <>
            <BaseEdge id={id} path={edgePath} />
            <EdgeLabelRenderer>
                <i style={{
                    transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
                }} className="bi bi-x-circle-fill edge-label" onClick={() => deleteElements({ edges: [{ id }] })}></i>
            </EdgeLabelRenderer>
        </>
    );
}