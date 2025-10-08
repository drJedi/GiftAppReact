import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {
  const mockProduct = {
    name: 'CEWE FOTOKSIĄŻKA',
    src: 'product-image.jpg',
    link: 'https://example.com/product',
    description: 'Test description',
    globalName: 'cp-test:product',
  };

  test('renderuje kartę produktu z nazwą i obrazkiem', () => {
    render(<ProductCard product={mockProduct} />);
    const image = screen.getByAltText('CEWE FOTOKSIĄŻKA');
    const name = screen.getByText('CEWE FOTOKSIĄŻKA');
    
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'product-image.jpg');
    expect(name).toBeInTheDocument();
  });

  test('link prowadzi do poprawnego URL', () => {
    render(<ProductCard product={mockProduct} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com/product');
    expect(link).toHaveAttribute('target', '_self');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('ustawia poprawny atrybut data-mod-log', () => {
    render(<ProductCard product={mockProduct} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('data-mod-log', 'product-card#-1#CEWE FOTOKSIĄŻKA#cp-test:product');
  });

  test('używa customowego moduleName', () => {
    render(<ProductCard product={mockProduct} moduleName="custom-product" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('data-mod-log', 'custom-product#-1#CEWE FOTOKSIĄŻKA#cp-test:product');
  });

  test('renderuje się poprawnie bez src', () => {
    const productWithoutSrc = { ...mockProduct, src: '' };
    render(<ProductCard product={productWithoutSrc} />);
    const image = screen.getByAltText('CEWE FOTOKSIĄŻKA');
    expect(image).toHaveAttribute('src', '');
  });
});

