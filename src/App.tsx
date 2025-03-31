import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './components/admin/AdminLayout';
import AdminRoute from './components/auth/AdminRoute';
import ProtectedRoute from './components/auth/ProtectedRoute';
import MainCarousel from './components/carousel/MainCarousel';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Hero from './components/layout/hero/Hero';
import { AuthProvider } from './contexts/AuthContext';
import About from './pages/about/About';
import AdminDashboard from './pages/admin/AdminDashboard';
import HospitalManagement from './pages/admin/HospitalManagement';
import PostManagement from './pages/admin/PostManagement';
import ReportManagement from './pages/admin/ReportManagement';
import ReviewManagement from './pages/admin/ReviewManagement';
import Statistics from './pages/admin/Statistics';
import UserManagement from './pages/admin/UserManagement';
import CommunityPage from './pages/community/CommunityPage';
import Login from './pages/login/Login';
import MyPage from './pages/mypage/MyPage';
import SearchPage from './pages/search/SearchPage';
import SignUp from './pages/signup/SignUp';
import SupportPage from './pages/support/SupportPage';

const App: React.FC = () => {
  return (
    <AuthProvider>
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
              <Route path="/mypage" element={
                <ProtectedRoute>
                  <MyPage />
                </ProtectedRoute>
              } />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/search" element={
                <ProtectedRoute>
                  <SearchPage />
                </ProtectedRoute>
              } />
              <Route path="/community" element={
                <ProtectedRoute>
                  <CommunityPage />
                </ProtectedRoute>
              } />
              <Route path="/admin" element={
                <AdminRoute>
                  <AdminLayout />
                </AdminRoute>
              }>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<UserManagement />} />
                <Route path="posts" element={<PostManagement />} />
                <Route path="reviews" element={<ReviewManagement />} />
                <Route path="hospitals" element={<HospitalManagement />} />
                <Route path="reports" element={<ReportManagement />} />
                <Route path="statistics" element={<Statistics />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
