import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TripDetails from './tripDetailsPage'

test('renders trip details', () => {
    const tripDetails = { group: 'holiday' }
    render(<TripDetails tripDetails={tripDetails} />)
    expect('holiday').toBeInTheDocument()
  })