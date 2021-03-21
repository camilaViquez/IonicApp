import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import * as userActions from '../actions';
import { UserService } from 'src/app/services/user.service';
import { mergeMap, map, tap } from 'rxjs/operators';
import { merge } from 'rxjs';

@Injectable()
export class UsersEffects {

    constructor(
        //Observable listening actions
        private actions$: Actions,
        private userService: UserService
    ){}


    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType( userActions.loadUsers ),
            mergeMap(
                () => this.userService.getUsers()
                .pipe(
                    map(usr => userActions.loadUsersSuccess({ users: usr }))
                )
            )
        )

    );




}