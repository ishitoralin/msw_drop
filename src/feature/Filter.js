import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import '../style/Filter.css'

const Filter = ({ keywords, setKeywords }) => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState(keywords);

    useEffect(() => {
        const delay = setTimeout(() => {
            setKeywords(inputValue);
        }, 300);

        return () => clearTimeout(delay);
    }, [inputValue, setKeywords]);

    return (
        <div className="filter-container">
            <button onClick={() => navigate('/flow')}>切換</button>
            <label>搜尋</label>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
};

export default Filter;
