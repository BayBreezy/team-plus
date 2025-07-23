import { describe, expect, it } from "vitest";

import { userStore } from "../../src/stores/user";

describe("User Store Tests", () => {
  it("should initialize with default user", () => {
    const user = userStore.user.get();
    expect(user).toBeDefined();
    expect(user.firstName).toBe("Behon");
    expect(user.lastName).toBe("Baker");
    expect(user.email).toBe("behon.baker@yahoo.com");
    expect(user.avatar).toBe("https://behonbaker.com/icon.png");
  });

  it("should set new user correctly", () => {
    const newUser = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      avatar: "https://john.doe.com/icon.png",
    };
    userStore.user.set(newUser);
    const user = userStore.user.get();
    expect(user).toBeDefined();
    expect(user.firstName).toBe("John");
    expect(user.lastName).toBe("Doe");
    expect(user.email).toBe("john.doe@example.com");
    expect(user.avatar).toBe("https://john.doe.com/icon.png");
    expect(userStore.userFullName.get()).toBe("John Doe");
  });
});
