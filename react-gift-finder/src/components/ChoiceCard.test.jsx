import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChoiceCard from './ChoiceCard';

describe('ChoiceCard Component', () => {
  const mockProps = {
    image: 'test-image.jpg',
    description: 'Test opis',
    onClick: jest.fn(),
    selected: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renderuje kartę z obrazkiem i opisem', () => {
    render(<ChoiceCard {...mockProps} />);
    const image = screen.getByAltText('Test opis');
    const description = screen.getByText('Test opis');
    
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
    expect(description).toBeInTheDocument();
  });

  test('wywołuje onClick po kliknięciu', () => {
    render(<ChoiceCard {...mockProps} />);
    const card = screen.getByText('Test opis').closest('.choice-card');
    fireEvent.click(card);
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });

  test('dodaje klasę is-selected gdy selected=true', () => {
    render(<ChoiceCard {...mockProps} selected={true} />);
    const card = screen.getByText('Test opis').closest('.choice-card');
    expect(card).toHaveClass('is-selected');
  });

  test('nie ma klasy is-selected gdy selected=false', () => {
    render(<ChoiceCard {...mockProps} selected={false} />);
    const card = screen.getByText('Test opis').closest('.choice-card');
    expect(card).not.toHaveClass('is-selected');
  });

  test('ustawia poprawny atrybut data-mod-log', () => {
    render(<ChoiceCard {...mockProps} />);
    const card = screen.getByText('Test opis').closest('.choice-card');
    expect(card).toHaveAttribute('data-mod-log', 'choice-card#-1#Test opis#cp-inspiration:gift-selector');
  });

  test('używa customowego moduleName', () => {
    render(<ChoiceCard {...mockProps} moduleName="custom-module" />);
    const card = screen.getByText('Test opis').closest('.choice-card');
    expect(card).toHaveAttribute('data-mod-log', 'custom-module#-1#Test opis#cp-inspiration:gift-selector');
  });
});

