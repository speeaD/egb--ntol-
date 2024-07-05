import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom'
import Mainlayout from './Components/Layout/Mainlayout'
import './App.css'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/Aboutme/About'
import Records from './Components/Pages/Records/Records'
import Whyme from './Components/Pages/Whyme/Whyme'

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout />} >
          <Route index element={<Home />} />
          <Route path='/aboutme' element={<About />} />
          <Route path='/records' element={<Records />}/>
          <Route path='/whyme' element={<Whyme />} />
      </Route>
    )
  )

  return (
    <div className='app'>
      <div className='container'>
         <RouterProvider router = {router} />
      </div>
    </div>
  )
}

export default App
