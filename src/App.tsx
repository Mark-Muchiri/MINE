import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [ count, setCount ] = useState(0);

  return (
    <>
      <div className='flex justify-center flex-row text-4xl -mt-40'>
        <a href="https://vitejs.dev" className=' -mr-8' target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" className=' -ml-8' target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-bold'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='mt-5'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className="text-base font-sans text-slate-400">
        Hello world!
      </h1>
    </>
  );
}

export default App;
