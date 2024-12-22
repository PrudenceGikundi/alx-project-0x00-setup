// import Header from '@/components/layout/Header';
// import UserCard from '@/components/common/UserCard';
// import { UserProps } from '@/interfaces';

// const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
//   return (
//     <div className="flex flex-col h-screen">
//       <Header />
//       <main className="flex-grow flex flex-col items-center justify-center bg-gray-100">
//         <h1 className="text-3xl font-bold mb-6">Users Page</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {users.map(user => (
//             <UserCard key={user.id} {...user} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();

//   return {
//     props: {
//       users
//     }
//   };
// }

// export default Users;

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import { UserProps, UserData } from '@/interfaces';

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState(users);

  const handleAddUser = (newUser: UserData) => {
    setUserList([...userList, { ...newUser, id: userList.length + 1 }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Users Page</h1>
        <button onClick={() => setModalOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add User</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userList.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users
    }
  };
}

export default Users;
