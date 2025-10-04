import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import Button from "./Button";
import TextInput from "./TextInput";
import { createReviewValidationSchema } from "../validations/review";
import useCreateReview from "../hooks/useCreateReview";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "column",
    gap: 10,
  },
});

const CreateReviewForm = ({ onSubmit }) => {
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      ownerName: "",
      rating: 0,
      repositoryName: "",
      text: "",
    },
    validationSchema: createReviewValidationSchema,
    onSubmit: (values) => {
      onSubmit({
        ...values,
        rating: Number(values.rating), // Ensure rating is a number
      });
    },
  });

  const fields = [
    {
      name: "ownerName",
      placeholder: "Repository owner name",
      keyboardType: "default",
    },
    {
      name: "repositoryName",
      placeholder: "Repository name",
      keyboardType: "default",
    },
    {
      name: "rating",
      placeholder: "Rating between 0 and 100",
      keyboardType: "numeric",
    },
    {
      name: "text",
      placeholder: "Review",
      keyboardType: "default",
      multiline: true,
      numberOfLines: 4,
    },
  ];

  return (
    <View style={styles.container}>
      {fields.map((field) => (
        <TextInput
          key={field.name}
          value={values[field.name]}
          onChangeText={handleChange(field.name)}
          placeholder={field.placeholder}
          keyboardType={field.keyboardType}
          multiline={field.multiline}
          numberOfLines={field.numberOfLines}
          touched={touched[field.name]}
          error={errors[field.name]}
        />
      ))}

      <Button
        text="Create a review"
        onPress={handleSubmit}
        testID="create-review-button"
      />
    </View>
  );
};

const CreateReview = () => {
  const { createReview } = useCreateReview();
  const onSubmit = (values) => {
    console.log("Submitting review with values:", values);
    createReview({ variables: { review: values } });
  };

  return <CreateReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;
