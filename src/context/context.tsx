import { createContext } from "react";
import { useState } from "react";

const Context = createContext({
  details: [],
  setDetails: (a:any)=>{},
  country:"",
  setCountry: (a:string)=>{},
});

export function ContextProvider(props:any) {
  const [details, setDetails] = useState([]);
  const [country, setCountry] = useState<any>("");
  const context = {
    details,
    setDetails,
    country,
    setCountry,
  };

  return (
    <div>
      <Context.Provider value={context}>{props.children}</Context.Provider>
    </div>
  );
}

export default Context;
