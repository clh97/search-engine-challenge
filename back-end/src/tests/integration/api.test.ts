import supertest from "supertest";

import app from "../../app";

import { Article } from "../../model";

beforeEach(async () => {
  await Article.sync({ force: true });

  await Article.create({
    title: "Test Article",
    photo: "https://placekitten.com/500/500",
    description: "Test Content",
    shortDescription: "Test",
  });

  await Article.create({
    title: "Test Article a",
    photo: "https://placekitten.com/505/505",
    description: "Test Content a",
    shortDescription: "Test a",
  });

  await Article.create({
    title: "Test Article b",
    photo: "https://placekitten.com/510/510",
    description: "Test Content b",
    shortDescription: "Test b",
  });

  await Article.create({
    title: "Test Article c",
    photo: "https://placekitten.com/503/503",
    description: "Test Content c",
    shortDescription: "Test c",
  });

  await Article.create({
    title: "Test Article d",
    photo: "https://placekitten.com/502/502",
    description: "Test Content d",
    shortDescription: "Test d",
  });

  await Article.create({
    title: "Test Article e",
    photo: "https://placekitten.com/515/515",
    description: "Test Content e",
    shortDescription: "Test e",
  });

  await Article.create({
    title: "Test Article f",
    photo: "https://placekitten.com/500/500",
    description: "Test Content f",
    shortDescription: "Test f",
  });

  await Article.create({
    title: "Test Article g",
    photo: "https://placekitten.com/550/550",
    description: "Test Content g",
    shortDescription: "Test g",
  });
});

/* search test */
test.each([
  ["a", 8, 200],
  ["zzzzz", 0, 200],
  ["", 0, 400],
  ["Article c", 1, 200],
  ["ArTiClE C", 1, 200],
])(
  "search should return articles appropriately",
  async (query, length, status) => {
    const response = await supertest(app).get(`/search?q=${query}`);

    expect(response.status).toBe(status);
    if (response.body.success) {
      expect(response.body.data.length).toBe(length);
    }
  }
);

/* article test */
test.each([
  [
    1,
    {
      title: "Test Article",
      photo: "https://placekitten.com/500/500",
      description: "Test Content",
      shortDescription: "Test",
    },
    200,
  ],
  [
    2,
    {
      title: "Test Article a",
      photo: "https://placekitten.com/505/505",
      description: "Test Content a",
      shortDescription: "Test a",
    },
    200,
  ],
  [
    8,
    {
      title: "Test Article g",
      photo: "https://placekitten.com/550/550",
      description: "Test Content g",
      shortDescription: "Test g",
    },
    200,
  ],
  [9, null, 404],
])(
  "article should return article data appropriately",
  async (id, expected, status) => {
    const response = await supertest(app).get(`/article/${id}`);

    expect(response.status).toBe(status);
    if (response.body.success) {
      delete response.body.data.id;
      delete response.body.data.createdAt;
      delete response.body.data.updatedAt;
      expect(response.body.data).toStrictEqual(expected);
    }
  }
);
