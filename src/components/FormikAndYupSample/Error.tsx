import React from "react";
import { ErrorMessage } from "formik";

interface ErrorProps {
  name: string;
}

const errorStyle = {
  color: "red",
};

const Error: React.FC<ErrorProps> = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => <span style={errorStyle}>{msg}</span>}
    </ErrorMessage>
  );
};

export default Error;
