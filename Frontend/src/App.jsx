import React, { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import LoadingSpinner from './components/common/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import UploadImage from './components/notice/UploadImage';
import NoticeBanner from './components/notice/NoticeBanner';
import NoticeUpload from './components/notice/NoticeUpload';

const NavBar = lazy(() => import('./components/common/NavBar'));
const Footer = lazy(() => import('./components/common/Footer'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Notice = lazy(() => import('./pages/Notice'));
const Courses = lazy(() => import('./pages/Courses'));
const ScholarShips = lazy(() => import('./pages/ScholarShips'));
const ImagePage = lazy(() => import('./pages/ImagePage'));
const Contact = lazy(() => import('./pages/Contact'));
const LoginForm = lazy(() => import('./components/form/LoginForm'));
const AdminDashBoard = lazy(() => import('./pages/Admin/AdminDashBoard'));
const Esports = lazy(() => import('./components/image/Esports'));

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    NProgress.start();
    const token = localStorage.getItem('accesstoken');

    const timeout = setTimeout(() => {
      NProgress.done();

if (token && location.pathname === '/') {
        navigate('/admindashboard');
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [location, navigate]);

  const token = localStorage.getItem('accesstoken');

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <NavBar />
        <main className="px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/scholarships" element={<ScholarShips />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginForm />} />

            {/* Protected Admin Route */}
            <Route
              path="/admindashboard"
              element={token ? <AdminDashBoard /> : <Navigate to="/login" replace />}
            >
              <Route index element={<Navigate to="upload-image" replace />} />
              <Route path="upload-image" element={<UploadImage />} />
              <Route path="upload-banner" element={<NoticeBanner />} />
              <Route path="upload-circular" element={<NoticeUpload />} />
            </Route>

            <Route path="/image" element={<ImagePage />} />
            <Route path="/image/esports" element={<Esports />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
