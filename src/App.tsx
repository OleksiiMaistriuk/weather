import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/Home';
import { MonthStatistic } from './pages/MonthStatistic/MonthStatistic';
import { Header } from './shared/Header/Header';
// import { Popup } from './shared/Popup/Popup';
import './styles/index.scss';

function App() {
  return (
    <div className="global-container">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistic" element={<MonthStatistic />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
