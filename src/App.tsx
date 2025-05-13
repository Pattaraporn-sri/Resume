import { RouterProvider } from 'react-router-dom'
import './App.css'
import mainRoute from './MainRouter/MianRouter'

function App() {

  return (
    <>
      <RouterProvider router= {mainRoute}/>
    </>
  )
}

export default App
