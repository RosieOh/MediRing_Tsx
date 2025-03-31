import React, { createContext, ReactNode, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string, asAdmin?: boolean) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, asAdmin: boolean = false) => {
    try {
      // TODO: 실제 API 호출로 대체
      if (email === 'admin' && password === '1234') {
        setUser({
          id: '1',
          name: '관리자',
          email: 'admin@example.com',
          isAdmin: true
        });
        setIsAuthenticated(true);
      } else {
        setUser({
          id: '2',
          name: '홍길동',
          email: email,
          isAdmin: false
        });
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 