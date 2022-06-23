import { render, screen, fireEvent } from "@testing-library/react";
import Quiz01 from "./quiz-01";

describe("Quiz 01", () => {
  test("Initial state for checkbox and button", () => {
    render(<Quiz01 />);

    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    expect(checkbox).not.toBeChecked();
    expect(button).toBeEnabled();
  });

  test("Button it's disabled when checkbox is checked", () => {
    render(<Quiz01 />);

    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(button).toBeDisabled();

    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(button).toBeEnabled();
  });
});
