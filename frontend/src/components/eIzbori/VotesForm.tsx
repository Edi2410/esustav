import React, { useState, useEffect } from "react";
import { CandidateType } from "types";
import { useGetNumberOfVotes, useUserContext, useAddNewVotes } from "hooks";
import { Form, Checkbox, Button } from "antd";

interface Props {
  candidateData: CandidateType[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VotesForm = ({ candidateData, setIsModalOpen }: Props) => {
  const { user } = useUserContext();
  const { data: NumberOfVotesAvailable } = useGetNumberOfVotes(user?.team.id);
  const saveVotes = useAddNewVotes();
  const [brojGlasovaZaVoditelje, setBrojGlasovaZaVoditelje] = useState(0);
  const [brojGlasovaZaPREDS, setBrojGlasovaZaPREDS] = useState(0);

  useEffect(() => {
    let countGlasovaZaVoditelje = 0;
    let countGlasovaZaPREDS = 0;

    candidateData.forEach((candidate: CandidateType) => {
      if (
        (candidate.role.name === "Voditelj/ica" ||
          candidate.role.name === "Koordinator/ica") &&
        countGlasovaZaVoditelje < NumberOfVotesAvailable?.number_of_votes
      ) {
        countGlasovaZaVoditelje++;
      }
      if (
        (candidate.role.name === "Predsjednik/ca" ||
          candidate.role.name === "Potpredsjednik/ca" ||
          candidate.role.name === "Tajnik/ca" ||
          candidate.team.short_name === "NO" ||
          candidate.team.short_name === "Pravilnik" ||
          candidate.team.short_name === "Statut") &&
        countGlasovaZaPREDS < 5
      ) {
        countGlasovaZaPREDS++;
      }
    });

    setBrojGlasovaZaVoditelje(countGlasovaZaVoditelje);
    setBrojGlasovaZaPREDS(countGlasovaZaPREDS);
  }, [candidateData, NumberOfVotesAvailable]);

  const onFinish = (values: any) => {
    candidateData.forEach((candidate: CandidateType) => {
      saveVotes.mutate({
        kandidatura: candidate.id,
        user: user?.user?.id,
        is_voted: values[candidate.id] === true ? true : false,
      });
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <Form name="nest-messages" onFinish={onFinish} style={{ maxWidth: 800 }}>
        <i style={{ color: "#77777785" }}>
          Broj glasova za voditelje: {brojGlasovaZaVoditelje}
        </i>
        <br />
        <i style={{ color: "#77777785" }}>
          Broj glasova za predsjedništvo: {brojGlasovaZaPREDS}
        </i>
        <br />
        <br />
        {candidateData.map((candidate: CandidateType) => (
          <React.Fragment key={candidate.id}>
            <b>
              {(candidate?.role?.name !== null ? candidate?.role?.name : "") +
                " " +
                candidate.team.short_name}
            </b>
            <Form.Item
              label={candidate.user.first_name + " " + candidate.user.last_name}
              name={String(candidate.id)}
              valuePropName="checked"
            >
              <Checkbox
                onChange={(e) => {
                  return candidate.role.name === "Voditelj/ica" ||
                    candidate.role.name === "Koordinator/ica"
                    ? setBrojGlasovaZaVoditelje(
                        brojGlasovaZaVoditelje + (e.target.checked ? -1 : 1)
                      )
                    : setBrojGlasovaZaPREDS(
                        brojGlasovaZaPREDS + (e.target.checked ? -1 : 1)
                      );
                }}
              >
                Odaberi
              </Checkbox>
            </Form.Item>
          </React.Fragment>
        ))}
        <Form.Item style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              brojGlasovaZaVoditelje < 0 || brojGlasovaZaPREDS < 0
                ? true
                : false
            }
          >
            Predaj glasove
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
