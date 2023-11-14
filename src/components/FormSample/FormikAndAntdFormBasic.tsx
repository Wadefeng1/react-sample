import { FC } from "react";
import { useFormik } from "formik";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "components/RegisterFormWithFormik/index.module.css";
import * as Yup from "yup";

const RegisterFormWithFormik: FC = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirm: "",
      remember: true,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("请输入用户名"),
      password: Yup.string().required("请输入密码"),
      confirm: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "密码确认不一致！")
        .required("请确认密码"),
    }),
    onSubmit: (values) => {
      console.log("Success:", values);
    },
  });
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={formik.handleSubmit}
      onFinishFailed={formik.handleBlur}
      className={styles["register-form"]}
    >
      <Form.Item
        label="Username"
        name="username"
        help={
          formik.errors.username && formik.touched.username
            ? formik.errors.username
            : null
        }
        validateStatus={
          formik.errors.username && formik.touched.username
            ? "error"
            : undefined
        }
      >
        <Input
          {...formik.getFieldProps("username")}
          onBlur={formik.handleBlur("username")}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        help={
          formik.errors.password && formik.touched.password
            ? formik.errors.password
            : null
        }
        validateStatus={
          formik.errors.password && formik.touched.password
            ? "error"
            : undefined
        }
      >
        <Input.Password
          {...formik.getFieldProps("password")}
          onBlur={formik.handleBlur("password")}
        />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirm"
        hasFeedback
        help={
          formik.errors.confirm && formik.touched.confirm
            ? formik.errors.confirm
            : null
        }
        validateStatus={
          formik.errors.confirm && formik.touched.confirm ? "error" : undefined
        }
      >
        <Input.Password
          {...formik.getFieldProps("confirm")}
          onBlur={formik.handleBlur("confirm")}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox
          {...formik.getFieldProps("remember")}
          onClick={formik.handleBlur("remember")}
        >
          Remember me
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterFormWithFormik;
