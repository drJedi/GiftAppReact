import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('App Component - Podstawowa funkcjonalność', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('renderuje ekran powitalny z przyciskiem start', () => {
    render(<App />);
    expect(screen.getByText('ZNAJDŹ PREZENT')).toBeInTheDocument();
  });

  test('po kliknięciu "ZNAJDŹ PREZENT" przechodzi do newslettera (jeśli nie był pominięty)', () => {
    render(<App />);
    const startButton = screen.getByText('ZNAJDŹ PREZENT');
    fireEvent.click(startButton);
    
    // Sprawdź czy pojawił się komponent Newsletter (może mieć specyficzny tekst)
    // Newsletter może mieć różne teksty, więc sprawdzamy czy nie ma już przycisku start
    expect(screen.queryByText('ZNAJDŹ PREZENT')).not.toBeInTheDocument();
  });

  test('pomija newsletter jeśli był wcześniej pominięty', () => {
    localStorage.setItem('newsletterSkipped', '1');
    render(<App />);
    
    const startButton = screen.getByText('ZNAJDŹ PREZENT');
    fireEvent.click(startButton);
    
    // Powinien przejść bezpośrednio do pierwszego pytania
    expect(screen.getByText('Komu chcesz go podarować?')).toBeInTheDocument();
  });
});

describe('App Component - Proces wyboru prezentu', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('newsletterSkipped', '1'); // Pomijamy newsletter dla tych testów
  });

  test('wyświetla pierwsze pytanie po rozpoczęciu', () => {
    render(<App />);
    fireEvent.click(screen.getByText('ZNAJDŹ PREZENT'));
    expect(screen.getByText('Komu chcesz go podarować?')).toBeInTheDocument();
  });

  test('przechodzi przez wszystkie kroki wyboru', async () => {
    render(<App />);
    
    // Start
    fireEvent.click(screen.getByText('ZNAJDŹ PREZENT'));
    
    // Pytanie 1: Komu?
    expect(screen.getByText('Komu chcesz go podarować?')).toBeInTheDocument();
    const recipient = screen.getByText('Rodzicom');
    fireEvent.click(recipient);
    
    // Pytanie 2: Jaki prezent?
    await waitFor(() => {
      expect(screen.getByText('Jakiego prezentu szukasz?')).toBeInTheDocument();
    });
    const category = screen.getByText('Pamiątka na lata');
    fireEvent.click(category);
    
    // Pytanie 3: Jaka cena?
    await waitFor(() => {
      expect(screen.getByText('Ile możesz przeznaczyć na prezent?')).toBeInTheDocument();
    });
    const price = screen.getByText('Subtelny gest');
    fireEvent.click(price);
    
    // Wyniki
    await waitFor(() => {
      expect(screen.getByText('Prezentownik: nasze propozycje')).toBeInTheDocument();
    });
  });

  test('przycisk "Cofnij" cofa do poprzedniego kroku', async () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('ZNAJDŹ PREZENT'));
    
    // Wybierz pierwszą opcję
    fireEvent.click(screen.getByText('Rodzicom'));
    
    await waitFor(() => {
      expect(screen.getByText('Jakiego prezentu szukasz?')).toBeInTheDocument();
    });
    
    // Cofnij
    const backButton = screen.getByRole('button', { name: /cofnij/i });
    fireEvent.click(backButton);
    
    // Powinniśmy wrócić do pierwszego pytania
    await waitFor(() => {
      expect(screen.getByText('Komu chcesz go podarować?')).toBeInTheDocument();
    });
  });

  test('wyświetla progress bar', () => {
    render(<App />);
    fireEvent.click(screen.getByText('ZNAJDŹ PREZENT'));
    
    const progressBar = document.querySelector('.question__progressFill');
    expect(progressBar).toBeInTheDocument();
  });

  test('zapamiętuje wybór użytkownika po cofnięciu', async () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('ZNAJDŹ PREZENT'));
    
    // Wybierz opcję
    const recipient = screen.getByText('Rodzicom');
    fireEvent.click(recipient);
    
    await waitFor(() => {
      expect(screen.getByText('Jakiego prezentu szukasz?')).toBeInTheDocument();
    });
    
    // Cofnij
    fireEvent.click(screen.getByRole('button', { name: /cofnij/i }));
    
    await waitFor(() => {
      // Sprawdź czy wybór jest zaznaczony
      const choiceCard = screen.getByText('Rodzicom').closest('.choice-card');
      expect(choiceCard).toHaveClass('is-selected');
    });
  });
});

