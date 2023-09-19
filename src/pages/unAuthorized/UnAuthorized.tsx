import { FC } from "react";
import { Result } from "antd";

export const UnAuthorized: FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, your visit page is not exist."
    />
  );
};
