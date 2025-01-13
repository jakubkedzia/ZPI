import React, { useState } from 'react';

const MyComponent: React.FC = () => {
  const [name, setName] = useState<string>(''); // Stan do przechowywania imienia i nazwiska

  const handleClick = () => {
    setName('Jakub Kedzia'); // Tutaj wpisz swoje imię i nazwisko
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>{name || 'Kliknij przycisk, aby zobaczyć swoje imię i nazwisko'}</p>
      <button onClick={handleClick}>Pokaż Imię i Nazwisko</button>
    </div>
  );
};

export default MyComponent;
