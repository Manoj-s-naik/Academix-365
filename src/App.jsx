import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './Frontend/User/UserProfile'
import Home from './Frontend/Home/Home'
import Dashboard from './Frontend/Dashboard/Dashboard'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/userProfile/:id' element={<UserProfile />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
    </>
  )
}

export default App