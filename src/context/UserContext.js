import { userData } from '@/components/data/userData';
import { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

// 사용
export const useUser = () => {
    return useContext(UserContext);
};
