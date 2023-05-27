import OnePage from './pages/OnePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<OnePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
