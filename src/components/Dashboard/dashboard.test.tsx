import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Dashboard from './dashboard'
import { useAuth0 } from '@auth0/auth0-react'

// jest.mock('@auth0/auth0-react', () => {
//   return {
//     useAuth0: jest.fn(() => ({
//       isAuthenticated: true
//     }))
//   }
// })

describe('Dashboard', () => {
  // let setTripDetails: jest.Mock
  // let pageSelect: jest.Mock

  // beforeEach(() => {
  //   setTripDetails = jest.fn()
  //   pageSelect = jest.fn()
  // })

  // test('renders create trip button', () => {
  //   render(<Dashboard />)
  //   //expect(screen.getByText(/create/i)).toBeInTheDocument()
  // })

  test('clicking create trip button opens create trip page', () => {
    const props = jest.fn()
    //const pageSelect = jest.fn()
    render(<Dashboard />)
    
    const createButton = screen.getByTestId("create-page")
    fireEvent.click(createButton)
    expect(props).toHaveBeenCalledWith(createButton)
  })

  test('clicking submit button on create trip page calls setTripDetails and pageSelect', () => {
    
    render(<Dashboard/>)
    const createButton = screen.getByTestId("create-page")
    fireEvent.click(createButton)
    const viewButton = screen.getByTestId("view-page")
    fireEvent.click(viewButton)
    const joinButton = screen.getByTestId("join-page")
    fireEvent.click(joinButton)
    // expect(setTripDetails).toHaveBeenCalled()
    // expect(pageSelect).toHaveBeenCalledWith('details')
  })
})
