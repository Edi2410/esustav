import React, { useState } from "react";
import { useGetCandidate, useUserContext, useGetVotes } from "hooks";
import { Candidate, VotesForm } from "components";
import { CandidateType } from "types";
import { List, Button, Image, Modal } from "antd";
import eIZBORIlogo from "../../assets/images/eIZBORIlogo.png";
import "../../styles/eizbori.css";

export const HomePage = () => {
  const { user } = useUserContext();
  const { data: candidateData } = useGetCandidate(user?.team.id);
  const { data: VotesData } = useGetVotes();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="topLevel">
        <Image src={eIZBORIlogo} preview={false} height={40} />
        <Button
          style={{ marginLeft: "10px" }}
          rootClassName="btnIcon"
          className="button"
          type="primary"
          size="large"
          disabled={VotesData?.length > 0}
          onClick={() => setIsModalOpen(true)}
        >
          Glasaj
        </Button>
      </div>
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
        style={{ height: "100%", width: "100%", margin: 0 }}
        dataSource={candidateData}
        renderItem={(candidateData: CandidateType, index) => {
          return (
            <List.Item key={index}>
              <Candidate candidate={candidateData} />
            </List.Item>
          );
        }}
      />
      <Modal
        title="Glasasaj za kandidate"
        style={{ top: "40px" }}
        open={isModalOpen}
        footer={null}
        cancelText="Poništi"
        onOk={() => setIsModalOpen(false)}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        destroyOnClose={true}
      >
        <VotesForm
          candidateData={candidateData}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
};
