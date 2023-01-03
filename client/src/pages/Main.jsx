import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './homepage'

export default function Main() {
  return (
    <Routes>
    <Route path="*" element={<HomePage />} />
  </Routes>
  )
}
