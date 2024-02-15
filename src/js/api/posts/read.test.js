import { getPosts } from "./read";

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue([
    {
      title: "string",
      body: "string",
      tags: ["string"],
      media: "string",
      reactions: [
        {
          symbol: "string",
          count: 0,
          postId: 0,
        },
      ],
      comments: [
        {
          body: "string",
          replyToId: 0,
          id: 0,
          postId: 0,
          owner: "string",
          created: "2024-02-14T13:58:27.483Z",
          author: {
            name: "string",
            email: "user@example.com",
            avatar: "string",
            banner: "string",
          },
        },
      ],
      created: "2024-02-14T13:58:27.483Z",
      updated: "2024-02-14T13:58:27.483Z",
      id: 0,
      author: {
        name: "string",
        email: "user@example.com",
        avatar: "string",
        banner: "string",
      },
      _count: {
        comments: 0,
        reactions: 0,
      },
    },
  ]),
});

global.fetch = mockFetchSuccess;

const expected = [
  {
    title: "string",
    body: "string",
    tags: ["string"],
    media: "string",
    reactions: [
      {
        symbol: "string",
        count: 0,
        postId: 0,
      },
    ],
    comments: [
      {
        body: "string",
        replyToId: 0,
        id: 0,
        postId: 0,
        owner: "string",
        created: "2024-02-14T13:58:27.483Z",
        author: {
          name: "string",
          email: "user@example.com",
          avatar: "string",
          banner: "string",
        },
      },
    ],
    created: "2024-02-14T13:58:27.483Z",
    updated: "2024-02-14T13:58:27.483Z",
    id: 0,
    author: {
      name: "string",
      email: "user@example.com",
      avatar: "string",
      banner: "string",
    },
    _count: {
      comments: 0,
      reactions: 0,
    },
  },
];

describe("getPosts", () => {
  it("returns an array of posts", async () => {
    const data = await getPosts();
    expect(data).toEqual(expect.arrayContaining(expected));
  });
});
