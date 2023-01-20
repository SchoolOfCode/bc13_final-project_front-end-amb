import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import JoinTrip from './joinTrip'

describe('submitting the form calls the correct function and sets the tripID to an empty string', () => {
  const mockPageSelect = jest.fn()
  render(<JoinTrip pageSelect={mockPageSelect} />)

  const tripIdInput =screen.getByLabelText('Enter trip ID')
  const submitButton = screen.getByText('submit')

  fireEvent.change(tripIdInput, { target: { value: 'someTripId' } })
  fireEvent.click(submitButton)

  expect(mockPageSelect).toHaveBeenCalledWith('dashboard')
  expect(tripIdInput.value).toBe('')
})
