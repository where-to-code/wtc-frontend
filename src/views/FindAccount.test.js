import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import FindAccount from './FindAccount'

afterEach(cleanup)

test('renders content', () => {

  const component = render(
    <FindAccount />
  )

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})