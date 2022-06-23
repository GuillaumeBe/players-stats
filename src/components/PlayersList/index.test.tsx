import { render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider } from "styled-components";

import PlayersList from "./index";
import { PLAYERS } from "../../graphql/queries";
import theme from "../../theme";

const successMocks = [
  {
    request: {
      query: PLAYERS,
    },
    result: {
      data: {
        players: [
          {
            id: "player-1",
            firstname: "Stan",
            lastname: "Wawrinka",
            sex: "MAN",
            picture: {
              url: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
            },
            country: {
              code: "SUI",
              picture: {
                url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
              },
            },
            stats: {
              age: 33,
              rank: 21,
              points: 1784,
              height: 183,
              weight: 81000,
            },
          },
        ],
      },
    },
  },
];

const errorMocks = [
  {
    request: {
      query: PLAYERS,
    },
    error: new Error("An error occurred"),
  },
];

test("renders players list", async () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <MockedProvider mocks={successMocks} addTypename={false}>
        <PlayersList />
      </MockedProvider>
    </ThemeProvider>
  );

  await waitFor(() => new Promise((res) => setTimeout(res, 10)));

  expect(container).toMatchSnapshot();
});

test("renders error", async () => {
  const { container } = render(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <PlayersList />
    </MockedProvider>
  );

  await waitFor(() => new Promise((res) => setTimeout(res, 10)));

  expect(container).toMatchSnapshot();
});

test("renders loading", () => {
  const { container } = render(
    <MockedProvider mocks={successMocks} addTypename={false}>
      <PlayersList />
    </MockedProvider>
  );

  expect(container).toMatchSnapshot();
});
