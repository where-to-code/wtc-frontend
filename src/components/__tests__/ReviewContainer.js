import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReviewContainer from '../ReviewContainer';

afterEach(cleanup);

describe('<ReviewContainer />', () => {
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
    {
      id: 3,
      quietness: 4,
      wifi_speed: 3,
      close_late: 4,
      community: 1,
      accessibility: 4,
      description:
        'I have the best experience with this place and everything is very perfect, corporative and also the main thing is the environment that is very interesting. I have worked for the best assignment writing services in this place so this is my personal experience.',
      user_id: 5,
    },
    {
      id: 4,
      quietness: 5,
      wifi_speed: 5,
      close_late: 3,
      community: 1,
      accessibility: 3,
      description:
        'This is such a wonderful place to work out of. The environment is quite serene and I enjoyed every minute I spent there. I will be back for sure.',
      user_id: 5,
    },
    {
      id: 5,
      quietness: 4,
      wifi_speed: 3,
      close_late: 5,
      community: 3,
      accessibility: 2,
      description:
        "We've had the opportunity to work in several locations owned by the Yard, and we've been very happy with both. The team is great -- they're been very accommodating to our particular space needs, they're always offering members the opportunity to engage and interact, and frankly, they're just very nice people! The Yard had provided value and flexibility at each stage of our company's growth.",
      user_id: 5,
    },
  ];

  it('Renders the component', () => {
    const { container } = render(<ReviewContainer reviews={reviews} />);

    expect(container).toBeTruthy();
  });
});
