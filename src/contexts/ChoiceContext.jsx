import React, { createContext, useState } from "react";

export const ChoiceContext = createContext();

export const ChoiceProvider = ({ children }) => {
  const [choice, setChoice] = useState({ item: null, borderClass: null });
  const [cpuChoice, setCpuChoice] = useState({ item: null, borderClass: null }); 

  return (
    <ChoiceContext.Provider
      value={{ choice, setChoice, cpuChoice, setCpuChoice }}
    >
      {children}
    </ChoiceContext.Provider>
  );
};
