import * as yup from "yup";

export const createReviewValidationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(2, "Owner name must be at least 2 characters long")
    .max(100, "Owner name must be at most 100 characters long")
    .required("Owner name is required"),
  rating: yup
    .number()
    .min(0, "Rating must be at least 0")
    .max(100, "Rating must be at most 100")
    .required("Rating is required"),
  repositoryName: yup
    .string()
    .min(2, "Repository name must be at least 2 characters long")
    .max(100, "Repository name must be at most 100 characters long")
    .required("Repository name is required"),
  text: yup
    .string()
    .min(5, "Review text must be at least 5 characters long")
    .max(500, "Review text must be at most 500 characters long")
    .optional(),
});
