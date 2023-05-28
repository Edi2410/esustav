import { Team, User, Role } from "types";

export type CandidateType = {
  id: number;
  cv: string;
  plan_rada: string;
  role: Role;
  team: Team;
  user: User;
  aktivnosti:string;
};

export type VotesType = {
  user?: number;
  kandidatura: number;
  is_voted: boolean;
};

export type VotesResultsType = {
  id: number;
  kandidatura: string;
  team: string;
  role: string;
  votes_yes: number;
  votes_no: number;
};
