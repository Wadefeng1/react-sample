import { FC } from "react";
import { Card, Button, Row, Col } from "antd";
import { useNavigate, Link } from "react-router-dom";

export const Navigate: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card title={"ReactRouterV6 navigate sample"}>
        <Row>
          <Col span={4}>
            <Button type="primary" onClick={() => navigate("/about")}>
              Navigate to about page
            </Button>
          </Col>
          <Col span={4}>
            <Link to={"/about"}> Navigate to about page</Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
