import './App.css'

import {BrowserRouter,Route, Routes} from 'react-router-dom'


import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import ProtectedRoute from "./components/ProtectedRoute"



const App = () => (
  <BrowserRouter>
  <Routes>
    <Route exact path="/signup" element={<Signup/>} />
    <Route path="/" element={<ProtectedRoute element={Dashboard} />} />
    
  </Routes>
  </BrowserRouter>
)

export default App