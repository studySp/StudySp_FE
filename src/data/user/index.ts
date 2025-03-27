export interface ITodoList {
  id: string;
}

export interface IRecentRoom {
  idRoom: string;
  todoList?: ITodoList;
}

export interface IUser {
  userName: string;
  dayOfBirth?: string;
  email?: string;
  bio?: string;
  nickname?: string;
  gender: "Nam" | "Nữ" | "Khác";
  photoURL?: string;
}

export const userData: IUser = {
  userName: "Thanh Thủy",
  dayOfBirth: "27/04/2003",
  bio: "Hi 👋, Thanh Thủy nè. TT đang học kỹ thuật phần mềm trường đại học FPT",
  nickname: "Gao neee",
  gender: "Nam",
  email: "thuynttde170035@fpt.edu.vn",
};
