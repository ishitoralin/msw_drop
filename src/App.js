import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/routes'

export default function App() {

  return (
    <BrowserRouter basename="/msw_drop">
        <AppRoutes />
    </BrowserRouter>
  )
}
