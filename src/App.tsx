import './App.css';
import { ContextProvider } from './context/context';
import Routing from './Routes/Routes';
function App():any {
  return (
    <div >
    <ContextProvider>
      <header >
        <Routing/>
      </header>
      </ContextProvider>
    </div>
  );
}

export default App;