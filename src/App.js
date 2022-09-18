import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LocaleContext from './contexts/LocaleContext';
import ActivePages from './pages/ActivePages';
import AddNotesPage from './pages/AddNotesPage';
import ArchivedPages from './pages/ArchivedPages';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import NotFoundPages from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import 'react-toastify/dist/ReactToastify.css';
import { getUserLogged, putAccessToken } from './utils/network-data';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
export default function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [localeLang, setLang] = useState(localStorage.getItem('lang') || 'id');
  const [localeTheme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );
  const toggleThemeHandler = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  const [toggleTheme, setToggleTheme] = useState(() => toggleThemeHandler);
  const toggleLangHandler = () => {
    setLang((prevLocale) => {
      const newLang = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('lang', newLang);
      return newLang;
    });
  };
  const localeContextValue = useMemo(() => {
    return {
      localeLang,
      localeTheme,
      toggleTheme,
      toggleLangHandler,
    };
  }, [localeTheme, toggleTheme, localeLang]);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(() => data);
  }
  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
  }, []);
  if (localeTheme !== 'dark') {
    document.documentElement.setAttribute('data-theme', localeTheme);
  }
  if (localeTheme !== 'light') {
    document.documentElement.setAttribute('data-theme', localeTheme);
  }
  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };
  if (isLoading) {
    return <div className='spinner spinner-loader'></div>;
  }
  if (authedUser === null) {
    return (
      <LocaleContext.Provider value={localeContextValue}>
        <main>
          <Routes>
            <Route
              exact
              path='/*'
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route exact path='/register' element={<RegisterPage />} />
          </Routes>
          <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </main>
      </LocaleContext.Provider>
    );
  }
  return (
    <>
      <LocaleContext.Provider value={localeContextValue}>
        <header>
          <Header
            logout={onLogout}
            name={authedUser.name}
            email={authedUser.email}
          />
        </header>
        <main>
          <Routes>
            <Route exatch path='/' element={<ActivePages />} />
            <Route exatch path='/archived' element={<ArchivedPages />} />
            <Route exatch path='/notes/:id' element={<DetailPage />} />
            <Route exatch path='/new' element={<AddNotesPage />} />
            <Route exatch path='*' element={<NotFoundPages />} />
          </Routes>
          <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </main>
        <Footer />
      </LocaleContext.Provider>
    </>
  );
}
