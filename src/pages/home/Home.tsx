import { FC } from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;
import { I18, Navigate, ReactQuery, FormikAndYup } from "@/components";

export const Home: FC = () => {
  return (
    <div>
      this is home page
      <Tabs defaultActiveKey="navigate">
        <TabPane tab="react-router sample" key="navigate">
          <Navigate />
        </TabPane>
        <TabPane tab="i18n sample" key="i18n">
          <I18 />
        </TabPane>
        <TabPane tab="react-query sample" key="react-query">
          <ReactQuery />
        </TabPane>
        <TabPane tab="Formik & Yup & antd form sample" key="formikAndYup">
          <FormikAndYup />
        </TabPane>
      </Tabs>
    </div>
  );
};
