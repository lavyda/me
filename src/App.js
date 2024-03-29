import './App.css';
import Greeting from './Greeting';
import { useEffect, useState } from 'react';
import Main from './Main';

function App() {
  const [visibleGreeting, setVisibleGreeting] = useState(true);
  const [visibleMain, setVisibleMain] = useState(false);
  useEffect(() => {
    const setVisibility = async () => {
      setTimeout(() => setVisibleGreeting(false), 1500);
      setTimeout(() => setVisibleMain(true), 1500);
    }
    setVisibility();
  });
  return (
    <>
      {visibleGreeting && <Greeting />}
      {visibleMain && <Main />}
    </>
  );
}

export default App;
