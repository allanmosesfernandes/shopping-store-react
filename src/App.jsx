import React from 'react'
import Home from './components/routes/home'
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/routes/sign-in'
import "./components/category-item/category-item.styles.scss"
import Navigation from './components/routes/navigation'
const Shop = () => {
  return (<h1>I am Shop bhenchod!</h1>)
}

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='shop' element={<Shop />}/>
          <Route path='sign-in' element={<SignIn />}/>
          <Route index element={<Home />}/>
        </Route>
        
      </Routes>
      
    </div>
  )
}

export default App