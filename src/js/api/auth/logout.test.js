import { logout } from "./logout.js";

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

localStorage.setItem("token", JSON.stringify("token123"));
localStorage.setItem("profile", JSON.stringify("profile123"));

describe("logout", () => {
  it("removes your profile and token from localStorage", () => {
    logout();
    const localTokenAfter = localStorage.getItem("token");
    const localProfileAfter = localStorage.getItem("profile");
    expect(localTokenAfter).toBeNull();
    expect(localProfileAfter).toBeNull();
  });
});
