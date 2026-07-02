import { useState, FormEvent } from 'react';
import { getTodaysPin } from '../utils/pinHelper';

interface PinScreenProps {
  onPinSuccess: () => void;
}

export function PinScreen({ onPinSuccess }: PinScreenProps) {
  const [inputPin, setInputPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const correctPin = getTodaysPin();

    if (inputPin === correctPin) {
      onPinSuccess();
    } else {
      setError('Incorrect PIN. Please try again.');
      setInputPin('');
    }
  };

  return (
    <div className="pin-screen">
      <form className="pin-form" onSubmit={handleSubmit}>
        <h2 className="pin-form__title">Enter PIN</h2>
        <p className="pin-form__subtitle">Enter access code to continue.</p>
        <input
          type="password"
          className="pin-form__input"
          value={inputPin}
          onChange={(e) => setInputPin(e.target.value)}
          placeholder="PIN"
          autoFocus
        />
        {error && <p className="pin-form__error">{error}</p>}
        <button type="submit" className="pin-form__button">
          Unlock
        </button>
      </form>
    </div>
  );
}