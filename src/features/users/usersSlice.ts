import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/userInterface';
import { userApi } from './usersApiSlice';

export interface UsersState {
  users: IUser[];
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    sortUsersByName(state) {
      state.users = state.users.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sortUsersByCity(state) {
      state.users = state.users.sort((a, b) =>
        a.address.city > b.address.city ? 1 : -1,
      );
    },
    sortUsersByCompany(state) {
      state.users = state.users.sort((a, b) =>
        a.company.name > b.company.name ? 1 : -1,
      );
    },
  },
  extraReducers: (build) => {
    build.addMatcher(
      userApi.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {
        state.users = payload;
      },
    );
  },
});

export const {
  addUsers,
  sortUsersByName,
  sortUsersByCity,
  sortUsersByCompany,
} = usersSlice.actions;

export default usersSlice.reducer;
