import React from 'react';
import './App.css';
import MyComponent from './Component/MyComponent';
import FavoriteLinksMultiSelect from './Component/FavoriteLinksMultiSelect';
import FavoriteLinksSingleSelect from './Component/FavoriteLinks';
import Counter from './Component/Counter';
import DoubleCounter from './Component/DoubleCounter'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Moja Aplikacja</h1>

      {/* Zadanie 1 */}
      <MyComponent />

      {/* Zadanie 2 */}
      <FavoriteLinksMultiSelect />

      {/* Zadanie 3 */}
      <FavoriteLinksSingleSelect />
    
      {/* {Zadanie 4} */}
      <Counter></Counter>

      {<DoubleCounter></DoubleCounter>}
    </div>  
  );
};

export default App;
