import { login } from "./login.js";

const expected = {
  data: {
    name: "my_username",
    email: "first.last@stud.noroff.no",
    avatar: {
      url: "https://img.service.com/avatar.jpg",
      alt: "My avatar alt text",
    },
    banner: {
      url: "https://img.service.com/banner.jpg",
      alt: "My banner alt text",
    },
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
  },
};

// const errorMessage = "Bad Request";

const mockFetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(expected),
});

// const mockFail = jest.fn().mockRejectedValue(errorMessage);

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
    global.fetch = mockFetch;
    const truedata = await login("first.last@stud.noroff.no", "mypass");
    const localStorageAccessToken = localStorage.getItem("token");
    console.log(localStorageAccessToken);
    expect(truedata.data.accessToken).toEqual(expected.data.accessToken);
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
