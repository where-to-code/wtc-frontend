import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LocationBanner from '../LocationBanner';

afterEach(cleanup);

describe('<LocationBanner />', () => {
  it('Conponent has both paragraph tags', () => {
    const { container } = render(
      <LocationBanner
        location={{ address: 'address', description: 'description' }}
      />,
    );
    const paragraph = container.querySelectorAll('p');

    expect(paragraph.length).toEqual(2);
  });
});
