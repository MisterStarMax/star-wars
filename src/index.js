import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import ErrorBoundry from './components/error-boundry';
import { SwapiServiceProvider } from './components/swapi-service-context';
import SwapiService from './service/swapi-service';

const swapi = new SwapiService();

ReactDOM.render(
  <ErrorBoundry>
    <SwapiServiceProvider value={swapi}>
      <App />
    </SwapiServiceProvider>
  </ErrorBoundry>,
  document.getElementById('root')
);
