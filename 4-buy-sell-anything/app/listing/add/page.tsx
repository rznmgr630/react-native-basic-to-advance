import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "@/components/Form";
import React from "react";
import { SafeAreaView, View } from "react-native";

import FormMultiImagePicker from "@/components/Form/FormMultiImagePicker";
import Select from "@/components/Form/Select";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label("Title"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
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
            images: [],
          }}
        >
          <FormMultiImagePicker name="images" />
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
