import { Team, VirtualTeam, Role } from "types";

export type UserData = {
  user: User;
  team: Team;
  virtual_team: VirtualTeam;
  role: Role;
};

export type User = {
  id: number;
  password: string;
  last_login: string;
  is_superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  data_joined: string;
  deleted: boolean;
  gender: string;
  user_permissions: string[];
  groups: [];
  photo: string;
};

