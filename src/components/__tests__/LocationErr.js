import React from 'react';
import { cleanup } from '@testing-library/react';
import LocationErr from '../LocationErr';
import { renderWithRedux } from '../../utils/testHelpers';

afterEach(cleanup);

describe('<LocationErr />', () => {
  it('Displays a message to the user', () => {
    const { getAllByRole } = renderWithRedux(<LocationErr />);

    expect(getAllByRole('heading')[0].textContent).toEqual(
      "Sorry, we couldn't find any location around you",
    );
  });
});
