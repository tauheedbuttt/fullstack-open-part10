import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import { SignInForm } from "../components/SignIn";

describe("Sign In Form", () => {
  it("calls function provided by onSubmit prop after pressing the submit button", async () => {
    const onSubmit = jest.fn();
    render(<SignInForm onSubmit={onSubmit} />);

    fireEvent.changeText(screen.getByPlaceholderText("Username"), "kalle");
    fireEvent.changeText(screen.getByPlaceholderText("Password"), "password");
    fireEvent.press(screen.getByTestId("sign-in-button"));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);

      // onSubmit.mock.calls[0][0] contains the first argument of the first call
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: "kalle",
        password: "password",
      });
    });
  });
});
