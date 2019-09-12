import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRedux } from '../../utils/testHelpers'
import Review from '../Review';

afterEach(cleanup);

describe('<Review />', () => {
  it('Renders the component', () => {
    const { container } = renderWithRedux(<Review />);

    expect(container).toBeTruthy();
  });

  it('has a the correct label', () => {
    const { container } = renderWithRedux(<Review title={'Title'} />);
    const label = container.querySelector('label');

    expect(label.textContent).toEqual('Title');
  });
});
