import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRedux } from '../../utils/testHelpers'
import Stars from '../Stars';

afterEach(cleanup);

describe('<Stars /> takes starNumber as int', () => {
  it('Show a message when there are no starts', () => {
    const { queryByText } = renderWithRedux(<Stars starNumber={0} />);

    queryByText('Not rated');
  });

  it('Should have the id stars-rating', () => {
    const { queryAllByTestId } = renderWithRedux(<Stars starNumber={1} />);
    queryAllByTestId('stars-rating');
  });
});
