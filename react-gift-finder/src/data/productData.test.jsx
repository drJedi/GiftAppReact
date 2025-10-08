import {
  productAttributes,
  recipientOptions,
  categoryImageMap,
  priceImageMap,
  generateProductFileNames,
  findMatchingProducts,
} from './productData';

describe('productData - Struktury danych', () => {
  test('productAttributes zawiera wszystkie kategorie', () => {
    expect(productAttributes.categories).toHaveProperty('Pamiątka na lata');
    expect(productAttributes.categories).toHaveProperty('Kreatywny');
    expect(productAttributes.categories).toHaveProperty('Osobisty');
    expect(productAttributes.categories).toHaveProperty('Dekoracyjny');
  });

  test('productAttributes zawiera wszystkie zakresy cenowe', () => {
    expect(productAttributes.prices).toHaveProperty('Subtelny gest');
    expect(productAttributes.prices).toHaveProperty('Wyjątkowy akcent');
    expect(productAttributes.prices).toHaveProperty('Królestwo możliwości');
  });

  test('productAttributes zawiera wszystkich odbiorców', () => {
    expect(productAttributes.forWho).toHaveProperty('Rodzicom');
    expect(productAttributes.forWho).toHaveProperty('Dziadkom');
    expect(productAttributes.forWho).toHaveProperty('Dzieciom do 6 lat');
    expect(productAttributes.forWho).toHaveProperty('Nastolatkom');
    expect(productAttributes.forWho).toHaveProperty('Drugiej Połówce');
  });

  test('recipientOptions jest tablicą z opcjami odbiorców', () => {
    expect(Array.isArray(recipientOptions)).toBe(true);
    expect(recipientOptions.length).toBeGreaterThan(0);
    expect(recipientOptions[0]).toHaveProperty('name');
    expect(recipientOptions[0]).toHaveProperty('src');
  });

  test('categoryImageMap mapuje wszystkie kategorie na obrazki', () => {
    expect(categoryImageMap).toHaveProperty('Pamiątka na lata');
    expect(categoryImageMap).toHaveProperty('Kreatywny');
    expect(categoryImageMap).toHaveProperty('Osobisty');
    expect(categoryImageMap).toHaveProperty('Dekoracyjny');
  });

  test('priceImageMap mapuje wszystkie ceny na obrazki', () => {
    expect(priceImageMap).toHaveProperty('Subtelny gest');
    expect(priceImageMap).toHaveProperty('Wyjątkowy akcent');
    expect(priceImageMap).toHaveProperty('Królestwo możliwości');
  });
});

describe('findMatchingProducts', () => {
  test('zwraca produkty dla poprawnych parametrów', () => {
    const products = findMatchingProducts(
      'Subtelny gest',
      'Pamiątka na lata',
      'Rodzicom'
    );
    
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });

  test('każdy zwrócony produkt ma wymagane pola', () => {
    const products = findMatchingProducts(
      'Subtelny gest',
      'Pamiątka na lata',
      'Rodzicom'
    );
    
    products.forEach(product => {
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('link');
      expect(product).toHaveProperty('globalName');
    });
  });

  test('zwraca różne produkty dla różnych kategorii', () => {
    const products1 = findMatchingProducts(
      'Subtelny gest',
      'Pamiątka na lata',
      'Rodzicom'
    );
    
    const products2 = findMatchingProducts(
      'Subtelny gest',
      'Kreatywny',
      'Rodzicom'
    );
    
    expect(products1).not.toEqual(products2);
  });

  test('zwraca różne produkty dla różnych zakresów cenowych', () => {
    const products1 = findMatchingProducts(
      'Subtelny gest',
      'Pamiątka na lata',
      'Rodzicom'
    );
    
    const products2 = findMatchingProducts(
      'Królestwo możliwości',
      'Pamiątka na lata',
      'Rodzicom'
    );
    
    expect(products1).not.toEqual(products2);
  });

  test('zwraca różne produkty dla różnych odbiorców', () => {
    const products1 = findMatchingProducts(
      'Subtelny gest',
      'Pamiątka na lata',
      'Rodzicom'
    );
    
    const products2 = findMatchingProducts(
      'Subtelny gest',
      'Pamiątka na lata',
      'Dziadkom'
    );
    
    expect(products1).not.toEqual(products2);
  });

  test('obsługuje wszystkie kombinacje odbiorców', () => {
    const recipients = ['Rodzicom', 'Dziadkom', 'Drugiej Połówce', 'Dzieciom do 6 lat'];
    
    recipients.forEach(recipient => {
      const products = findMatchingProducts(
        'Subtelny gest',
        'Pamiątka na lata',
        recipient
      );
      expect(products).toBeDefined();
      expect(Array.isArray(products)).toBe(true);
    });
  });
});

