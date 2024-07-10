import { render, act, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../Mocks/mockResData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Restaurant List for Pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //testing total cards after rendering
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  //
  //testing search input function by giving input of 'Pizza'

  //finding search button using role
  const searchButton = screen.getByRole("button", { name: "Search" });

  //finding input box by test ID (data-testid="searchInput")
  const searchInput = screen.getByTestId("searchInput");

  //giving input values in searchInput as "Pizza"
  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  //after input given searchButton clicked
  fireEvent.click(searchButton);

  //getting cards by testid for checking expected no of cards = received no of cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");

  //Assertion expected cards = received cards
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should check Top Rated Restaurants Button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedButton);

  const cardsAfterRated = screen.getAllByTestId("resCard");

  expect(cardsAfterRated.length).toBe(6);
});
