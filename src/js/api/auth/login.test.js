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
  meta: {},
};

const mockFetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(expected),
});

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

global.fetch = mockFetch;

describe("login", () => {
  it("sends your username and password to the backend and returns a JWT if OK", async () => {
    const data = await login();
    console.log(data.data.accessToken);
    expect(data.data.accessToken).toEqual(expected.data.accessToken);
  });
});
