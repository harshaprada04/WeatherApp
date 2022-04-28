import { ContextProvider } from './context/context';
import Routing from './Routes/Routes';
import classes from "./App.css"

function App():any {
  return (
    <div >
    <ContextProvider>
      <header>
        <Routing/>
      </header>
      </ContextProvider>
    </div>
  );
}

export default App;