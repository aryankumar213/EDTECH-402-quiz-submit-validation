import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Quiz from "./Quiz";

describe("Quiz", () => {
  it("renders the first question", () => {
    render(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        "What is the primary purpose of an Applicant Tracking System (ATS)?"
      )
    ).toBeInTheDocument();
  });

  it("shows an error when submitting without selecting an answer", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );

    await user.click(
      screen.getByRole("button", { name: /submit answer/i })
    );

    expect(
      screen.getByText("Please select an answer before continuing.")
    ).toBeInTheDocument();
  });

  it("allows the user to select an answer and continue", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );

    await user.click(
      screen.getByRole("radio", {
        name: "To screen and organize job applications",
      })
    );

    await user.click(
      screen.getByRole("button", { name: /submit answer/i })
    );

    expect(
      screen.getByText("Why are relevant keywords important in a resume?")
    ).toBeInTheDocument();
  });

  it("has an accessible Back to Home link", () => {
    render(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", { name: /back to home/i })
    ).toBeInTheDocument();
  });
});