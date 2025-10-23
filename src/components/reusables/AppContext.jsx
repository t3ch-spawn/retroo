import { createContext, useState, useContext } from "react";

// 1️⃣ Create the context
const AppContext = createContext();

// 2️⃣ Provide it
export function AppProvider({ children }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <AppContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </AppContext.Provider>
  );
}

// 3️⃣ Custom hook (optional but clean)
export function useApp() {
  return useContext(AppContext);
}
