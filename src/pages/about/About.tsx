import { FC } from "react";
import { Card, Button } from "antd";
import { useNavigate, Routes, Route } from "react-router-dom";
import { Log } from "@/pages";

export const About: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card title="this is about page">
        <Button onClick={() => navigate("666/log")}>
          Navigate to log page
        </Button>
        <Routes>
          <Route path=":logId/log" element={<Log />} />
        </Routes>
      </Card>
    </div>
  );
};
