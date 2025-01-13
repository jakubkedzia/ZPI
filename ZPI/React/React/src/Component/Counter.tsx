import { useState } from 'react';

const Counter = () => {

const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);

return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ fontSize: '24px' }}>Wartość: {count}</p>
      <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>+1</button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>-1</button>
    </div>
  );
};

export default Counter;
