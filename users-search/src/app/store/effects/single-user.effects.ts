
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import * as singleUserActions from '../actions/single-user.actions';
import { UserService } from 'src/app/services/user.service';
import { mergeMap, map, tap } from 'rxjs/operators';
import { merge } from 'rxjs';

@Injectable()
export class SingleUsersEffects {

    constructor(
        //Observable listening actions
        private actions$: Actions,
        private userService: UserService
    ){}
loadSingleUser$ :any = createEffect(
    ():any => 
    this.actions$.pipe(
        ofType(singleUserActions.loadSingleUserByName),
        mergeMap((action) => 
                this.userService.getSingleUser(action.userName).pipe(
                    map(
                        (user) => singleUserActions.loadSingleUserSuccess({singleUser:user})
                    )
                )
        )
    )
)

}


    