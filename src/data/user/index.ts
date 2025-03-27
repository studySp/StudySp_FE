export interface ITodoList {
  id: string;
}

export interface IRecentRoom {
  idRoom: string;
  todoList?: ITodoList;
}

export interface IUser {
  userName: string;
  email?: string;
  password?: string;
  avatar: string;
  role?: "user" | "admin";
}

export interface IUserProfile {
  user: IUser;
  dayOfBirth?: string;
  bio?: string;
  nickname?: string;
  gender: "Nam" | "Nữ" | "Khác";
  photoURL?: string;
}

export const userData: IUserProfile = {
  user: {
    userName: "Thanh Thuy",
    email: "",
    password: "12345678",
    avatar: "abc",
    role: "user",
  },
  dayOfBirth: "27/04/2003",
  bio: "Hi 👋, Thanh Thủy nè. TT đang học kỹ thuật phần mềm trường đại học FPT",
  nickname: "Gao neee",
  gender: "Nữ",
};
