import { useContext , use} from "react";
import { BioContext , useBioContext } from ".";

export const Home = () => {
//   const {myName , myAge} = useContext(BioContext); 
    // const {myName , myAge} = useBioContext()
    const {myName , myAge} = use(BioContext) 

  return (
    <h1 className="text-3xl font-bold">
      Hello, {myName} , {myAge}!
    </h1>
  );
};
