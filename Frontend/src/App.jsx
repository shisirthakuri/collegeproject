import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigation,
} from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import LoadingSpinner from './components/common/LoadingSpinner';
import { Provider } from 'react-redux';
import store from './store/store';


// Lazy-loaded components
const NavBar = lazy(() => import('./components/common/NavBar'));
const Footer = lazy(() => import('./components/common/Footer'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Notice = lazy(() => import('./pages/Notice'));
const Courses = lazy(() => import('./pages/Courses'));
const ScholarShips = lazy(() => import('./pages/ScholarShips'));
const ImagePage = lazy(() => import('./pages/ImagePage'));
const ImageSection = lazy(() => import('./components/ImageSection'));
const Contact = lazy(() => import('./pages/Contact'));
const LoginForm = lazy(()=>import ('./components/form/LoginForm'))
// const Login = lazy(() => import('./pages/Login'));
// const Signup = lazy(() => import('./pages/Signup'));



// Main layout with shared components
function Layout() {
    const navigation = useNavigation();
  useEffect(() => {
    if (navigation.state === 'loading') {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [navigation.state]);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <NavBar />
      <main className="min-h-screen px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </Suspense>
  );
}

// Router definition
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return { data: 'Home data' };
        },
      },
      { path: 'about', element: <About /> },
      { path: 'notice', element: <Notice /> },
      { path: 'courses', element: <Courses /> },
      { path: 'scholarships', element: <ScholarShips /> },
      { path: 'image', element: <ImagePage /> },
      { path: 'imagesection', element: <ImageSection /> },
      { path: 'contact', element: <Contact /> },
         { path: 'login', element: <LoginForm /> },
      // Uncomment if login/signup needed
      // { path: 'login', element: <Login /> },
      // { path: 'signup', element: <Signup /> },
    ],
  },
]);

// App Entry Point
export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}
