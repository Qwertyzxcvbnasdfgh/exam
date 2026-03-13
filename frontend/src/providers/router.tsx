import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../components/Home/HomePage';

export const router = createBrowserRouter([
  { path: '/home', element: <HomePage /> },
]);
