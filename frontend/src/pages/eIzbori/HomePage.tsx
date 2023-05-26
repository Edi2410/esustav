import React from "react";
import { useGetCandidate, useUserContext } from "hooks";
import { Candidate } from "components";
import { CandidateType } from "types";
import { List } from "antd";

export const HomePage = () => {
  const { user } = useUserContext();
  const { data } = useGetCandidate(user?.team.id);
  console.log(data);

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      style={{height: "100%", width:"100%", margin:0}}
      dataSource={data}
      renderItem={(data: CandidateType, index) => {
        return (
          <List.Item key={index}>
            <Candidate candidate={data} />
          </List.Item>
        );
      }}
    ></List>
  );
};
