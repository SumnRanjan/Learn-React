import React, { Fragment } from "react";
// import "./Components/Netflix.css"
// import "./Components/Netflix.module.css"

import Netflix from "./Components/Netflix";
import Profile from "./Components/Profile";
import { EventHandling } from "./Components/EventHandling";
import { EventProps } from "./Components/EventProps";
import { EventPropagation } from "./Components/EventPropagation";
import State from "./hooks/State";
import { DericedState } from "./Components/DeriveState";
import { LiftingState } from "./Components/LiftingState";
import { ToggleSwitch } from "./Projects/ToggleSwitch/ToggleSwitch";
import { Todo } from "./Projects/TodoList/Todo";
import ShortCircuit from "./hooks/ShortCircuit";
import { Keys } from "./Keys";
import { Counter } from "./hooks/useState/Counter";
import CounterChallenge from "./hooks/useState/Challenge";
import ControlledForm from "./hooks/useState/Controlled";
import { RegistrationForm } from "./hooks/useState/Registration";
import { RegistrationFormReact } from "./hooks/useState/RegistrationReact";
import { LoginForm } from "./hooks/useState/Login";
import { ContactForm } from "./hooks/useState/ContactForm";
import { ReactUseEffect } from "./hooks/useEffect";
import {EffectChallenge} from "./hooks/useEffect/EffectChallenge"
import { CleanUp } from "./hooks/useEffect/CleanUp";
import { HowNotToFetchApi } from "./hooks/useEffect/HowNotToFetchApi";
import { FetchApi } from "./hooks/useEffect/FetchApi";

export const App = () => {
  return (
    <section className="container">
      {/* <h1 className="text-xl text-blue-800 underline bg-amber-300">hello</h1>
      <h1 className=" font-red underline "> List of Best Netflix Series</h1>
      <Netflix />
      <Profile /> */}
      {/* <EventHandling/> */}
      {/* <EventProps/> */}
      {/* <EventPropagation/> */}
      {/* <State /> */}
      {/* <DericedState/> */}
      {/* <LiftingState/> */}
      {/* <ToggleSwitch /> */}
      {/* <Todo /> */}
      {/* <Keys />   */}
      {/* <ShortCircuit /> */}
      {/* <Counter/> */}
      {/* <CounterChallenge /> */}
      {/* < ControlledForm /> */}
      {/* <RegistrationForm/> */}
      {/* <RegistrationFormReact/> */}
      {/* <LoginForm /> */}
      {/* <ContactForm /> */}
      {/* <ReactUseEffect /> */}
      {/* <EffectChallenge/> */}
      {/* <CleanUp /> */}
      {/* <HowNotToFetchApi/> */}
      <FetchApi />

    </section>
  );
}; 
