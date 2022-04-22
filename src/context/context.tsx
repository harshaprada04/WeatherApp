import { createContext } from "react";
import { useState } from "react";

const Context = createContext({
  details: [],
  setDetails: (a:any)=>{},
});

export function ContextProvider(props:any) {
  const [details, setDetails] = useState([]);
  
  const context = {
    details,
    setDetails,

  };

  return (
    <div>
      <Context.Provider value={context}>{props.children}</Context.Provider>
    </div>
  );
}

export default Context;
