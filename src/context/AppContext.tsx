'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { AppContextType } from '@/types/global';

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('en');
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ language, setLanguage, user }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}