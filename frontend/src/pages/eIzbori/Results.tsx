import React from "react";
import { useGetResults } from "hooks";
import {VotesColumns} from "configurations"

import { Table } from "antd";

export const Results = () => {
  const { data: results } = useGetResults();
  return (
    <>
      <Table dataSource={results} columns={VotesColumns} />
    </>
  );
};
