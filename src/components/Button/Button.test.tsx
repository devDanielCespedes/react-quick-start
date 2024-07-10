import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

test("renders Button with text", () => {
  const { asFragment } = render(<Button>Test Button</Button>);
  const buttonElement = screen.getByText(/Test Button/i);
  expect(buttonElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test("Button onClick works", () => {
  const handleClick = jest.fn();
  const { asFragment } = render(
    <Button onClick={handleClick}>Click Me</Button>
  );
  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(asFragment()).toMatchSnapshot();
});
