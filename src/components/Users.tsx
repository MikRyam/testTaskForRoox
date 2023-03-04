import React from 'react';
import { useGetUsersQuery } from '../features/users/usersApiSlice';
import UserCard from './UserCard';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';

const Users = () => {
  const { isLoading, isError } = useGetUsersQuery();

  const users = useAppSelector((state: RootState) => state.users.users);

  if (isLoading)
    return (
      <div className="statusMessage">
        <h3>Loading...</h3>
      </div>
    );
  if (isError)
    return (
      <div className="statusMessage">
        <h3>Oh no, there was an error</h3>
      </div>
    );

  return (
    <>
      {users?.map((user) => (
        <UserCard
          key={user.id}
          city={user.address.city}
          company={user.company.name}
          name={user.name}
          id={user.id}
        />
      ))}
    </>
  );
};

export default Users;
