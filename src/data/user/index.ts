export interface ITodoList {
  id: string;
}

export interface IRecentRoom {
  idRoom: string;
  todoList?: ITodoList;
}

export interface IUser {
  id: string;
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

export const userData: IUserProfile = {
  user: {
    id: "1",
    userName: "Thanh Thuy",
    email: "",
    password: "12345678",
    role: "user",
  },
  dayOfBirth: "27/04/2003",
  bio: "Hi 👋, Thanh Thủy nè. TT đang học kỹ thuật phần mềm trường đại học FPT",
  nickname: "Gao neee",
  gender: "Nữ",
};
