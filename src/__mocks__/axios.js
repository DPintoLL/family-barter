const fixtures = {
  user: {
    id: 1,
    family_id: 1,
  },
  prizes: [],
  quests: [
    {
      id: 1,
      title: "A Common Quest",
      description: "A quest with only a single stage to complete.",
      assigned_to: null,
      stages: [
        {
          id: 1,
          index: 1,
          title: "First Stage",
          description:
            "The first stage of a common quest, with only a single task to complete.",
          is_completed: false,
          tasks: [
            {
              id: 1,
              index: 1,
              name: "Single Task",
              description: "",
              is_completed: false,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "An Uncommon Quest",
      description: "A quest with two stages to complete.",
      assigned_to: null,
      stages: [
        {
          id: 2,
          index: 1,
          title: "First Stage",
          description:
            "The first stage of an uncommon quest, with only a single task to complete.",
          is_completed: false,
          tasks: [
            {
              id: 2,
              index: 1,
              name: "Single Task",
              description: "",
              is_completed: false,
            },
          ],
        },
        {
          id: 3,
          index: 2,
          title: "Second Stage",
          description:
            "The second stage of an uncommon quest, with two tasks to complete.",
          is_completed: false,
          tasks: [
            {
              id: 3,
              index: 1,
              name: "First Task",
              description: "",
              is_completed: false,
            },
            {
              id: 4,
              index: 2,
              name: "Second Task",
              description: "",
              is_completed: false,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "A Rare Quest",
      description: "A quest with three stages to complete.",
      assigned_to: null,
      stages: [
        {
          id: 4,
          index: 1,
          title: "First Stage",
          description:
            "The first stage of a rare quest, with only a single task to complete.",
          is_completed: false,
          tasks: [
            {
              id: 5,
              index: 1,
              name: "Single Task",
              description: "",
              is_completed: false,
            },
          ],
        },
        {
          id: 5,
          index: 2,
          title: "Second Stage",
          description:
            "The second stage of an rare quest, with two tasks to complete.",
          is_completed: false,
          tasks: [
            {
              id: 6,
              index: 1,
              name: "First Task",
              description: "",
              is_completed: false,
            },
            {
              id: 7,
              index: 2,
              name: "Second Task",
              description: "",
              is_completed: false,
            },
          ],
        },
        {
          id: 6,
          index: 3,
          title: "Third Stage",
          description:
            "The third stage of a rare quest, with three tasks to complete.",
          is_completed: false,
          tasks: [
            {
              id: 8,
              index: 1,
              name: "First Task",
              description: "",
              is_completed: false,
            },
            {
              id: 9,
              index: 2,
              name: "Second Task",
              description: "",
              is_completed: false,
            },
            {
              id: 10,
              index: 3,
              name: "Third Task",
              description: "",
              is_completed: false,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "A Legendary Quest",
      description: "A quest with four stages to complete.",
      assigned_to: null,
      stages: [
        {
          id: 7,
          index: 1,
          title: "First Stage",
          description:
            "The first stage of a legendary quest, with only a single task to complete.",
          is_completed: false,
          tasks: [
            {
              id: 11,
              index: 1,
              name: "Single Task",
              description: "",
              is_completed: false,
            },
          ],
        },
        {
          id: 8,
          index: 2,
          title: "Second Stage",
          description:
            "The second stage of an legendary quest, with two tasks to complete.",
          is_completed: false,
          tasks: [
            {
              id: 12,
              index: 1,
              name: "First Task",
              description: "",
              is_completed: false,
            },
            {
              id: 13,
              index: 2,
              name: "Second Task",
              description: "",
              is_completed: false,
            },
          ],
        },
        {
          id: 9,
          index: 3,
          title: "Third Stage",
          description:
            "The third stage of a legendary quest, with three tasks to complete.",
          is_completed: false,
          tasks: [
            {
              id: 14,
              index: 1,
              name: "First Task",
              description: "",
              is_completed: false,
            },
            {
              id: 15,
              index: 2,
              name: "Second Task",
              description: "",
              is_completed: false,
            },
            {
              id: 16,
              index: 3,
              name: "Third Task",
              description: "",
              is_completed: false,
            },
          ],
        },
        {
          id: 10,
          index: 4,
          title: "Fourth Stage",
          description:
            "The fourth stage of a legendary quest, with four tasks to complete.",
          is_completed: false,
          tasks: [
            {
              id: 17,
              index: 1,
              name: "First Task",
              description: "",
              is_completed: false,
            },
            {
              id: 18,
              index: 2,
              name: "Second Task",
              description: "",
              is_completed: false,
            },
            {
              id: 19,
              index: 3,
              name: "Third Task",
              description: "",
              is_completed: false,
            },
            {
              id: 20,
              index: 4,
              name: "Fourth Task",
              description: "",
              is_completed: false,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "An Epic Quest",
      description: "A quest with five stages to complete.",
      assigned_to: null,
      stages: [
        {
          id: 11,
          index: 1,
          title: "First Stage",
          description:
            "The first stage of a epic quest, with only a single task to complete.",
          is_completed: false,
          tasks: [
            {
              id: 21,
              index: 1,
              name: "Single Task",
              description: "",
              is_completed: false,
            },
          ],
        },
        {
          id: 12,
          index: 2,
          title: "Second Stage",
          description:
            "The second stage of an epic quest, with two tasks to complete.",
          is_completed: false,
          tasks: [
            {
              id: 22,
              index: 1,
              name: "First Task",
              description: "",
              is_completed: false,
            },
            {
              id: 23,
              index: 2,
              name: "Second Task",
              description: "",
              is_completed: false,
            },
          ],
        },
        {
          id: 13,
          index: 3,
          title: "Third Stage",
          description:
            "The third stage of a epic quest, with three tasks to complete.",
          is_completed: false,
          tasks: [
            {
              id: 24,
              index: 1,
              name: "First Task",
              description: "",
              is_completed: false,
            },
            {
              id: 25,
              index: 2,
              name: "Second Task",
              description: "",
              is_completed: false,
            },
            {
              id: 26,
              index: 3,
              name: "Third Task",
              description: "",
              is_completed: false,
            },
          ],
        },
        {
          id: 14,
          index: 4,
          title: "Fourth Stage",
          description:
            "The fourth stage of a epic quest, with four tasks to complete.",
          is_completed: false,
          tasks: [
            {
              id: 27,
              index: 1,
              name: "First Task",
              description: "",
              is_completed: false,
            },
            {
              id: 28,
              index: 2,
              name: "Second Task",
              description: "",
              is_completed: false,
            },
            {
              id: 29,
              index: 3,
              name: "Third Task",
              description: "",
              is_completed: false,
            },
            {
              id: 30,
              index: 4,
              name: "Fourth Task",
              description: "",
              is_completed: false,
            },
          ],
        },
        {
          id: 15,
          index: 5,
          title: "Fifth Stage",
          description:
            "The fifth stage of an epic quest, with five tasks to complete.",
          is_completed: false,
          tasks: [
            {
              id: 31,
              index: 1,
              name: "First Task",
              description: "",
              is_completed: false,
            },
            {
              id: 32,
              index: 2,
              name: "Second Task",
              description: "",
              is_completed: false,
            },
            {
              id: 33,
              index: 3,
              name: "Third Task",
              description: "",
              is_completed: false,
            },
            {
              id: 34,
              index: 4,
              name: "Fourth Task",
              description: "",
              is_completed: false,
            },
            {
              id: 35,
              index: 5,
              name: "Fifth Task",
              description: "",
              is_completed: false,
            },
          ],
        },
      ],
    },
  ],
  stores: [],
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
