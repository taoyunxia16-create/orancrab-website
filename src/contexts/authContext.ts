import React from 'react';
import { createContext, useState, useContext, ReactNode } from "react";

// Define auth context type
interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

// Create auth context
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
});

// Default credentials
const DEFAULT_CREDENTIALS = {
  username: "admin",
  password: "admin"
};

// Auth provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Get auth status from local storage
    const savedAuth = localStorage.getItem("isAuthenticated");
    return savedAuth === "true";
  });

  // Login method
  const login = (username: string, password: string): boolean => {
    if (username === DEFAULT_CREDENTIALS.username && password === DEFAULT_CREDENTIALS.password) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  };

  // Logout method
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return React.createElement(
    AuthContext.Provider,
    { value: { isAuthenticated, login, logout } },
    children
  );
}

// Custom hook for using auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}