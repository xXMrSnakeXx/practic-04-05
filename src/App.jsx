import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { lazy, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from './reduxState/currency/operations';
import { setBaseCurrency } from './reduxState/currency/currencyslice';

const Home = lazy(() => import('./pages/Home'));
const Rates = lazy(() => import('./pages/Rates'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    const success = ({ coords }) => {
      dispatch(fetchBaseCurrency(coords));
    };
    const error = () => {
      dispatch(setBaseCurrency('USD'));
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
