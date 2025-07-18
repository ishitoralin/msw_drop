import { useState, useEffect } from "react";
import '../style/Filter.css'

const Filter = ({ keywords, setKeywords }) => {
    const [inputValue, setInputValue] = useState(keywords);

    useEffect(() => {
        const delay = setTimeout(() => {
            setKeywords(inputValue);
        }, 300);

        return () => clearTimeout(delay);
    }, [inputValue, setKeywords]);

    return (
        <div className="filter-container">
            <label>搜尋</label>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
};

export default Filter;
