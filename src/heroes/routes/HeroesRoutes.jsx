import React from 'react'
import { Navigate, Routes, Route} from 'react-router-dom';
import { Navbar } from '../../ui'
import { MarvelPages, DcPages, Search, Hero } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPages />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="search" element={<Search />} />
          <Route path="hero/:id" element={<Hero />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  )
}