import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Stars from '../Stars';

afterEach(cleanup);

describe('<Stars /> takes starNumber as int', () => {
  it('Show a message when there are no starts', () => {
    const { queryByText } = render(<Stars starNumber={0} />);

    queryByText('Not rated');
  });

  it('Should have the id stars-rating', () => {
    const { queryAllByTestId } = render(<Stars starNumber={1} />);
    queryAllByTestId('stars-rating');
  });
});
