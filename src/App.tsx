import Routing from './Routes/Routes';
import classes from "./App.module.css"

function App() {
  return (
    <div className={classes.background}>
      <header>
        <Routing/>
      </header>
    </div>
  );
}

export default App;