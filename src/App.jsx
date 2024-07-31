import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleChange = (val) => {};

  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
};

export default App;
