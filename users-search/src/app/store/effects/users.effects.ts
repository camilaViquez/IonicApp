import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import * as userActions from '../actions/users.actions';
import { UserService } from 'src/app/services/user.service';
import { mergeMap, map, tap, catchError } from 'rxjs/operators';
import { merge, of } from 'rxjs';

@Injectable()
export class UsersEffects {

    constructor(
        //Observable listening actions
        private actions$: Actions,
        private userService: UserService
    ){}


    loadAllUsers$:any = createEffect(
        ():any => this.actions$.pipe(
            ofType( userActions.loadUsers ),
            mergeMap(
                () => this.userService.getUsers()
                .pipe(
                    map(users => userActions.loadUsersSuccess({ usersList: users }))
                    ,catchError((err) =>of( userActions.loadUsersUnsuccess({payload:err })))
                )
            )
        )
    );   
}