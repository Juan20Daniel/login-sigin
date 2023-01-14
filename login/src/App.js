import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Access from './pages/Access';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Admin from './pages/Admin';
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/access/:action' element={<Access />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </Provider>
  );
}

export default App;
