import { useState } from 'react';

const FavoriteLinks = () => {
  // Lista ulubionych linków
  const links = [
    { id: 1, name: 'Google', url: 'https://www.google.com' },
    { id: 2, name: 'GitHub', url: 'https://github.com' },
    { id: 3, name: 'Stack Overflow', url: 'https://stackoverflow.com' },
  ];

  // Stan przechowujący id zaznaczonego linku (jednego)
  const [selectedLink, setSelectedLink] = useState<number | null>(null);

  // Obsługa kliknięcia na link
  const handleClick = (id: number) => {
    setSelectedLink(id); // Zapisz id wybranego linku
  };

  return (
    <div>
      <h2>Moje ulubione linki (Wybór pojedynczy)</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {links.map((link) => (
          <li
            key={link.id}
            onClick={() => handleClick(link.id)} // Zapisujemy wybrany link
            style={{
              backgroundColor: selectedLink === link.id ? 'yellow' : 'transparent', // Tło dla wybranego linku
              padding: '10px',
              margin: '5px 0',
              border: '1px solid black',
              cursor: 'pointer',
            }}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteLinks;
