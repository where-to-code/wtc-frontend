import React from 'react';
import App from './App';
import { renderWithRedux } from './utils/testHelpers'

it('renders without crashing', async () => {
  await renderWithRedux(<App />);
});
