import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ServicesList from './pages/ServicesList';
import ServiceDetails from './pages/ServiceDetails';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<ServicesList />} />
        <Route path="/:id/details" element={<ServiceDetails />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
