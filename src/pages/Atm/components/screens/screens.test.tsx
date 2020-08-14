import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import index from './index';

describe('<index />', () => {
  test('it should mount', () => {
    render(<screens />);
    
    const screens = screen.getByTestId('index');

    expect(screens).toBeInTheDocument();
  });
});