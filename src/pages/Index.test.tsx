import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { UserProvider } from "@/contexts/UserContext";
import Index from "./Index";

const renderIndex = () => {
  render(
    <HelmetProvider>
      <UserProvider>
        <MemoryRouter>
          <Index />
        </MemoryRouter>
      </UserProvider>
    </HelmetProvider>
  );
};

describe("Index page", () => {
  it("renders the main homepage heading", () => {
    renderIndex();

    expect(
      screen.getByRole("heading", {
        name: /AI Career Navigator/i,
      })
    ).toBeInTheDocument();
  });

  it("has a Get Started link", () => {
    renderIndex();

    expect(
      screen.getAllByRole("link", {
        name: /get started/i,
      }).length
    ).toBeGreaterThan(0);
  });

  it("has an Upload Resume link or button", () => {
    renderIndex();

    expect(
      screen.getByText(/upload resume/i)
    ).toBeInTheDocument();
  });
});