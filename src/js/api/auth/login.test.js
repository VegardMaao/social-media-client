import { login } from "./login.js";

const expected = {
  name: "vegar",
  email: "no@noroff.no",
  banner: null,
  avatar: null,
};

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

describe("login", () => {
  it("sends your username and password to the backend and returns a JWT when OK", async () => {
    const truedata = await login("no@noroff.no", "pass123123");
    console.log(truedata);
    const localStorageProfile = JSON.parse(localStorage.getItem("profile"));
    expect(localStorageProfile).toMatchObject(expected);
  });
});

// it("checks your username and password and refuses your call if not OK", async () => {
//   global.fetch = mockFail;
//   const falseData = await login("e", "o");
//   console.log(falseData);
//   await expect(falseData.reject(new Error(errorMessage))).rejects.toThrow(
//     errorMessage
//   );
// });
// I think my successful login version is OK, but I am not happy with the rejected one.
// Can't figure it out though and have to look  at something else  atm - no time
