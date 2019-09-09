import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AverageRatings from '../AverageRatings';

afterEach(cleanup);

describe('<AverageRatings />', () => {
  it('has a Average Rating heading', () => {
    const { getByRole } = render(
      <AverageRatings location={{ averageRating: 2 }} />,
    );

    expect(getByRole('heading').textContent).toEqual('Average Rating');
  });
});
