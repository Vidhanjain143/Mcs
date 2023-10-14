import './App.css'
import Details from './components/Details'
import Home from './components/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search/:name' element={<Details/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
