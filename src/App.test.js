import {render, screen} from '@testing-library/react';
import App from './App';
import React from 'react';



describe('App component', function () {
  it('should display app', function () {
    render(<App />);
    const linkElement = screen.getByTestId('main');
    expect(linkElement).toBeInTheDocument();
  });
});
