import { useFormikContext } from "formik";
import React from "react";
import { MultiImagePicker } from "../ImagePicker";
import ErrorMessage from "./ErrorMessage";

// Define the shape of your form values
interface FormValues {
  [key: string]: string[]; // Assuming 'images' is an array of strings (image URIs)
}

// Update the Prop type to be more specific if needed
type Prop = {
  name: string;
};

const FormMultiImagePicker = ({ name }: Prop) => {
  // Use FormValues as the generic type for useFormikContext
  const { setFieldValue, errors, touched, values } =
    useFormikContext<FormValues>();

  return (
    <>
      <MultiImagePicker
        imageUris={values[name]} // Now TypeScript knows values[name] is a string[]
        setImages={(values: string[]) => setFieldValue(name, values)} // Use 'name' instead of hardcoding "images"
      />
      <ErrorMessage
        error={errors[name as keyof FormValues] as string} // Ensure errors is typed correctly
        touched={touched[name as keyof FormValues]} // Ensure touched is typed correctly
      />
    </>
  );
};

export default FormMultiImagePicker;
