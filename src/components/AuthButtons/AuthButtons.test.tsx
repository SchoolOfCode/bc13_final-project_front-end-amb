import React from 'react'
import {render,screen } from '@testing-library/react'
import AuthButtons from './AuthButtons'
import { useAuth0 } from '@auth0/auth0-react'




jest.doMock('@auth0/auth0-react', () => {
  return {
    useAuth0: jest.fn(() => ({
      isAuthenticated: true,
      user: {
        name: 'Atyib'
      },
      getAccessTokenSilently: jest.fn()
    }))
  }
})
//Here jest.fn() creates  a new mock function and returns the object that has the isAuthenticated properrty set to true.
//Basically pretending that the user has already logged in0
//Jest.doMock is a  Jest function that allows you to mock a specific module.

describe('AuthButtons', () => {
  test('renders logout button when user is authenticated', () => {
    render(<AuthButtons />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  test('renders login button when user is not authenticated', () => {
    jest.resetModules();
    jest.doMock('@auth0/auth0-react', () => {
      return {
        useAuth0: jest.fn(() => ({
          isAuthenticated: false,
          user: {
            name: 'Atyib'
          },
          getAccessTokenSilently: jest.fn()
        }))
      }
    });
    render(<AuthButtons />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
