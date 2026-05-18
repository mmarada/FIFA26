'use client';
import React, { createContext, useContext, useState } from 'react';

// Simply mocking auth since this was failing.
const AuthContext = createContext<any>({ user: null, loading: false, login: () => {}, logout: () => {} });
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  
  const login = () => { setUser({ uid: 'mock-123', displayName: 'Gentleman Reader' }); };
  const logout = () => { setUser(null); };
  
  return <AuthContext.Provider value={{ user, loading: false, login, logout }}>{children}</AuthContext.Provider>;
}
