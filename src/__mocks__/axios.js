import prizes from "./prizes.mock.json";
import quests from "./quests.mock.json";
import stores from "./stores.mock.json";

const fixtures = {
  user: {
    id: 1,
    family_id: 1,
  },
  prizes: prizes,
  quests: quests,
  stores: stores,
};

export default {
  defaults: { baseUrl: "" },
  get: jest.fn((url) => {
    if (url === "/quests") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.quests,
      });
    }

    if (url === "/stores") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.stores,
      });
    }

    if (url === "/prizes") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.prizes,
      });
    }
  }),
  post: jest.fn((url) => {
    if (url === "/quests") {
      return Promise.resolve({
        status: 204,
        statusText: "No Content",
      });
    }

    if (url === "/tasks") {
      return Promise.resolve({
        status: 204,
        statusText: "No Content",
      });
    }
  }),
};
