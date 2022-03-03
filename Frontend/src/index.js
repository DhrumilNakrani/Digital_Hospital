import ReactDOM from 'react-dom';
import "leaflet/dist/leaflet.css";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';

ReactDOM.render(
  <AuthContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById('root')
);