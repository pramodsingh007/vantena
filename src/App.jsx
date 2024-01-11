import './App.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'contact',
          element:<Contact/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
