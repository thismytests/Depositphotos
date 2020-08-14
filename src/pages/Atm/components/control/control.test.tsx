import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import index from './index';

describe('<index />', () => {
  test('it should mount', () => {
    render(<control />);
    
    const control = screen.getByTestId('index');

    expect(control).toBeInTheDocument();
  });
});