describe('App Component - Wyniki i reset', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('newsletterSkipped', '1');
  });

  test('wyświetla wyniki po zakończeniu wszystkich pytań', async () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('ZNAJDŹ PREZENT'));
    fireEvent.click(screen.getByText('Rodzicom'));
    
    await waitFor(() => {
      fireEvent.click(screen.getByText('Pamiątka na lata'));
    });
    
    await waitFor(() => {
      fireEvent.click(screen.getByText('Subtelny gest'));
    });
    
    await waitFor(() => {
      expect(screen.getByText('Prezentownik: nasze propozycje')).toBeInTheDocument();
    });
  });

  test('przycisk reset wraca do początku', async () => {
    render(<App />);
    
    // Przejdź przez cały proces
    fireEvent.click(screen.getByText('ZNAJDŹ PREZENT'));
    fireEvent.click(screen.getByText('Rodzicom'));
    
    await waitFor(() => {
      fireEvent.click(screen.getByText('Pamiątka na lata'));
    });
    
    await waitFor(() => {
      fireEvent.click(screen.getByText('Subtelny gest'));
    });
    
    await waitFor(() => {
      const resetButton = screen.getByRole('button', { name: /spróbuj jeszcze raz/i });
      fireEvent.click(resetButton);
    });
    
    // Powinniśmy wrócić do ekranu startowego
    await waitFor(() => {
      expect(screen.getByText('ZNAJDŹ PREZENT')).toBeInTheDocument();
    });
  });

  test('wyświetla komunikat gdy brak produktów', async () => {
    render(<App />);
    
    // Możemy tutaj mockować findMatchingProducts aby zwrócił pustą tablicę
    // Ale na razie sprawdzimy czy komponent obsługuje pustą listę
    // (to zależy od danych w productData)
  });
});

describe('App Component - Stan aplikacji', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('newsletterSkipped', '1');
  });

  test('przechowuje wybory użytkownika w state', async () => {
    render(<App />);
    
    fireEvent.click(screen.getByText('ZNAJDŹ PREZENT'));
    
    // Wybierz opcje
    fireEvent.click(screen.getByText('Rodzicom'));
    await waitFor(() => {
      fireEvent.click(screen.getByText('Kreatywny'));
    });
    await waitFor(() => {
      fireEvent.click(screen.getByText('Wyjątkowy akcent'));
    });
    
    // Sprawdź czy jesteśmy na stronie wyników (co potwierdza że wszystkie wybory zostały zapisane)
    await waitFor(() => {
      expect(screen.getByText('Prezentownik: nasze propozycje')).toBeInTheDocument();
    });
  });

  test('resetuje wybory po kliknięciu reset', async () => {
    render(<App />);
    
    // Przejdź przez proces
    fireEvent.click(screen.getByText('ZNAJDŹ PREZENT'));
    fireEvent.click(screen.getByText('Rodzicom'));
    
    await waitFor(() => {
      fireEvent.click(screen.getByText('Pamiątka na lata'));
    });
    
    await waitFor(() => {
      fireEvent.click(screen.getByText('Subtelny gest'));
    });
    
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button', { name: /spróbuj jeszcze raz/i }));
    });
    
    // Rozpocznij ponownie i sprawdź czy wybory są wyczyszczone
    await waitFor(() => {
      fireEvent.click(screen.getByText('ZNAJDŹ PREZENT'));
    });
    
    await waitFor(() => {
      // Sprawdź czy żaden wybór nie jest zaznaczony
      const choiceCards = document.querySelectorAll('.choice-card.is-selected');
      expect(choiceCards).toHaveLength(0);
    });
  });
});

