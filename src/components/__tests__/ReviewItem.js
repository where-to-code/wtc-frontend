import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReviewItem from '../ReviewItem';

afterEach(cleanup);

describe('<ReviewItem />', () => {
  const reviews = [
    {
      id: 1,
      quietness: 4,
      wifi_speed: 2,
      close_late: 1,
      community: 3,
      accessibility: 2,
      description:
        'This is such a wonderful place to work out of. The environment is quite serene and I enjoyed every minute I spent there. I will be back for sure.',
      user_id: 5,
    },
    {
      id: 2,
      quietness: 5,
      wifi_speed: 1,
      close_late: 3,
      community: 2,
      accessibility: 5,
      description:
        'Such a cool and lovely place. Ambience, wifi, culture and easily accessible',
      user_id: 4,
    },
  ];

  it('Renders a message when no props is passed', () => {
    const { container } = render(<ReviewItem />);
    const paragraph = container.querySelector('p');

    expect(paragraph.textContent).toEqual('No reviews are available yet');
  });

  it('Renders all props label', () => {
    const { container } = render(<ReviewItem reviews={reviews} />);
    const labels = container.querySelectorAll('label');

    expect(labels.length).toEqual(8);
  });
});
