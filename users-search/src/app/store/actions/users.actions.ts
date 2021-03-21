import { createAction, props } from '@ngrx/store'
import { User } from 'src/app/model/user.model';

export const loadUsers = createAction(
    '[Users] loadUsers');
export const loadUsersSuccess = createAction(
    '[Users] loadUsersSuccess',
     props<{ usersList: User[] }>());
export const loadUsersUnsuccess = createAction(
    '[Users] Load Users Unsuccess',
     props<{ payload: any }>());


        