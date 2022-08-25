import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContentCategory from './pages/ContentCategory'
import ContentDetails from './pages/ContentDetails'
import MainLayout from './layouts/MainLayout'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/category/:categoryId"
                element={<ContentCategory />}
              />
              <Route path="/movie/:movieId" element={<ContentDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
