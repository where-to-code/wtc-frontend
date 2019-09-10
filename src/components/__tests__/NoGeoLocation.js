import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NoGeoLocation from '../NoGeoLocation';

afterEach(cleanup);

describe('<NoGeoLocation />', () => {
  it('Renders the correct props', () => {
    const { container } = render(<NoGeoLocation />);
    const paragraph = container.querySelector('p');

    expect(paragraph.textContent).toEqual(
      "Your browser doesn't support Geolocation, or you didn't allow it. Centering the map to a default location",
    );
  });
});
