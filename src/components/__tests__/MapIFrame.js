import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MapIFrame from '../MapIFrame';

afterEach(cleanup);

describe('<MapIFrame />', () => {
  it('Renders an IFrame', () => {
    const { container } = render(
      <MapIFrame location={{ longitude: 2.22, latitude: 32.23 }} />,
    );

    expect(container).toBeTruthy();
  });
});
