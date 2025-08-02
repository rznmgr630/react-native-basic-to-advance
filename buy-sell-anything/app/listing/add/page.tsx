import { View, SafeAreaView } from "react-native";
import React from "react";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "@/components/Form";

import * as Yup from "yup";
import Select from "@/components/Form/Select";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label("Title"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
});

const AddListing = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", padding: 10, flex: 1 }}>
      <View>
        <Form
          handleSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
          initialValues={{
            title: "",
            price: 0,
            description: "",
            category: null,
          }}
        >
          <FormField name="title" maxLength={255} placeholder="Title" />
          <FormField
            name="price"
            keyboardType="number-pad"
            maxLength={8}
            placeholder="Price"
          />
          <Select
            name="category"
            options={[
              { label: "Category 1", value: "category1" },
              { label: "Category 2", value: "category2" },
            ]}
            value=""
          />
          <FormField
            name="description"
            multiline
            maxLength={255}
            placeholder="Description"
            numberOfLines={3}
          />

          <SubmitButton title="Add New Post" />
        </Form>
      </View>
    </SafeAreaView>
  );
};

export default AddListing;
