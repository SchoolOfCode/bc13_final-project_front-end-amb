import React from 'react'
import {fireEvent, getByTestId, getByText, render, screen } from '@testing-library/react' ;
import TripDetails from './tripDetailsPage'

test('renders trip details', () => {

    const tripDetails = { group: 'holiday' }

    render(<TripDetails tripDetails={tripDetails} />)

    const holidayTag = screen.getByText('holiday')

    expect(holidayTag).toBeInTheDocument()
  })