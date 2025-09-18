import React from 'react';
import ProductCard from './ProductCard';
import Button from './Button';

const ResultsStep = ({ products, onReset }) => {
  return (
    <div className="results">
      <h2 className="results__title">Prezentownik: nasz propozycje</h2>
      <p className="results__subtitle">
        Oto nasze rekomendacje na podstawie Twoich wyborów
      </p>
      
      {products.length === 0 ? (
        <div className="results__empty">
          <h3>Brak dostępnych produktów</h3>
          <p>Nie znaleźliśmy produktów pasujących do Twoich kryteriów. Spróbuj zmienić swoje wybory.</p>
        </div>
      ) : (
        <div className="results__grid">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
      
      <div className="results__actions">
        <Button onClick={onReset}>
          SPRÓBUJ JESZCZE RAZ
        </Button>
      </div>
    </div>
  );
};

export default ResultsStep;