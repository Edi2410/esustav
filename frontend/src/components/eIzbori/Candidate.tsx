import React from "react";
import { CandidateType } from "types";
import { Card, Image } from "antd";
interface Props {
  candidate: CandidateType;
}

export const Candidate = ({ candidate }: Props) => {
  console.log(candidate);
  return (
    <>
      <Card
        style={{ width: "80%", height: "100%", margin: "auto"}}
        title={
          candidate?.role?.name +
          " " +
          candidate?.user.first_name +
          " " +
          candidate?.user.last_name
        }
      >
        <Image
          style={{ borderRadius: "15%", width: "100%", height: "100%" }}
          src={candidate?.user?.photo}
          preview={false}
        />
      </Card>
    </>
  );
};
