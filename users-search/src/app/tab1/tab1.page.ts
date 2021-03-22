import { Component, OnInit, Input } from '@angular/core';
import { AppState } from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { User } from '../model/user.model';
import { loadUsers } from '../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  usersList: User [] = [];

since: number = 0;
pagination : number = 46;
  constructor(private store: Store<AppState>, private router: Router) {

  }

  ngOnInit(): void {
    this.store.select('users').subscribe(({users}) => {
      this.usersList = users;
    })
    this.store.dispatch( loadUsers({since: this.since}) );
  }

  onClick(userName: string) {
    this.router.navigate([`tabs/tab2/${userName}`]);
  }

  checkRepos(repoNumber: number){
    return repoNumber >= 2 ? true : false;
  }

  loadData(event) {
    this.since+=this.pagination;
    setTimeout(() => {
      this.store.select('users').subscribe(({users}) => 
      this.usersList = users
      )
      event.target.complete();
    }, 500);
    this.store.dispatch( loadUsers({since: this.since}) );
  }

}
