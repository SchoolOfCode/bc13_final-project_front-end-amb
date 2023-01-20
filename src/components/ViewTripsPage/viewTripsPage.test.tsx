import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ViewTrips from './viewTripsPage'

test('renders the correct number of trip cards', () => {
  const { getAllByTestId } = render(<ViewTrips />)
  const tripCards = getAllByTestId('trip-card')
  expect(tripCards).toHaveLength(3)
})

test('clicking on a trip card calls the setTripDetails and pageSelect functions', () => {
  const setTripDetails = jest.fn()
  const pageSelect = jest.fn()
  const { getAllByTestId } = render(<ViewTrips setTripDetails={setTripDetails} pageSelect={pageSelect} />)
  const tripCards = getAllByTestId('trip-card')
  fireEvent.click(tripCards[0])
  expect(setTripDetails).toHaveBeenCalled()
  expect(pageSelect).toHaveBeenCalledWith('details')
})
