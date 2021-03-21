import { ActionReducerMap } from '@ngrx/store';
import * as reducers from 'src/app/store/reducers';

export interface AppState {
    users: reducers.UsersState;
    singleUser: reducers.SingleUsersState;

}


export const appReducers: ActionReducerMap<AppState> = {
    users: reducers.usersReducer,
    singleUser: reducers.singleUserReducer
}