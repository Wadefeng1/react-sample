import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { Menu, Dropdown, Card, Row, Col } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import {
  changeLanguageActionCreator,
  LanguageActionTypes,
} from "@/redux/language/languageActions";
import { useSelector } from "@/redux/hooks";

export const I18: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<Dispatch<LanguageActionTypes>>();
  const { language, languageList } = useSelector((state) => state.language);
  const toggleLanguage = (e) => {
    dispatch(changeLanguageActionCreator(e.key));
  };
  return (
    <div>
      <Card
        title={
          <Row>
            <Col span={6}>this is react-i18next Sample</Col>
            <Col span={6}>
              <Dropdown.Button
                style={{ marginLeft: 15, display: "inline" }}
                overlay={
                  <Menu onClick={toggleLanguage}>
                    {languageList.map((l) => {
                      return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                    })}
                  </Menu>
                }
                icon={<GlobalOutlined />}
              >
                {languageList.find(({ code }) => code === language)?.name}
              </Dropdown.Button>
            </Col>
          </Row>
        }
      >
        {t("home.testContent")}
      </Card>
    </div>
  );
};
