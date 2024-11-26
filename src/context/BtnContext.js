import { createContext, useContext, useState } from 'react';

const BtnContext = createContext();

export const BtnProvider = ({ children }) => {
    const [like, setLike] = useState(false);
    const toggleLike = () => {
        setLike(!like);
    };
    return <BtnContext.Provider value={{ like, toggleLike }}>{children}</BtnContext.Provider>;
};

export const useBtn = () => {
    const context = useContext(BtnContext);
    if (!context) {
        throw new Error('useButtonContext must be used within a ButtonProvider');
    }
    return context;
};
