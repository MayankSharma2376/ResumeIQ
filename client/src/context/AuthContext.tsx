import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import { getProfile } from "../services/auth.service";
import type { User } from "../types/user";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

      const refreshUser = async () => {
    try {
        const res = await getProfile();
        setUser(res.data.data);
    } catch {
        setUser(null);
    }
};


    useEffect(()=>{
        refreshUser().finally(()=>{
            setLoading(false)
        })
    })


  
    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                setUser,
                refreshUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
};