import { NEXT_URL } from "@/config";
import { User } from "@/types";
import { useRouter } from "next/router";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

type LoginArgs = {
  email: string;
  password: string;
};

type RegisterArgs = LoginArgs & { username: string };

interface IAuthContext {
  user: User | null;
  error: string | null;
  register: (args: RegisterArgs) => void;
  login: (args: LoginArgs) => void;
  logout: () => void;
  checkUserLoggedIn: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const register = async ({ username, email, password }: RegisterArgs) => {
    setError(null);

    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user as User);
      router.push("/account/dashboard");
    } else {
      setError(data.message as string);
    }
  };

  const login = async ({ email: identifier, password }: LoginArgs) => {
    setError(null);

    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user as User);
      router.push("/account/dashboard");
    } else {
      setError(data.message as string);
    }
  };

  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: "POST",
    });

    if (res.ok) {
      setUser(null);
      router.push("/");
    }
  };

  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        register,
        login,
        logout,
        checkUserLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
