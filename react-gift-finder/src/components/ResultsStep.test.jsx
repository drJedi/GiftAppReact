import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResultsStep from './ResultsStep';

describe('ResultsStep Component', () => {
  const mockProducts = [
    {
      name: 'Produkt 1',
      src: 'product1.jpg',
      link: 'https://example.com/product1',
      globalName: 'cp-test:product1',
    },
    {
      name: 'Produkt 2',
      src: 'product2.jpg',
      link: 'https://example.com/product2',
      globalName: 'cp-test:product2',
    },
    {
      name: 'Produkt 3',
      src: 'product3.jpg',
      link: 'https://example.com/product3',
      globalName: 'cp-test:product3',
    },
  ];

  const mockProps = {
    products: mockProducts,
    onReset: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renderuje tytuł strony wyników', () => {
    render(<ResultsStep {...mockProps} />);
    expect(screen.getByText('Prezentownik: nasze propozycje')).toBeInTheDocument();
  });

  test('renderuje wszystkie produkty (max 3)', () => {
    render(<ResultsStep {...mockProps} />);
    expect(screen.getByText('Produkt 1')).toBeInTheDocument();
    expect(screen.getByText('Produkt 2')).toBeInTheDocument();
    expect(screen.getByText('Produkt 3')).toBeInTheDocument();
  });

  test('renderuje maksymalnie 3 produkty nawet gdy jest ich więcej', () => {
    const manyProducts = [
      ...mockProducts,
      { name: 'Produkt 4', src: 'p4.jpg', link: 'https://example.com/p4', globalName: 'cp:p4' },
      { name: 'Produkt 5', src: 'p5.jpg', link: 'https://example.com/p5', globalName: 'cp:p5' },
    ];
    render(<ResultsStep products={manyProducts} onReset={jest.fn()} />);
    
    expect(screen.getByText('Produkt 1')).toBeInTheDocument();
    expect(screen.getByText('Produkt 2')).toBeInTheDocument();
    expect(screen.getByText('Produkt 3')).toBeInTheDocument();
    expect(screen.queryByText('Produkt 4')).not.toBeInTheDocument();
    expect(screen.queryByText('Produkt 5')).not.toBeInTheDocument();
  });

  test('renderuje komunikat gdy brak produktów', () => {
    render(<ResultsStep products={[]} onReset={jest.fn()} />);
    expect(screen.getByText('Brak dostępnych produktów')).toBeInTheDocument();
    expect(screen.getByText(/Nie znaleźliśmy produktów pasujących/i)).toBeInTheDocument();
  });

  test('nie renderuje siatki produktów gdy lista jest pusta', () => {
    render(<ResultsStep products={[]} onReset={jest.fn()} />);
    const grid = document.querySelector('.results__grid');
    expect(grid).not.toBeInTheDocument();
  });

  test('renderuje przycisk "SPRÓBUJ JESZCZE RAZ"', () => {
    render(<ResultsStep {...mockProps} />);
    const button = screen.getByRole('button', { name: /spróbuj jeszcze raz/i });
    expect(button).toBeInTheDocument();
  });

  test('wywołuje onReset po kliknięciu przycisku', () => {
    render(<ResultsStep {...mockProps} />);
    const button = screen.getByRole('button', { name: /spróbuj jeszcze raz/i });
    fireEvent.click(button);
    expect(mockProps.onReset).toHaveBeenCalledTimes(1);
  });

  test('każdy produkt ma link', () => {
    render(<ResultsStep {...mockProps} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute('href', 'https://example.com/product1');
    expect(links[1]).toHaveAttribute('href', 'https://example.com/product2');
    expect(links[2]).toHaveAttribute('href', 'https://example.com/product3');
  });
});

