export interface ITodoList {
  id: string;
}

export interface IRecentRoom {
  idRoom: string;
  todoList?: ITodoList;
}

export interface IUser {
  _id: string;
  userName: string;
  email?: string;
  password?: string;
  avatar?: string;
  role?: "user" | "admin";
}

export interface IUserProfile {
  user: IUser;
  dayOfBirth?: string;
  bio?: string;
  nickname?: string;
  gender: "Nam" | "Nữ" | "Khác";
}
