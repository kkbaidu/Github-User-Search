"use client"
import React, { useState, useEffect,createContext } from "react";
import { create } from "zustand";
import { User } from "@/lib/definitions";


interface GenerationState {
    user: User | undefined;
    setUser: (user: User) => void;
}

export const useGenerationStore = create<GenerationState>()((set) => ({
    user: undefined,
    setUser: (user: User) => set({ user })
}))


interface GenerationLoginState {
    login: string | undefined;
    setLogin: (login: string) => void;
}

export const useGenerationLoginStore = create<GenerationLoginState>()((setLogin) => ({
    login: undefined,
    setLogin: (login: string) => setLogin({ login })
}))

// interface UserContextType {
//     user: User | undefined;
//     setUser: (newUser: User) => void;
// }

// export const UserContext = createContext<UserContextType | undefined>(undefined)

// export const UserProvider = (children: React.ReactNode) => {
//     const [user, setUser] = useState<User | undefined>(undefined);

//     const updateUser = (newUser: User) => {
//         setUser(newUser);
//         localStorage.setItem('userContextData', JSON.stringify(newUser)); // Use the correct localStorage key
//     };
    
//     useEffect(() => {
//         // Load ID from localStorage on component mount
//         const savedUser = localStorage.getItem('userContextData'); // Use the correct localStorage key
//         if (savedUser) {
//         setUser(JSON.parse(savedUser));
//         }
//     }, []);

//     return (
//         <UserContext.Provider value={{ user, setUser: updateUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// }