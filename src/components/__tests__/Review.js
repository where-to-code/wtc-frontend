import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Review from '../Review';

afterEach(cleanup);

describe('<Review />', () => {
  it('Renders the component', () => {
    const { container } = render(<Review />);

    expect(container).toBeTruthy();
  });

  it('has a the correct label', () => {
    const { container } = render(<Review title={'Title'} />);
    const label = container.querySelector('label');

    expect(label.textContent).toEqual('Title');
  });
});
