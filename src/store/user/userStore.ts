import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User, UserState } from "./userSchema";

const initialState: User = {
  id: 0,
  name: "",
  email: "",
  role: undefined,
  isActive: false,
  createdAt: "",
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: initialState,
      updateUser: (user: User) =>
        set((state) => ({
          user: { ...state.user, ...user },
        })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
