import type { ColumnsType } from "antd/es/table";
import type { VotesResultsType } from "types";
export const VotesColumns: ColumnsType<VotesResultsType> = [
  {
    title: "Kandidat",
    dataIndex: "kandidatura",
    key: "kandidatura",
  },
  {
    title: "Tim",
    dataIndex: "team",
    key: "team",
  },
  {
    title: "Pozicija",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Za",
    dataIndex: "votes_yes",
    key: "votes_yes",
  },
  {
    title: "Protiv",
    dataIndex: "votes_no",
    key: "votes_no",
  },
];
