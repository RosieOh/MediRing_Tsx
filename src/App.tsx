import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MainCarousel from './components/carousel/MainCarousel';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Hero from './components/layout/hero/Hero';
import About from './pages/about/About';
import Login from './pages/login/Login';
import MyPage from './pages/mypage/MyPage';
import SignUp from './pages/signup/SignUp';
import SupportPage from './pages/support/SupportPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <MainCarousel />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
