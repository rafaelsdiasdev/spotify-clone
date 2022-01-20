import { screen, render, fireEvent } from '@testing-library/react';
import SideMenuItem from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/fake-link'
      }
    }
  }
})

jest.mock('next/router', () => {
  return ({children}) => {
    return children;
  }
})

describe('SideMenuItem component', () => {
  it('renders correctly', () => {
    render(<SideMenuItem   
      label="fake-label"
      link="fake-link"
      icon="fake-icon"
      iconActive="fake-icon_active"
      active="fake-active" />)

    expect(screen.getByText('fake-label')).toBeInTheDocument()
  })

  it('should click active', () => {
    render(<SideMenuItem   
      label="fake-label"
      link="fake-link"
      icon="fake-icon"
      iconActive="iconActive"
      active="fake-link"
      />
    )

      const link = screen.getByTestId('link');
      fireEvent.click(link);

    expect(screen.getByTestId('active-menu')).toHaveClass('active-menu')
  })
})