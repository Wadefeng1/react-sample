import { FC } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Card } from "antd";

export const Log: FC = () => {
  console.log("useLocation result:>> ", useLocation);
  const { logId } = useParams();
  return (
    <div>
      <Card title="this is log page">
        <h3>该id来自url{logId}</h3>
      </Card>
    </div>
  );
};
