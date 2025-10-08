# Dokumentacja Testów - React Gift Finder

## 📋 Przegląd

Aplikacja ma kompleksowy zestaw testów pokrywający wszystkie komponenty i logikę biznesową.

## 🧪 Struktura Testów

### Testy Komponentów

1. **Button.test.jsx** - Testy komponentu przycisku
   - Renderowanie tekstu
   - Obsługa kliknięć
   - Stan disabled
   - Przekazywanie props

2. **ChoiceCard.test.jsx** - Testy karty wyboru
   - Wyświetlanie obrazka i opisu
   - Obsługa kliknięć
   - Wizualne zaznaczanie wyboru
   - Atrybuty data-mod-log

3. **ProductCard.test.jsx** - Testy karty produktu
   - Wyświetlanie informacji o produkcie
   - Poprawność linków
   - Atrybuty śledzenia

4. **QuestionStep.test.jsx** - Testy kroku z pytaniem
   - Wyświetlanie pytania i opcji
   - Nawigacja (przycisk Cofnij)
   - Progress bar
   - Zapamiętywanie wyborów

5. **ResultsStep.test.jsx** - Testy ekranu wyników
   - Wyświetlanie produktów (max 3)
   - Obsługa pustej listy
   - Przycisk reset

### Testy Integracyjne

6. **App.test.jsx** - Testy głównego komponentu
   - Pełny przepływ aplikacji
   - Zarządzanie stanem
   - Nawigacja między krokami
   - Reset aplikacji
   - Obsługa localStorage

### Testy Logiki Biznesowej

7. **productData.test.jsx** - Testy danych i funkcji biznesowych
   - Struktura danych produktów
   - Filtrowanie produktów
   - Generowanie ścieżek do obrazków
   - Pełny przepływ danych

## 🚀 Jak Uruchomić Testy

### Uruchom wszystkie testy
```bash
cd react-gift-finder
npm test
```

### Uruchom testy z pokryciem kodu (coverage)
```bash
npm test -- --coverage --watchAll=false
```

### Uruchom testy w trybie watch (automatyczne odświeżanie)
```bash
npm test -- --watch
```

### Uruchom konkretny plik testowy
```bash
npm test Button.test.jsx
```

### Uruchom testy pasujące do wzorca
```bash
npm test -- --testNamePattern="renderuje"
```

## 📊 Czego Testują Poszczególne Zestawy

### Button Component (5 testów)
✅ Renderowanie z tekstem  
✅ Wywołanie funkcji onClick  
✅ Stan disabled  
✅ Dodawanie klas CSS  
✅ Przekazywanie dodatkowych props  

### ChoiceCard Component (6 testów)
✅ Renderowanie obrazka i opisu  
✅ Obsługa kliknięć  
✅ Wizualne zaznaczanie (klasa is-selected)  
✅ Brak zaznaczenia  
✅ Atrybuty śledzenia (data-mod-log)  
✅ Customizacja moduleName  

### ProductCard Component (5 testów)
✅ Renderowanie produktu  
✅ Poprawność linków i atrybutów  
✅ Atrybuty śledzenia  
✅ Customizacja  
✅ Obsługa braku obrazka  

### QuestionStep Component (10 testów)
✅ Renderowanie tytułu  
✅ Renderowanie wszystkich opcji  
✅ Przycisk Cofnij (obecność/brak)  
✅ Funkcja cofania  
✅ Wybór opcji  
✅ Progress bar (0%, 33%, 100%)  
✅ Zaznaczanie wybranej opcji  
✅ Obsługa różnych struktur danych  

### ResultsStep Component (8 testów)
✅ Renderowanie tytułu  
✅ Wyświetlanie produktów  
✅ Limit 3 produktów  
✅ Komunikat o braku produktów  
✅ Przycisk reset  
✅ Wywołanie funkcji reset  
✅ Linki do produktów  

### App Component (10+ testów)
✅ Ekran powitalny  
✅ Przejście do newslettera  
✅ Pomijanie newslettera (localStorage)  
✅ Pełny przepływ wyboru  
✅ Nawigacja wstecz  
✅ Progress bar  
✅ Zapamiętywanie wyborów  
✅ Wyświetlanie wyników  
✅ Reset aplikacji  
✅ Zarządzanie stanem  

### productData Tests (12+ testów)
✅ Struktura danych kategorii  
✅ Struktura danych cen  
✅ Struktura danych odbiorców  
✅ Funkcja findMatchingProducts  
✅ Różne kombinacje parametrów  
✅ Funkcja generateProductFileNames  
✅ Generowanie ścieżek URL  
✅ Pełny przepływ integracyjny  
✅ Wszystkie kombinacje parametrów  

## 🔍 Przykłady Użycia

### Przykład 1: Szybki test czy wszystko działa
```bash
npm test -- --watchAll=false
```

### Przykład 2: Sprawdzenie pokrycia kodu testami
```bash
npm test -- --coverage --watchAll=false
```

Wynik pokaże procentowe pokrycie:
- Statements (instrukcje)
- Branches (rozgałęzienia)
- Functions (funkcje)
- Lines (linie)

### Przykład 3: Debug konkretnego testu
```bash
npm test App.test.jsx -- --verbose
```

## 🐛 Debugowanie Testów

Jeśli test się nie powiedzie, zobaczysz szczegółowy komunikat:
```
FAIL  src/components/Button.test.jsx
  ● Button Component › renderuje przycisk z tekstem

    expect(received).toBeInTheDocument()

    received value must be an HTMLElement or an SVGElement.
    Received has value: null
```

### Częste problemy i rozwiązania

1. **Test timeout** - Zwiększ timeout:
```javascript
test('długi test', async () => {
  // ...
}, 10000); // 10 sekund
```

2. **Async problemy** - Użyj waitFor:
```javascript
await waitFor(() => {
  expect(screen.getByText('Tekst')).toBeInTheDocument();
});
```

3. **localStorage errors** - Mock jest już dodany w App.test.jsx

## 📈 Metryki Jakości

Dobrze napisane testy powinny:
- ✅ Być czytelne i zrozumiałe
- ✅ Testować jeden aspekt na raz
- ✅ Być niezależne od siebie
- ✅ Dawać jasne komunikaty błędów
- ✅ Być szybkie w wykonaniu

## 🎯 Rekomendacje

1. **Uruchamiaj testy przed każdym commitem**
```bash
npm test -- --watchAll=false
```

2. **Sprawdzaj pokrycie kodu regularnie**
```bash
npm test -- --coverage --watchAll=false
```

3. **Dodawaj testy do nowych funkcji**
- Każda nowa funkcja = nowy test
- Każdy bugfix = test regresyjny

4. **Używaj descriptive test names**
```javascript
// Dobrze ✅
test('wywołuje onClick po kliknięciu przycisku', () => {})

// Źle ❌
test('test 1', () => {})
```

## 🔧 Konfiguracja

Testy są skonfigurowane przez `react-scripts`. Dodatkowa konfiguracja w:
- `setupTests.js` - Ustawienia testowe (jest-dom)
- `package.json` - Scripts do uruchamiania testów

## 📚 Dodatkowe Zasoby

- [React Testing Library Docs](https://testing-library.com/react)
- [Jest Documentation](https://jestjs.io/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## 🎉 Podsumowanie

Aplikacja ma **56+ testów** pokrywających:
- ✅ Wszystkie komponenty UI
- ✅ Logikę biznesową
- ✅ Integrację między komponentami
- ✅ Zarządzanie stanem
- ✅ Obsługę błędów

Uruchom `npm test` aby zacząć! 🚀

