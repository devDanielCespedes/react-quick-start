import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

test("renders Input with label", () => {
  const { asFragment } = render(<Input label="Test Label" />);
  const textFieldElement = screen.getByLabelText(/Test Label/i);
  expect(textFieldElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test("Input onChange works", () => {
  const handleChange = jest.fn();
  const { asFragment } = render(
    <Input label="Test Label" onChange={handleChange} />
  );
  const textFieldElement = screen.getByLabelText(/Test Label/i);
  fireEvent.change(textFieldElement, { target: { value: "new value" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(asFragment()).toMatchSnapshot();
});

test("Input onFocus works", () => {
  const handleFocus = jest.fn();
  const { asFragment } = render(
    <Input label="Test Label" onFocus={handleFocus} />
  );
  const textFieldElement = screen.getByLabelText(/Test Label/i);
  fireEvent.focus(textFieldElement);
  expect(handleFocus).toHaveBeenCalledTimes(1);
  expect(asFragment()).toMatchSnapshot();
});

test("Input onBlur works", () => {
  const handleBlur = jest.fn();
  const { asFragment } = render(
    <Input label="Test Label" onBlur={handleBlur} />
  );
  const textFieldElement = screen.getByLabelText(/Test Label/i);
  fireEvent.blur(textFieldElement);
  expect(handleBlur).toHaveBeenCalledTimes(1);
  expect(asFragment()).toMatchSnapshot();
});

test("Input with error message", () => {
  const { asFragment } = render(
    <Input label="Test Label" error={true} helperText="Error message" />
  );
  const textFieldElement = screen.getByLabelText(/Test Label/i);
  expect(textFieldElement).toBeInTheDocument();
  const helperTextElement = screen.getByText(/Error message/i);
  expect(helperTextElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test("Input disabled", () => {
  const { asFragment } = render(<Input label="Test Label" disabled={true} />);
  const textFieldElement = screen.getByLabelText(/Test Label/i);
  expect(textFieldElement).toBeDisabled();
  expect(asFragment()).toMatchSnapshot();
});

test("Input fullWidth", () => {
  const { asFragment } = render(<Input label="Test Label" fullWidth={true} />);
  const textFieldElement = screen.getByLabelText(/Test Label/i);
  expect(textFieldElement).toHaveStyle("width: 100%");
  expect(asFragment()).toMatchSnapshot();
});

test("Input small size", () => {
  const { asFragment } = render(<Input label="Test Label" size="small" />);
  const textFieldElement = screen.getByLabelText(/Test Label/i);
  expect(textFieldElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test("Input medium size", () => {
  const { asFragment } = render(<Input label="Test Label" size="medium" />);
  const textFieldElement = screen.getByLabelText(/Test Label/i);
  expect(textFieldElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
