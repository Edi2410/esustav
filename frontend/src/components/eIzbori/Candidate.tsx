import React from "react";
import { CandidateType } from "types";
import { Card, Image, Button } from "antd";
interface Props {
  candidate: CandidateType;
}

export const Candidate = ({ candidate }: Props) => {
  return (
    <>
      <Card
        style={{ width: "90%", height: "100%", margin: "auto" }}
        title={
          (candidate?.role?.name !== null ? candidate?.role?.name : "") +
          " (" +
          candidate?.team.short_name +
          ") " +
          candidate?.user.first_name +
          " " +
          candidate?.user.last_name
        }
      >
        {candidate?.user?.photo && (
          <Image
            style={{ borderRadius: "15%", width: "100%", height: "100%" }}
            src={candidate?.user?.photo}
            preview={false}
          />
        )}
        <div className="candidateDetails">
          {candidate?.cv && (
            <Button
              href={candidate?.cv}
              target="_blank"
              type="primary"
              className="candidateDetailsButton"
            >
              Životopis
            </Button>
          )}
          {candidate?.plan_rada && (
            <Button
              href={candidate?.plan_rada}
              target="_blank"
              type="primary"
              className="candidateDetailsButton"
            >
              Plan Rada
            </Button>
          )}
          {candidate?.aktivnosti && (
            <Button
              href={candidate?.aktivnosti}
              target="_blank"
              type="primary"
              className="candidateDetailsButton"
            >
              Aktivnosti
            </Button>
          )}
          {candidate?.predstavljanje && (
            <>
              <br />
              <Button
                href={candidate?.predstavljanje}
                target="_blank"
                type="primary"
                className="candidateDetailsButton"
              >
                Predstavljanje
              </Button>
            </>
          )}
        </div>
      </Card>
    </>
  );
};
