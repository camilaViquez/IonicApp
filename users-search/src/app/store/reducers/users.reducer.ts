import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { loadUsers, loadUsersSuccess, loadUsersUnsuccess } from '../actions';

export interface UsersState {
    users: User[],
    loaded: boolean,
    loading: boolean,
    error: any

}

export const usersInitialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null

}

const _usersReducer = createReducer(usersInitialState,
     on(loadUsers, (state, {since}) => ({...state, loading: true, since: since})),
          
     on(loadUsersSuccess, (state, { usersList }) => ({
         ...state,
         loading: false,
         loaded: true,
         users: state.users.concat(...usersList)
     })),
     on(loadUsersUnsuccess, (state, { payload }) => ({
         ...state,
         loading: false,
         loaded: false,
         error: payload
     }))
);



export function usersReducer(state, action) {
    return _usersReducer(state, action);
}
