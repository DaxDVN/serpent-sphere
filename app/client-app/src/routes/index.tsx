import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../wrappers/MainLayout'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
