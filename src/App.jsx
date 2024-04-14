
import './App.css'
import ExerciseDetails from './Pages/ExerciseDetails'
import Home from './Pages/Home'
import { BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
