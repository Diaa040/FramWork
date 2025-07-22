import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './Components/About'
import Layout from './Components/Layout'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Home from './Components/Home'


export default function App() {
  const routes = createBrowserRouter([
    { path: '/' , element: <Layout/>, children:[
      { index : true , element : <Home></Home>},
      {path: '/about' , element : <About/>},
      {path : '/portfolio' , element: <Portfolio/>},
      {path: '/contact' , element : <Contact/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

