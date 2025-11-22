import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import DataPage from './pages/DataPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="data" element={<DataPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
