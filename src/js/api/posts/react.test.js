import { react } from "./react.js";

const expected = {
  data: {
    postId: 0,
    symbol: "string",
    reactions: [
      {
        symbol: "string",
        count: 0,
        reactors: ["string"],
      },
    ],
  },
  meta: {},
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    data: {
      postId: 0,
      symbol: "string",
      reactions: [
        {
          symbol: "string",
          count: 0,
          reactors: ["string"],
        },
      ],
    },
    meta: {},
  }),
});

global.fetch = mockFetchSuccess;

describe("react", () => {
  it("adds a reaction to a post", async () => {
    const data = await react("string", "string");
    expect(data).toEqual(expected);
  });
});
