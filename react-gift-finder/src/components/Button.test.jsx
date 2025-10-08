import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renderuje przycisk z tekstem', () => {
    render(<Button>Kliknij mnie</Button>);
    const button = screen.getByRole('button', { name: /kliknij mnie/i });
    expect(button).toBeInTheDocument();
  });

  test('wywołuje onClick po kliknięciu', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Test</Button>);
    const button = screen.getByRole('button', { name: /test/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('przycisk jest wyłączony gdy disabled=true', () => {
    render(<Button disabled>Wyłączony</Button>);
    const button = screen.getByRole('button', { name: /wyłączony/i });
    expect(button).toBeDisabled();
  });

  test('dodaje customową klasę CSS', () => {
    render(<Button className="custom-class">Test</Button>);
    const button = screen.getByRole('button', { name: /test/i });
    expect(button).toHaveClass('btn', 'custom-class');
  });

  test('przekazuje dodatkowe props', () => {
    render(<Button data-testid="custom-button">Test</Button>);
    const button = screen.getByTestId('custom-button');
    expect(button).toBeInTheDocument();
  });
});

