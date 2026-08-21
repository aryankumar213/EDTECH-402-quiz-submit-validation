import "@testing-library/jest-dom";
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver =
  IntersectionObserverMock as unknown as typeof IntersectionObserver;