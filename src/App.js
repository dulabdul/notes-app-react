import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddNotesPage from './pages/AddNotesPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import NotFoundPages from './pages/NotFoundPage';
export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route exatch path='/' element={<HomePage />} />
          <Route exatch path='/notes/:id' element={<DetailPage />} />
          <Route exatch path='/new' element={<AddNotesPage />} />
          <Route exatch path='*' element={<NotFoundPages />} />
        </Routes>
      </main>
    </>
  );
}
