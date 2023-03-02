import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../interfaces/userInterface';

export const userApi = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUsers: build.query<IUser[], void>({
      query: () => 'users/',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Users', id } as const)),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
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
      invalidatesTags: (result, error, { id }) => [{ type: 'Users', id }],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useUpdateUserMutation } =
  userApi;
