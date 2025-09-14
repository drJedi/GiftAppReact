import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Button from './components/Button';
import QuestionStep from './components/QuestionStep';
import ResultsStep from './components/ResultsStep';
import { 
  recipientOptions, 
  productAttributes, 
  categoryImageMap, 
  priceImageMap,
  findMatchingProducts 
} from './data/productData';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
`;

const WelcomeContainer = styled.div`
  text-align: center;
  animation: fadeIn 1s ease-out;
`;

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userChoices, setUserChoices] = useState({
    recipient: null,
    category: null,
    priceRange: null
  });

  const steps = [
    {
      title: "Dla kogo ten prezent?",
      choices: recipientOptions,
      key: 'recipient'
    },
    {
      title: "Wybierz kategorię prezentu",
      choices: Object.keys(productAttributes.categories).map(category => ({
        src: `./imagesApp/${categoryImageMap[category]}`,
        description: category
      })),
      key: 'category'
    },
    {
      title: "Wybierz przedział cenowy",
      choices: Object.keys(productAttributes.prices).map(price => ({
        src: `./imagesApp/${priceImageMap[price]}`,
        description: price
      })),
      key: 'priceRange'
    }
  ];

  const handleStart = () => {
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
    return findMatchingProducts(
      userChoices.priceRange,
      userChoices.category,
      userChoices.recipient
    );
  };

  const renderCurrentStep = () => {
    if (currentStep === 0) {
      return (
        <WelcomeContainer>
          <Header />
          <Button onClick={handleStart}>
            Znajdź prezent
          </Button>
        </WelcomeContainer>
      );
    }

    if (currentStep <= steps.length) {
      const step = steps[currentStep - 1];
      return (
        <QuestionStep
          title={step.title}
          choices={step.choices}
          onChoiceSelect={handleChoiceSelect}
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
    <AppContainer>
      <MainContent>
        {renderCurrentStep()}
      </MainContent>
    </AppContainer>
  );
};

export default App;
