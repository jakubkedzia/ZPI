import  { useState } from 'react';

const FavoriteLinksMultiSelect = () => {
  const links = [
    { id: 1, name: 'Google', url: 'https://www.google.com' },
    { id: 2, name: 'GitHub', url: 'https://github.com' },
    { id: 3, name: 'Stack Overflow', url: 'https://stackoverflow.com' },
  ];

  const [clickedLinks, setClickedLinks] = useState<number[]>([]);

  const handleClick = (id: number) => {
    setClickedLinks((prev) =>
      prev.includes(id) ? prev.filter((linkId) => linkId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h2>Ulubione linki (Wielokrotny wybór)</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {links.map((link) => (
          <li
            key={link.id}
            onClick={() => handleClick(link.id)}
            style={{
              backgroundColor: clickedLinks.includes(link.id) ? 'yellow' : 'transparent',
              padding: '10px',
              margin: '5px 0',
              border: '1px solid black',
              cursor: 'pointer',
            }}
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteLinksMultiSelect;
