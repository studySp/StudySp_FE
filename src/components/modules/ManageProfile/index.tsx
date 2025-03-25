// import React, { useState } from 'react';
// import { Card, Avatar, Input, Button, Modal } from 'antd';
// import { SearchOutlined, UserDeleteOutlined, StopOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

// const { confirm } = Modal;

// const ManageFriend = ({ friends, onRemove, onBlock }) => {
//   const [search, setSearch] = useState('');

//   const showConfirm = (friend, action) => {
//     confirm({
//       title: `Are you sure you want to ${action} ${friend.name}?`,
//       icon: <ExclamationCircleOutlined />,
//       onOk() {
//         action === 'remove' ? onRemove(friend.id) : onBlock(friend.id);
//       },
//     });
//   };

//   const filteredFriends = friends.filter(friend =>
//     friend.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md">
//       <Input
//         placeholder="Search friends..."
//         prefix={<SearchOutlined />}
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//         className="mb-4"
//       />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredFriends.map(friend => (
//           <Card
//             key={friend.id}
//             className="flex items-center p-4 hover:shadow-lg transition-shadow"
//           >
//             <Avatar src={friend.avatar} size={50} className="mr-3" />
//             <div className="flex-1">
//               <h3 className="text-lg font-semibold">{friend.name}</h3>
//             </div>
//             <div className="flex gap-2">
//               <Button
//                 type="primary"
//                 danger
//                 icon={<UserDeleteOutlined />}
//                 onClick={() => showConfirm(friend, 'remove')}
//               />
//               <Button
//                 type="default"
//                 icon={<StopOutlined />}
//                 onClick={() => showConfirm(friend, 'block')}
//               />
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageFriend;
