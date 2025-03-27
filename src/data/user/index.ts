export interface ITodoList {
  id: string;
}

export interface IRecentRoom {
  idRoom: string;
  todoList?: ITodoList;
}

export interface IUser {
  id: string;
  dayOfBirth: string;
  bio: string;
  nickname?: string;
}

export const user = [
  {
    avatar: "/#home",
    userName: "Sản phẩm",
    email: "home",
  },
];
