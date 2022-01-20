import { screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../../contexts/UserContext';
import Search from '.';

describe('Search Component', () => {
  it('renders correctly', () => {
    const mockContext = {
      search: 'fake-search',
      setSearch: jest.fn()
    }
    render(
      <UserContext.Provider value={mockContext}>
        <Search placeholder="fake-placeholder" pageSearch={true} fill = '#000' />
      </UserContext.Provider>
    )

    expect(screen.getByPlaceholderText('fake-placeholder')).toBeInTheDocument();

  })

  it('should change value in input',  () => {
    const mockContext = {
      setSearch: jest.fn()
    }

    render(
      <UserContext.Provider value={mockContext}>
        <Search placeholder="fake-placeholder" pageSearch={true} fill = '#000' />
      </UserContext.Provider>
    )

    const input = screen.getByTestId('search')
    fireEvent.change(input, {target: {value: 'fake-search'}})
    expect(input.value).toBe('fake-search')
  })

  it('the \'search\' component should not be visible',  () => {
    const mockContext = {
      setSearch: jest.fn()
    }

    render(
      <UserContext.Provider value={mockContext}>
        <Search placeholder="fake-placeholder" pageSearch={false} fill = '#000' />
      </UserContext.Provider>
    )
    
    const input = screen.getByTestId('search-container')

    expect(input).not.toBeVisible();
  })
})