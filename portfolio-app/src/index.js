import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom';
import PortfolioApp from './components/Main/PortfolioApp';

import './index.css';

render(
  <BrowserRouter>
    <PortfolioApp />
  </BrowserRouter>,
  document.getElementById('root')
);

