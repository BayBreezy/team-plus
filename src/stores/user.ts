import { store } from "@davstack/store";
import type { User } from "@/types";

type State = {
  user: User | null;
};

/**
 * Store to manage user state
 */
export const userStore = store<State>(
  {
    user: {
      firstName: "Behon",
      lastName: "Baker",
      email: "behon.baker@yahoo.com",
      avatar: "https://behonbaker.com/icon.png",
    },
  },
  { devtools: { enabled: true, name: "userStore" }, name: "userStore" }
)
  .actions((store) => ({
    setUser: (user: User) => store.set({ user }),
    clearUser: () => store.set({ user: null }),
  }))
  .computed((store) => ({
    isAuthenticated: () => !!store.user.use(),
    userFullName: () =>
      store.user ? `${store.user.use()?.firstName} ${store.user.use()?.lastName}` : "",
    userAvatar: () => store.user?.use()?.avatar,
  }));
