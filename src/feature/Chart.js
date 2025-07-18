import React, { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'

const cities = ['Taipei', 'Tokyo', 'New York', 'London', 'Paris']

// 產生隨機數據（模擬成長）
const generateData = (prevData) => {
    return cities.map((city, idx) => {
        const prev = prevData?.[city] ?? Math.floor(Math.random() * 1000)
        const next = Math.max(0, prev + Math.floor(Math.random() * 200 - 50))
        return { name: city, value: next }
    }).sort((a, b) => b.value - a.value)
}

const Chart = () => {
    const chartRef = useRef(null)
    const chartInstance = useRef(null)
    const dataRef = useRef({})
    const intervalRef = useRef(null)
    const [isPaused, setIsPaused] = useState(false)
    const [currentDate, setCurrentDate] = useState(new Date())
    const [speed, setSpeed] = useState(1000) // 更新速度 (ms)

    useEffect(() => {
        let instance

        if (chartRef.current) {
            instance = echarts.init(chartRef.current)
            chartInstance.current = instance
        }

        const updateChart = () => {
            const newData = generateData(dataRef.current)
            dataRef.current = Object.fromEntries(newData.map(d => [d.name, d.value]))

            const barColors = ['#2E4A8C', '#4A7C59', '#B8860B', '#8B0000', '#4682B4']

            // 根據螢幕寬度調整佈局
            const isMobile = window.innerWidth < 768
            const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024

            chartInstance.current.setOption({
                title: {
                    text: `City Population Bar Race - ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
                    left: 'center',
                    fontSize: isMobile ? 14 : 16,
                    top: isMobile ? 10 : 20
                },
                grid: {
                    left: isMobile ? 80 : 120,
                    right: isMobile ? 20 : 30,
                    top: isMobile ? 40 : 50,
                    bottom: isMobile ? 20 : 30
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.1],
                    axisLabel: {
                        fontSize: isMobile ? 12 : 18,
                        color: '#919191'
                    },
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    data: newData.map(item => item.name),
                    inverse: true,
                    animationDuration: 300,
                    animationDurationUpdate: 300,
                    axisLabel: {
                        fontSize: isMobile ? 12 : 18,
                        color: '#919191'
                    },
                    axisTick: {
                        show: false
                    }
                },
                series: [
                    {
                        realtimeSort: true,
                        name: 'Population',
                        type: 'bar',
                        data: newData.map(item => item.value),
                        label: {
                            show: true,
                            position: 'right',
                            valueAnimation: true,
                            fontSize: isMobile ? 12 : 18,
                            fontWeight: 'bold',
                            color: '#919191',
                            formatter: function (params) {
                                return params.value.toLocaleString()
                            }
                        },
                        itemStyle: {
                            color: function (params) {
                                return barColors[params.dataIndex % barColors.length]
                            }
                        }
                    }
                ],
                animationDuration: 300,
                animationDurationUpdate: 300,
                animationEasing: 'linear',
                animationEasingUpdate: 'linear'
            })
        }

        updateChart()

        const startInterval = () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
            intervalRef.current = setInterval(() => {
                if (!isPaused) {
                    setCurrentDate(new Date())
                    updateChart()
                }
            }, speed)
        }

        startInterval()

        // 監聽視窗大小變化
        const handleResize = () => {
            if (chartInstance.current) {
                chartInstance.current.resize()
                updateChart()
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
            chartInstance.current?.dispose()
            window.removeEventListener('resize', handleResize)
        }
    }, [isPaused, speed])

    const togglePause = () => {
        setIsPaused(!isPaused)
    }

    const changeSpeed = (newSpeed) => {
        setSpeed(newSpeed)
    }

    const resetData = () => {
        dataRef.current = {}
        setCurrentDate(new Date())
        if (chartInstance.current) {
            const newData = generateData({})
            dataRef.current = Object.fromEntries(newData.map(d => [d.name, d.value]))

            chartInstance.current.setOption({
                title: {
                    text: `City Population Bar Race - ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
                    left: 'center'
                },
                series: [{
                    data: newData.map(item => item.value)
                }]
            })
        }
    }

    return (
        <div style={{ width: '100%' }}>
            {/* 控制面板 */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: window.innerWidth < 768 ? '10px' : '20px',
                marginBottom: '20px',
                padding: '10px',
                // backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                flexWrap: window.innerWidth < 768 ? 'wrap' : 'nowrap',
                alignItems: 'center'
            }}>
                <button
                    onClick={togglePause}
                    style={{
                        padding: window.innerWidth < 768 ? '6px 12px' : '8px 16px',
                        backgroundColor: isPaused ? '#4CAF50' : '#919191',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        fontSize: window.innerWidth < 768 ? '12px' : '14px',
                        ':hover': {
                            backgroundColor: isPaused ? '#45a049' : '#757575'
                        }
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = isPaused ? '#45a049' : '#757575'
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = isPaused ? '#4CAF50' : '#919191'
                    }}
                    onMouseDown={(e) => {
                        e.target.style.backgroundColor = isPaused ? '#2E7D32' : '#424242'
                    }}
                    onMouseUp={(e) => {
                        e.target.style.backgroundColor = isPaused ? '#45a049' : '#757575'
                    }}
                >
                    {isPaused ? '▶️ 繼續' : '⏸️ 暫停'}
                </button>

                <button
                    onClick={resetData}
                    style={{
                        padding: window.innerWidth < 768 ? '6px 12px' : '8px 16px',
                        backgroundColor: '#2196F3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        fontSize: window.innerWidth < 768 ? '12px' : '14px'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#1976D2'
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#2196F3'
                    }}
                    onMouseDown={(e) => {
                        e.target.style.backgroundColor = '#0D47A1'
                    }}
                    onMouseUp={(e) => {
                        e.target.style.backgroundColor = '#1976D2'
                    }}
                >
                    🔄 重置
                </button>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: window.innerWidth < 768 ? '5px' : '10px',
                    fontSize: window.innerWidth < 768 ? '12px' : '14px'
                }}>
                    <label>速度:</label>
                    <select
                        value={speed}
                        onChange={(e) => changeSpeed(Number(e.target.value))}
                        style={{
                            padding: window.innerWidth < 768 ? '2px 4px' : '4px 8px',
                            fontSize: window.innerWidth < 768 ? '12px' : '14px'
                        }}
                    >
                        <option value={50}>很快 (0.05s)</option>
                        <option value={100}>快 (0.1s)</option>
                        <option value={500}>中等 (0.5s)</option>
                        <option value={1000}>慢 (1s)</option>
                        <option value={2000}>很慢 (2s)</option>
                    </select>
                </div>

                <div style={{
                    padding: window.innerWidth < 768 ? '6px 12px' : '8px 16px',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    fontSize: window.innerWidth < 768 ? '12px' : '14px',
                    textAlign: 'center',
                    color: 'black'
                }}>
                    📅 {currentDate.toLocaleDateString()} {currentDate.toLocaleTimeString()}
                </div>
            </div>

            {/* 圖表 */}
            <div
                ref={chartRef}
                style={{
                    width: '100%',
                    height: window.innerWidth < 768 ? '300px' : '400px'
                }}
            />
        </div>
    )
}

export default Chart
