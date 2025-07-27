import { Formik, FormikHelpers } from "formik";
import { ObjectSchema, AnyObject } from "yup";
import React, { ReactNode } from "react";

type Props<T extends AnyObject> = {
  children: ReactNode;
  initialValues: T;
  validationSchema: ObjectSchema<T>;
  handleSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
};

const AppForm = <T extends AnyObject>({
  children,
  initialValues,
  validationSchema,
  handleSubmit,
}: Props<T>) => {
  return (
    <Formik<T>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
