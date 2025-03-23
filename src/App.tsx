import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MainCarousel from './components/carousel/MainCarousel';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Hero from './components/layout/hero/Hero';
import AboutPage from './pages/about/About';
import Login from './pages/login/Login'; // 로그인 페이지 추가
import SupportPage from './pages/support/SupportPage'; // 고객지원 페이지

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      {/* 조건부로 Hero와 MainCarousel 렌더링 */}
      <Routes>
        <Route path="/support" element={<SupportPage />} /> {/* 고객지원 페이지 */}
        {/* /support가 아닐 경우에만 Hero와 MainCarousel 렌더링 */}
        <Route
          path="*"
          element={
            <>
              <Hero />
              <MainCarousel />
            </>
          }
        />
        <Route path="/login" element={<Login />} /> {/* 로그인 페이지 라우트 추가 */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
