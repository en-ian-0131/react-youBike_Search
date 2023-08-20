//備份
import OnePage from './pages/OnePage'
import News from './pages/News'
import FeeMethod from './pages/FeeMethod'
import Discription from './pages/Discription'
import Activies from './pages/Activies'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<OnePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/fee" element={<FeeMethod />} />
          <Route path="/dis" element={<Discription />} />
          <Route path="/act" element={<Activies />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
