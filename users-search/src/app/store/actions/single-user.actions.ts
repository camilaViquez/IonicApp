import { createAction, props } from '@ngrx/store'
import { User } from 'src/app/model/user.model';

export const loadSingleUserByName = createAction(
    '[SingleUser] loadSingleUserByName', 
    props<{ userName: string }>()
    );

export const loadSingleUserSuccess = createAction(
    '[SingleUser] loadSingleUserSuccess', 
    props<{ singleUser: User }>()
    );
export const loadSingleUserUnsuccess = createAction(
    '[SingleUser] loadSingleUserUnsuccess',
     props<{ payload: any }>());



        