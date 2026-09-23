import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChildComponents from './pages/ChildComponents';
import UseStatePage from './pages/UseStatePage';
import MapFilter from './pages/MapFilter';
import FakeApi from './pages/FakeApi';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/child-components" element={<ChildComponents />} />
        <Route path="/react-usestate" element={<UseStatePage />} />
        <Route path="/map-filter" element={<MapFilter />} />
        <Route path="/fake-api" element={<FakeApi />} />
      </Routes>
    </div>
  );
}

export default App;
