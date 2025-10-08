import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuestionStep from './QuestionStep';

describe('QuestionStep Component', () => {
  const mockChoices = [
    { description: 'Wybór 1', src: 'image1.jpg' },
    { description: 'Wybór 2', src: 'image2.jpg' },
    { description: 'Wybór 3', src: 'image3.jpg' },
  ];

  const mockProps = {
    title: 'Testowe pytanie?',
    choices: mockChoices,
    onChoiceSelect: jest.fn(),
    onBack: jest.fn(),
    selectedChoice: null,
    step: 2,
    totalSteps: 4,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renderuje tytuł pytania', () => {
    render(<QuestionStep {...mockProps} />);
    expect(screen.getByText('Testowe pytanie?')).toBeInTheDocument();
  });

  test('renderuje wszystkie opcje wyboru', () => {
    render(<QuestionStep {...mockProps} />);
    expect(screen.getByText('Wybór 1')).toBeInTheDocument();
    expect(screen.getByText('Wybór 2')).toBeInTheDocument();
    expect(screen.getByText('Wybór 3')).toBeInTheDocument();
  });

  test('renderuje przycisk "Cofnij" gdy onBack jest przekazany', () => {
    render(<QuestionStep {...mockProps} />);
    const backButton = screen.getByRole('button', { name: /cofnij/i });
    expect(backButton).toBeInTheDocument();
  });

  test('nie renderuje przycisku "Cofnij" gdy onBack nie jest przekazany', () => {
    render(<QuestionStep {...mockProps} onBack={null} />);
    const backButton = screen.queryByRole('button', { name: /cofnij/i });
    expect(backButton).not.toBeInTheDocument();
  });

  test('wywołuje onBack po kliknięciu przycisku Cofnij', () => {
    render(<QuestionStep {...mockProps} />);
    const backButton = screen.getByRole('button', { name: /cofnij/i });
    fireEvent.click(backButton);
    expect(mockProps.onBack).toHaveBeenCalledTimes(1);
  });

  test('wywołuje onChoiceSelect z poprawną wartością', () => {
    render(<QuestionStep {...mockProps} />);
    const choice = screen.getByText('Wybór 2').closest('.choice-card');
    fireEvent.click(choice);
    expect(mockProps.onChoiceSelect).toHaveBeenCalledWith('Wybór 2');
  });

  test('wyświetla poprawny progress bar', () => {
    render(<QuestionStep {...mockProps} step={2} totalSteps={4} />);
    const progressBar = document.querySelector('.question__progressFill');
    // step 2 z 4 -> (2-1)/(4-1) * 100 = 33.33%
    expect(progressBar).toHaveStyle({ width: '33.333333333333336%' });
  });

  test('progress bar pokazuje 0% dla pierwszego kroku', () => {
    render(<QuestionStep {...mockProps} step={1} totalSteps={4} />);
    const progressBar = document.querySelector('.question__progressFill');
    expect(progressBar).toHaveStyle({ width: '0%' });
  });

  test('progress bar pokazuje 100% dla ostatniego kroku', () => {
    render(<QuestionStep {...mockProps} step={4} totalSteps={4} />);
    const progressBar = document.querySelector('.question__progressFill');
    expect(progressBar).toHaveStyle({ width: '100%' });
  });

  test('zaznacza wybraną opcję', () => {
    render(<QuestionStep {...mockProps} selectedChoice="Wybór 2" />);
    const choice = screen.getByText('Wybór 2').closest('.choice-card');
    expect(choice).toHaveClass('is-selected');
  });

  test('renderuje wybory z polem "name" zamiast "description"', () => {
    const choicesWithName = [
      { name: 'Nazwa 1', src: 'image1.jpg' },
      { name: 'Nazwa 2', src: 'image2.jpg' },
    ];
    render(<QuestionStep {...mockProps} choices={choicesWithName} />);
    expect(screen.getByText('Nazwa 1')).toBeInTheDocument();
    expect(screen.getByText('Nazwa 2')).toBeInTheDocument();
  });
});

