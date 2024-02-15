import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Routes from './routes';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
