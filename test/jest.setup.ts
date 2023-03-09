// jest.setup.ts
// import "@testing-library/jest-dom";
// import "@testing-library/jest-dom/extend-expect";
import "isomorphic-unfetch";
import { cleanAll, restore } from "nock";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

// Nock
afterAll(() => {
  cleanAll();
  restore();
});

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

window.scroll = jest.fn();
window.alert = jest.fn();

const observe = jest.fn();
const disconnect = jest.fn();
const unobserve = jest.fn();

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe,
    unobserve,
    disconnect,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});
