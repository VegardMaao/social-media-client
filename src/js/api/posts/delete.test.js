import { deletePost } from "./delete.js";

const expected = "204 No Content";

const mockFetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue("204 No Content"),
});

global.fetch = mockFetch;

describe("deletePost", () => {
  it("deletes an existing post in the array", async () => {
    const data = await deletePost();
    expect(data).toEqual(expected);
  });
});
