import React, { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import QuestionStep from './components/QuestionStep';
import ResultsStep from './components/ResultsStep';
import Newsletter from './components/newsletter';
import { 
  recipientOptions, 
  productAttributes, 
  categoryImageMap, 
  priceImageMap,
  generateProductFileNames,
  findMatchingProducts 
} from './data/productData';

 

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userChoices, setUserChoices] = useState({
    recipient: null,
    category: null,
    priceRange: null
  });

  const steps = [
    {
      title: "Komu chcesz go podarować?",
      choices: recipientOptions,
      key: 'recipient'
    },
    {
      title: "Jakiego prezentu szukasz?",
      choices: Object.keys(productAttributes.categories).map(category => ({
        src: `${process.env.PUBLIC_URL}/imagesApp/${categoryImageMap[category]}`,
        description: category
      })),
      key: 'category'
    },
    {
      title: "Ile możesz przeznaczyć na prezent?",
      choices: Object.keys(productAttributes.prices).map(price => ({
        src: `${process.env.PUBLIC_URL}/imagesApp/${priceImageMap[price]}`,
        description: price
      })),
      key: 'priceRange'
    }
  ];

  const handleStart = () => {
    // Jeśli użytkownik pominął newsletter wcześniej, przejdź od razu do pytań
    try {
      const skipped = localStorage.getItem('newsletterSkipped') === '1';
      if (skipped) {
        setCurrentStep(2);
        return;
      }
    } catch {}
    setCurrentStep(1);
  };

  const handleNewsletterDone = () => {
    // Po zapisie lub pominięciu newslettera przejdź do pierwszego pytania
    setCurrentStep(2);
  };

  const handleChoiceSelect = (choice) => {
    const stepIndex = currentStep - 2; // pytania zaczynają się od kroku 2
    const currentStepKey = steps[stepIndex]?.key;
    if (!currentStepKey) {
      // poza zakresem kroków pytań – nic nie rób
      return;
    }
    setUserChoices(prev => ({
      ...prev,
      [currentStepKey]: choice
    }));

    if (currentStep < steps.length + 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setUserChoices({
      recipient: null,
      category: null,
      priceRange: null
    });
  };

    const getFilteredProducts = () => {
    if (!userChoices.recipient || !userChoices.category || !userChoices.priceRange) {
      return [];
    }
    const matchedProducts = findMatchingProducts(
      userChoices.priceRange,
      userChoices.category,
      userChoices.recipient
    );
    const productNames = matchedProducts.map(p => p.name);
    const images = generateProductFileNames(userChoices.recipient, productNames);
    console.log(productNames)
    console.log(images)
  
    return matchedProducts.map(product => {
      const img = images.find(i => i.name === product.name);
      console.log(img)
      return { ...product, src: img ? img.src : "" };
    });
  };
//poczatek krecenia
  const renderCurrentStep = () => {
    if (currentStep === 0) {
      return (
        <div className="app__welcome">
          <Header />
          <Button onClick={handleStart}>
            ZNAJDŹ PREZENT
          </Button>
        </div>
      );
    }

    // Krok 1: newsletter
    if (currentStep === 1) {
      return (
        <div className="app__newsletter-step">
          <Newsletter onSuccess={handleNewsletterDone} onSkip={handleNewsletterDone} />
        </div>
      );
    }

    // Kroki pytań zaczynają się od 2
    if (currentStep <= steps.length + 1) {
      const step = steps[currentStep - 2];
      return (
        <QuestionStep
          title={step.title}
          choices={step.choices}
          onChoiceSelect={handleChoiceSelect}
          onBack={() => setCurrentStep(prev => Math.max(1, prev - 1))}
          selectedChoice={userChoices[step.key]}
          step={currentStep - 1}
          totalSteps={steps.length + 1}
        />
      );
    }

    return (
      <ResultsStep
        products={getFilteredProducts()}
        onReset={handleReset}
      />
    );
  };

  return (
    <div className="app">
      <main className="app__main">
        {renderCurrentStep()}
      </main>
    </div>
  );
};

export default App;
