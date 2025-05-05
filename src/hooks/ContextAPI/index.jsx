import { createContext, useContext } from "react";

// Creating a context
// eslint-disable-next-line react-refresh/only-export-components
export const BioContext = createContext(); //This creates a context object

// Creating a provider
export const BioProvider = ({ children }) => {
  const myName = "Suman"
  const myAge = 21

  return (
    <BioContext.Provider value={{myName , myAge}}>
      {children}
    </BioContext.Provider>
  );
};


// custom hooks
// eslint-disable-next-line react-refresh/only-export-components
export const useBioContext = () => {
    const context = useContext(BioContext);
    return context;
  };
  