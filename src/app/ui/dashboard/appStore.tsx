import { create } from "zustand";
import { persist } from "zustand/middleware"

let appStore = (set: (arg0: (state: any) => { dopen: any; }) => any) => ({
    dopen: true,
    updateOpen: (dopen: any) => set((state: any) => ({dopen:dopen})),
});

appStore = persist(appStore, {name : "my_app_store"});
export const useAppStore = create(appStore);