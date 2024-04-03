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
    login: string;
    setLogin: (login: string) => void;
}

export const useGenerationLoginStore = create<GenerationLoginState>((set) => {
    const initialLogin = sessionStorage.getItem("login") || "";

    return {
        login: initialLogin,
        setLogin: (login: string) => {
            sessionStorage.setItem("login", login);
            set({ login });
        }
    };
});