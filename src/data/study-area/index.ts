export interface ICard {
  id: string;
  imgSrc: string;
  title: string;
  authorName: string;
  online: number;
  isPrivate: boolean;
  tag: string;
  subTitle: string;
  participantsNo: number;
  type: "JOIN" | "CLOSE";
  timer?: string;
}

export interface ISubject {
  subject: string;
}

export const cardsData: ICard[] = [
  {
    id: "card-101",
    imgSrc:
      "https://wallpapers.com/images/hd/chill-anime-cloudy-sky-eif0wrbsj7tavmd0.jpg",
    title: "Chiến lược đầu tư chứng khoán",
    authorName: "Trần Văn Nam",
    online: 22,
    isPrivate: false,
    tag: "Tài chính",
    subTitle: "Học cách đầu tư thông minh",
    participantsNo: 50,
    type: "JOIN",
  },
  {
    id: "card-102",
    imgSrc:
      "https://w0.peakpx.com/wallpaper/393/130/HD-wallpaper-chill-top-chill-background-chill-art.jpg",
    title: "Lập trình Web với ReactJS",
    authorName: "Nguyễn Hải Đăng",
    online: 30,
    isPrivate: false,
    tag: "Công nghệ",
    subTitle: "Xây dựng ứng dụng web chuyên nghiệp",
    participantsNo: 100,
    type: "JOIN",
  },
  {
    id: "card-103",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/024/031/869/non_2x/seascape-sunset-lo-fi-chill-wallpaper-sunrise-ocean-waves-ocean-coast-sun-and-sand-2d-cartoon-landscape-illustration-vaporwave-background-80s-retro-album-art-synthwave-aesthetics-vector.jpg",
    title: "Khai phá dữ liệu với SQL",
    authorName: "Phạm Thùy Linh",
    online: 12,
    isPrivate: true,
    tag: "Khoa học dữ liệu",
    subTitle: "Truy vấn dữ liệu hiệu quả",
    participantsNo: 40,
    type: "CLOSE",
  },
  {
    id: "card-104",
    imgSrc: "https://images7.alphacoders.com/135/1354305.jpeg",
    title: "Quản lý thương hiệu",
    authorName: "Hoàng Thanh Sơn",
    online: 18,
    isPrivate: false,
    tag: "Marketing",
    subTitle: "Xây dựng thương hiệu bền vững",
    participantsNo: 35,
    type: "JOIN",
  },
  {
    id: "card-105",
    imgSrc: "https://i.redd.it/ngyrp7biz1161.jpg",
    title: "Hệ thống phân tán",
    authorName: "Lê Minh Tuấn",
    online: 17,
    isPrivate: true,
    tag: "Công nghệ",
    subTitle: "Thiết kế hệ thống hiệu quả",
    participantsNo: 45,
    type: "CLOSE",
  },
  {
    id: "card-106",
    imgSrc: "https://images.hdqwalls.com/wallpapers/lo-fi-cafe-4k-z8.jpg",
    title: "Quản lý rủi ro trong doanh nghiệp",
    authorName: "Đặng Thị Hương",
    online: 25,
    isPrivate: false,
    tag: "Kinh doanh",
    subTitle: "Giảm thiểu rủi ro và tối đa hóa lợi nhuận",
    participantsNo: 60,
    type: "JOIN",
  },
];

export const subjects: ISubject[] = [
  { subject: "Tất cả" },
  { subject: "Chứng khoán" },
  { subject: "Đầu tư tài chính" },
  { subject: "Quản lý doanh nghiệp" },
  { subject: "Kinh doanh quốc tế" },
  { subject: "Marketing số" },
  { subject: "Tài chính cá nhân" },
  { subject: "Kế toán quản trị" },
  { subject: "Phân tích dữ liệu" },
  { subject: "Kinh tế vĩ mô" },
  { subject: "Lập trình Python" },
  { subject: "Lập trình JavaScript" },
  { subject: "Phát triển phần mềm" },
  { subject: "Học máy" },
  { subject: "Thiết kế hệ thống" },
  { subject: "An toàn thông tin" },
  { subject: "Blockchain" },
  { subject: "Trí tuệ nhân tạo" },
  { subject: "IoT và hệ thống nhúng" },
  { subject: "Kinh tế phát triển" },
  { subject: "Phân tích chiến lược" },
];
