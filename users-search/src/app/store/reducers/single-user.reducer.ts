import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/model/user.model';
import { loadUsersUnsuccess, loadSingleUserSuccess, loadSingleUserByName } from '../actions';

export interface SingleUsersState {
    user: User,
    userName: string
    loaded: boolean,
    loading: boolean,
    error: any

}

export const singleUsersInitialState: SingleUsersState = {
    user: null,
    userName: null,
    loaded: false,
    loading: false,
    error: null

}

const _singleUserReducer = createReducer(singleUsersInitialState,
    on(loadSingleUserByName, (state, { userName }) => ({...state, loading: true, userName: userName })),

     
     on(loadSingleUserSuccess, (state, { singleUser }) => ({...state, loading: false, loaded: true, user:singleUser })),
     
     
     on(loadUsersUnsuccess, (state, { payload }) => ({
         ...state,
         loading: false,
         loaded: false,
         error: payload
     }))
);



export function singleUserReducer(state, action) {
    return _singleUserReducer(state, action);
}
