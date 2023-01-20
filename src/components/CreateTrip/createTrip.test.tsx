import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateTrip from './createTrip'

jest.doMock('@auth0/auth0-react', () => {
  return {
    useAuth0: jest.fn(() => ({
      user: { sub: '12345' }
    }))
  }
})

describe('CreateTrip', () => {
  let setTripDetails: jest.Mock
  let pageSelect: jest.Mock

//Jest helps keep track of the calls .

  beforeEach(() => {
    setTripDetails = jest.fn()
    pageSelect = jest.fn()
  })

  test('renders form with correct number of steps', () => {
    render(<CreateTrip setTripDetails={setTripDetails} pageSelect={pageSelect} />)
    const stepCounter = screen.getByText(/1 \/ 4/)
    //The code (/1 \/ 4/) is a regular expression that looks for a specific pattern of characters 
    expect(stepCounter).toBeInTheDocument()
  })

  test('submits form and calls setTripDetails and pageSelect', async () => {
    render(<CreateTrip setTripDetails={setTripDetails} pageSelect={pageSelect} />)

    // fill out form
    const groupInput = screen.getByLabelText(/trip name/i)
    fireEvent.change(groupInput, { target: { value: 'Test Group' } })
    // const startDateInput = screen.getByLabelText(/start date/i)
    // fireEvent.change(startDateInput, { target: { value: '2022-05-01' } })
    // const endDateInput = screen.getByLabelText(/end date/i)
    // fireEvent.change(endDateInput, { target: { value: '2022-05-10' } })
    // ...fill out rest of form

    const submitButton = screen.getByText(/next/i)
    fireEvent.click(submitButton)

    // move through steps
    fireEvent.click(submitButton)
    fireEvent.click(submitButton)
    fireEvent.click(submitButton)

    // submit last step
    fireEvent.click(submitButton)

    expect(setTripDetails).toHaveBeenCalled()
    expect(pageSelect).toHaveBeenCalledWith('details')
  })
})

