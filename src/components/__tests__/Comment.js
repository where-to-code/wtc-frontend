import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Comment from '../Comment';

afterEach(cleanup);

describe('<Comment />', () => {
  it('has a Comment heading', () => {
    const { getByRole } = render(<Comment />);

    expect(getByRole('heading').textContent).toEqual('Comment');
  });

  it('Renders the correct props', () => {
    const { container } = render(
      <Comment description={'This is a comment'} />,
    );
    const paragraph = container.querySelector('p');

    expect(paragraph.textContent).toEqual('This is a comment');
  });
});
