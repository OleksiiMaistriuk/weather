import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/components/Home';
import { MonthStatistic } from './pages/MonthStatistic/MonthStatistic';
import { Header } from './shared/Header/Header';
import './styles/index.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-statistic" element={<MonthStatistic />} />
      </Routes>
    </div>
  );
}

export default App;
