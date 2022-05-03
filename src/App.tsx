import { ContextProvider } from './context/context';
import Routing from './Routes/Routes';
import classes from "./App.module.css"

function App() {
  return (
    <div className={classes.background}>
    <ContextProvider>
      <header>
        <Routing/>
      </header>
      </ContextProvider>
    </div>
  );
}

export default App;