// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './components/UseEffect';
// import Viewer from './components/Viewer';
// import Controller from './components/Controller';


const App = () => {
  // const [count, setCount] = useState(0);
  // const handleSetCount = (value) => {
  //   setCount(count + value);
  // };

  return (
    <>
      <div>
        {/* <h1>Counter</h1>
        <section>
          <Viewer count={count} />
        </section>
        <section>
          <Controller handleSetCount={handleSetCount} />
        </section> */}

        <UseEffect />
      </div>
    </>
  );
};

export default App;
