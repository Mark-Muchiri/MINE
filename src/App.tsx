import './App.css';
import Nav from './components/Nav.tsx';

function App() {

  return (
    <>
      <Nav />
      <p className='text-center mt-5 font-light text-3xl text-stone-300'>
        Night theme activated
      </p>
      <main>
        <h3 className='text-center mt-3'>
          This is the main content of the website
        </h3>
      </main>
    </>
  );
}

export default App;