import '../style/MobProperty.css'

const SortProperties = ({ property }) => {
    if (!property) return

    const propertyList = {
        "3": [],
        "2": [],
        "1": [],
        "S": []
    }

    const labelMap = {
        "3": "弱點",
        "2": "抵抗",
        "1": "無效",
        "S": "特殊"
    };

    const propertyMap = {
        "H": { type: "聖", class: "holy" },
        "F": { type: "火", class: "fire" },
        "I": { type: "冰", class: "ice" },
        "S": { type: "毒", class: "poison" },
        "L": { type: "雷", class: "lighting" },
    }

    for (let i = 0; i < property.length - 1; i += 2) {
        const type = property[i];
        const level = property[i + 1];

        if (propertyList[level] && propertyMap[type]) {
            if (type === "H" && level === "S") {
                propertyList[level].push({
                    "value": "可治癒",
                    "style": "healing"
                });
            } else {
                propertyList[level].push({
                    "value": propertyMap[type]["type"],
                    "style": propertyMap[type]["class"]
                });
            }
        }
    }

    return (
        <div className="mob-card-col-property-container">
            {Object.entries(propertyList).map(([level, types]) => {
                if (types.length === 0) return null;
                return (
                    <div key={level} className="mob-card-col-property">
                        <div>{labelMap[level]}：</div>
                        {types.map((item, idx) => (
                            <div key={idx} className={`mob-property-style mob-property-style-${item.style}`}>
                                {item.value}
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}

export default SortProperties