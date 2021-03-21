import { createAction, props } from '@ngrx/store'
import { User } from 'src/app/model/user.model';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction('[Users] Load Users Success', props<{ users: User[] }>());

export const loadUsersUnsuccess = createAction('[Users] Load Users Unsuccess', props<{ payload: any }>());


        