import PageSwitcher from '../components/PageSwitcher'
import Flow from '../feature/Flow'

const FlowPage = () => {
    return (
        <>
            <div className="PageSwitcher">
                <PageSwitcher />
            </div>
            <div className="App">
                <Flow />
            </div>
        </>
    )
}

export default FlowPage
