import { useState } from 'react'
import './App.scss'
import Header from "./components/header/Header.jsx"
import Hero from './components/hero/Hero.jsx'
import Features from './components/features/Features.jsx'
import Banner from './components/banner/Banner.jsx'
import Products from './components/products/Products.jsx'

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Features/>
    <Banner/>
    <Products/>
    </>
  )
}

export default App
