import PageSwitcher from '../components/PageSwitcher'
import Chart from '../feature/Chart'

const ChartPage = () => {
    return (
        <>
            <div className="PageSwitcher">
                <PageSwitcher />
            </div>
            <div className="App">
                <Chart />
            </div>
        </>
    )
}

export default ChartPage