describe('generateProductFileNames', () => {
  test('zwraca tablicę z nazwami i ścieżkami obrazków', () => {
    const productNames = ['CEWE FOTOKSIĄŻKA kwadratowa mała', 'Zdjęcie w ramce'];
    const result = generateProductFileNames('Rodzicom', productNames);
    
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(productNames.length);
  });

  test('każdy element ma pola name i src', () => {
    const productNames = ['CEWE FOTOKSIĄŻKA kwadratowa mała'];
    const result = generateProductFileNames('Rodzicom', productNames);
    
    result.forEach(item => {
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('src');
      expect(typeof item.name).toBe('string');
      expect(typeof item.src).toBe('string');
    });
  });

  test('generuje poprawne ścieżki URL do obrazków', () => {
    const productNames = ['CEWE FOTOKSIĄŻKA kwadratowa mała'];
    const result = generateProductFileNames('Rodzicom', productNames);
    
    expect(result[0].src).toContain('https://cdn.cewe.pl/GiftAppReact/imagesApp/');
    expect(result[0].src).toContain('.jpg');
  });

  test('działa z pustą tablicą produktów', () => {
    const result = generateProductFileNames('Rodzicom', []);
    expect(result).toEqual([]);
  });

  test('generuje unikalne nazwy plików dla różnych produktów', () => {
    const productNames = [
      'CEWE FOTOKSIĄŻKA kwadratowa mała',
      'Zdjęcie w ramce',
      'Kalendarz biurkowy eko'
    ];
    const result = generateProductFileNames('Rodzicom', productNames);
    
    const sources = result.map(r => r.src);
    const uniqueSources = [...new Set(sources)];
    
    // Każdy produkt powinien mieć unikalną ścieżkę
    expect(uniqueSources.length).toBe(sources.length);
  });
});

describe('Integracja - Pełny przepływ danych', () => {
  test('pełny przepływ: od wyboru do produktów z obrazkami', () => {
    // 1. Znajdź produkty
    const products = findMatchingProducts(
      'Subtelny gest',
      'Pamiątka na lata',
      'Rodzicom'
    );
    
    expect(products.length).toBeGreaterThan(0);
    
    // 2. Wygeneruj ścieżki do obrazków
    const productNames = products.map(p => p.name);
    const images = generateProductFileNames('Rodzicom', productNames);
    
    expect(images.length).toBe(products.length);
    
    // 3. Połącz produkty z obrazkami
    const productsWithImages = products.map(product => {
      const img = images.find(i => i.name === product.name);
      return { ...product, src: img ? img.src : "" };
    });
    
    // 4. Sprawdź czy wszystkie produkty mają obrazki
    productsWithImages.forEach(product => {
      expect(product.src).toBeDefined();
      expect(product.src.length).toBeGreaterThan(0);
    });
  });

  test('obsługuje wszystkie kombinacje parametrów', () => {
    const prices = ['Subtelny gest', 'Wyjątkowy akcent', 'Królestwo możliwości'];
    const categories = ['Pamiątka na lata', 'Kreatywny', 'Osobisty', 'Dekoracyjny'];
    const recipients = ['Rodzicom', 'Dziadkom', 'Drugiej Połówce'];
    
    let totalCombinations = 0;
    let successfulCombinations = 0;
    
    prices.forEach(price => {
      categories.forEach(category => {
        recipients.forEach(recipient => {
          totalCombinations++;
          const products = findMatchingProducts(price, category, recipient);
          if (products && products.length > 0) {
            successfulCombinations++;
          }
        });
      });
    });
    
    // Powinno być dużo udanych kombinacji
    expect(successfulCombinations).toBeGreaterThan(0);
    expect(successfulCombinations).toBeLessThanOrEqual(totalCombinations);
  });
});

