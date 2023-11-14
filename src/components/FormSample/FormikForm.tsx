import { FC } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "./index.module.css";

interface ErrorProps {
  name: string;
}

const errorStyle = {
  color: "red",
};

const FormikError: FC<ErrorProps> = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => <span style={errorStyle}>{msg}</span>}
    </ErrorMessage>
  );
};

const RegisterFormWithFormik: FC = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const initialValues = {
    username: "",
    password: "",
    confirm: "",
    remember: true,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please input your username!"),
    password: Yup.string().required("Please input your password!"),
    confirm: Yup.string()
      .oneOf(
        [Yup.ref("password"), undefined],
        "The two passwords entered do not match！"
      )
      .required("Please input your confirm password!"),
  });
  const onSubmit = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors, values, setFieldValue }) => {
        console.log(values);
        return (
          <Form
            onFinish={handleSubmit}
            layout="horizontal"
            {...layout}
            className={styles["register-form"]}
          >
            <Form.Item label="Username" help={<FormikError name="username" />}>
              <Field as={Input} name="username" />
            </Form.Item>
            <Form.Item label="Password" help={<FormikError name="password" />}>
              <Field as={Input.Password} name="password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              help={<FormikError name="confirm" />}
            >
              <Field as={Input.Password} name="confirm" />
            </Form.Item>
            <Form.Item help={<FormikError name="remember" />}>
              <Checkbox
                name="remember"
                checked={values.remember}
                onChange={(e) => {
                  setFieldValue("remember", e.target.checked);
                }}
              >
                Remember me
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormWithFormik;
