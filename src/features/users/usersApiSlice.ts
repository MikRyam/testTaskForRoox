import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../interfaces/userInterface';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUsers: build.query<IUser[], void>({
      query: () => 'users/',
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: 'Users', id } as const)),
              { type: 'Users', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Users', id: 'LIST' }` is invalidated
            [{ type: 'Users', id: 'LIST' }],
    }),
    getUserById: build.query<IUser, string | number | undefined>({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: 'Users', id }],
    }),
    updateUser: build.mutation<IUser, Partial<IUser>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `users/${id}`,
          method: 'PATCH',
          body,
        };
      },
      // Invalidates all queries that subscribe to this User `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Users', id }],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useUpdateUserMutation } =
  userApi;
