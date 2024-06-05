import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import fccLogo from './img/logo-fcc.png';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  const listenClick = () => {
    setCounter(counter + 1);
  };

  const restartClick = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <div className='container-logo-fcc'>
        <img className='logo-fcc' src={fccLogo} alt='freeCodeCamp logo' />
      </div>
      <div className='container-main'>
        <Counter counter={counter} />
        <Button
          text='Click'
          isButtonClick={true}
          listenClick={listenClick} />
        <Button
          text='Restart'
          isButtonClick={false}
          listenClick={restartClick} />
      </div>
    </div>
  );
}

export default App;
