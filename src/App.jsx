import { useState } from 'react';
import LandingPage from './LandingPage';
import Translator from './Translator';

export default function App() {
  const [showTranslator, setShowTranslator] = useState(false);

  return (
    <>
      {!showTranslator ? (

        <LandingPage onEnter={() => setShowTranslator(true)} />
      ) : (

        <Translator onBack={() => setShowTranslator(false)} />
      )}
    </>
  );
}