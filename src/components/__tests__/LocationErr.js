import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LocationErr from '../LocationErr';

afterEach(cleanup);

describe('<LocationErr />', () => {
  it('Displays a message to the user', () => {
    const { getByRole } = render(<LocationErr />);

    expect(getByRole('heading').textContent).toEqual(
      "Sorry, we couldn't find any location around you",
    );
  });
});
