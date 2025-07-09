import { useCallback } from 'react';
import { Handle } from '@xyflow/react';

const TextUpdaterNode = (props) => {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node">
            <div>
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" onChange={onChange} className="nodrag" />
            </div>
            <Handle type="target" position="top" />
            <Handle type="source" position="right" id="a" />
            <Handle type="source" position="bottom" id="b" />
        </div>
    );
}

export default TextUpdaterNode;