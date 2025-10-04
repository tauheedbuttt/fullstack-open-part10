import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must be at least 5 characters long")
    .max(30, "Username must be at most 30 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .max(50, "Password must be at most 50 characters long")
    .required("Password is required"),
});
