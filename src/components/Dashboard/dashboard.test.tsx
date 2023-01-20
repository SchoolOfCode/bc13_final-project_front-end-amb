import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Dashboard from './dashboard'
import { useAuth0 } from '@auth0/auth0-react'

jest.mock('@auth0/auth0-react', () => {
  return {
    useAuth0: jest.fn(() => ({
      isAuthenticated: true
    }))
  }
})

describe('Dashboard', () => {
  let setTripDetails: jest.Mock
  let pageSelect: jest.Mock

  beforeEach(() => {
    setTripDetails = jest.fn()
    pageSelect = jest.fn()
  })

  test('renders create trip button', () => {
    render(<Dashboard />)
    expect(screen.getByText(/create/i)).toBeInTheDocument()
  })

  test('clicking create trip button opens create trip page', () => {
    // const props = {pageSelect:jest.fn()}
    const pageSelect = jest.fn()
    render(<Dashboard pageSelect={pageSelect}/>)
    const createButton = screen.getByText(/create/i)
    fireEvent.click(createButton)
    expect(pageSelect).toHaveBeenCalledWith('create')
  })

  test('clicking submit button on create trip page calls setTripDetails and pageSelect', () => {
    const props = {setTripDetails:jest.fn()}
    render(<Dashboard setTripDetails={props.setTripDetails} pageSelect={pageSelect} />)
    const createButton = screen.getByText(/create/i)
    fireEvent.click(createButton)
    const submitButton = screen.getByText(/next/i)
    fireEvent.click(submitButton)
    expect(setTripDetails).toHaveBeenCalled()
    expect(pageSelect).toHaveBeenCalledWith('details')
  })
})
