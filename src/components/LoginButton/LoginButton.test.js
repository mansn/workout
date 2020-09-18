import React from 'react'
import { render } from '@testing-library/react'
import LoginButton from './LoginButton'

test('renders a button with the text Log In', () => {
  const { getByText } = render(<LoginButton />)
  const button = getByText('Log In')
  expect(button).toHaveTextContent('Log In')
})
