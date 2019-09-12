import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRedux } from '../../utils/testHelpers'
import AverageRatings from '../AverageRatings';

afterEach(cleanup);

describe('<AverageRatings />', () => {
  it('has a Average Rating heading', () => {
    const { getByText } = renderWithRedux(
      <AverageRatings location={{ averageRating: 2 }} />,
    );

    expect(getByText('Average Rating')).toBeTruthy();
  });

  it('Renders the correct props', () => {
    const { container } = renderWithRedux(
      <AverageRatings location={{ averageRating: 2 }} />,
    );
    const paragraph = container.querySelector('p');

    expect(paragraph.textContent).toEqual('2');
  });
});
