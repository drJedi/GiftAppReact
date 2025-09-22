import React, { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import QuestionStep from './components/QuestionStep';
import ResultsStep from './components/ResultsStep';
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
<<<<<<< HEAD
    try {
      const skipped = localStorage.getItem('newsletterSkipped') === '1';
      if (skipped) {
        setCurrentStep(2);
        return;
      }
    } catch {}
=======
>>>>>>> parent of c443f2e (again)
    setCurrentStep(1);
  };

  const handleChoiceSelect = (choice) => {
    const currentStepKey = steps[currentStep - 1].key;
    setUserChoices(prev => ({
      ...prev,
      [currentStepKey]: choice
    }));

    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
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

    if (currentStep <= steps.length) {
      const step = steps[currentStep - 1];
      return (
        <QuestionStep
          title={step.title}
          choices={step.choices}
          onChoiceSelect={handleChoiceSelect}
          onBack={handleBack}
          selectedChoice={userChoices[step.key]}
          step={currentStep}
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
