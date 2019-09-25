import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRedux } from '../../utils/testHelpers';
import NotFound from '../404';

afterEach(cleanup);

describe('<NotFound />', () => {
  it('renders correctly', () => {
    const Page = renderWithRedux(<NotFound />);

    expect(Page).toBeTruthy();
  });

  it('Renders the page not found message', () => {
    const { getAllByRole } = renderWithRedux(<NotFound />);

    expect(getAllByRole('heading')[1].textContent).toEqual('Page Not Found');
  });
});
