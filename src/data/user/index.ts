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
  role: "user" | "admin";
}

export interface IUserProfile {
  userName: string;
  dayOfBirth?: string;
  email?: string;
  bio?: string;
  nickname?: string;
  gender: "Nam" | "Nữ" | "Khác";
  photoURL?: string;
}

export const userData: IUserProfile = {
  userName: "Thanh Thủy",
  dayOfBirth: "27/04/2003",
  bio: "Hi 👋, Thanh Thủy nè. TT đang học kỹ thuật phần mềm trường đại học FPT",
  nickname: "Gao neee",
  gender: "Nữ",
  email: "thuynttde170035@fpt.edu.vn",
};
