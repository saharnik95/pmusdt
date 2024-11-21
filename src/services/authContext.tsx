import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: { name: string; email: string } | null;
  login: (
    name: string,
    email: string,
    password: string,
    keepLoggedIn: boolean
  ) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (
    name: string,
    email: string,
    password: string,
    keepLoggedIn: boolean
  ) => {
    const userData = { name, email };
    setUser(userData);
    if (keepLoggedIn) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
