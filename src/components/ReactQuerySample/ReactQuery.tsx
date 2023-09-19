import { FC, useState } from "react";
import { useQuery } from "react-query";
import { Card, Spin } from "antd";
import { nanoid } from "nanoid";

interface UserDataProps {
  name: string;
}
export const ReactQuery: FC = () => {
  const [polling, setPolling] = useState(false);
  const aboutQueryKey = ["about"];
  const { data, isLoading, isError, error } = useQuery<UserDataProps[], Error>(
    aboutQueryKey,
    async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    {
      refetchInterval: polling ? 5000 : false,
      refetchOnWindowFocus: false,
      onSuccess: (successData) => {
        setPolling(successData && successData.length > 0);
        console.log("successData result:>> ", successData);
      },
      onError: (error) => {
        console.log("error result:>> ", error);
      },
      cacheTime: 0,
      enabled: true,
    }
  );
  let content = null;
  if (isLoading) {
    content = (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (isError) {
    content = <div>Error: {(error as unknown as Error)?.message}</div>;
  }
  content = (
    <ol>
      {data?.map(({ name }) => (
        <li key={nanoid()}>{name}</li>
      ))}
    </ol>
  );
  return (
    <div>
      <Card title={"this is react-query sample"}>{content}</Card>
    </div>
  );
};
