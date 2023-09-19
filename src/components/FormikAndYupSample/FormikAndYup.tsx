import { FC } from "react";
import { Button, Form, Input } from "antd";
import Error from "./Error";
import { Field, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

interface FormValues {
  userName: string;
  password: string;
}

const initialValues: FormValues = {
  userName: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Username is required")
    .max(30, "Username should be less than 30 characters"),
  password: Yup.string()
    .required("Password is required")
    .max(30, "Proposer should be less than 30 characters"),
});
interface FormikAndYup {
  title?: string;
  loading?: boolean;
  onSubmit?: (values: FormValues) => void;
  onCancel?: () => void;
}

export const FormikAndYup: FC<FormikAndYup> = ({
  title,
  loading,
  onSubmit,
  onCancel,
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "10px" }}>{title}</h1>
      <Formik
        initialValues={{ ...initialValues }}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          onSubmit(values);
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched, handleSubmit, values }) => {
          // error ,some field has error
          // values, current form values
          console.log("errors result:>> ", errors);
          console.log("touched result:>> ", touched);
          console.log("values result:>> ", values);
          return (
            <Form
              onFinish={handleSubmit}
              layout="horizontal"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
            >
              <Form.Item
                label="User name"
                help={<Error name="userName" />}
                required
              >
                <Field as={Input} name="userName" />
              </Form.Item>

              <Form.Item
                label="Password"
                help={<Error name="password" />}
                required
              >
                <Field as={Input.Password} name="password" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 10 }}>
                <Button
                  style={{ marginLeft: "8px" }}
                  onClick={() => onCancel()}
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  style={{ marginLeft: "8px" }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
