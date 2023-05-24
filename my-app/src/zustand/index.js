import create from 'zustand';
import { persist } from 'zustand/middleware';
const useBearStore = create(
  persist(
    (set, get) => ({
      user: {},
      token: "",
      setUser: (user) => {
        set((state) => ({
          user:user
        }));
      },
      setToken: (token) => {
        set((state) => ({
          token:token
        }));
      },
    }),
    { name: 'user' }
  )
);
export default useBearStore;