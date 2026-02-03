import {Routes, Route} from 'react-router'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/team-matches/:id" element={<TeamMatches />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
