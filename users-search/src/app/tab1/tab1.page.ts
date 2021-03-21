import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { User } from '../model/user.model';
import { loadUsers } from '../store/actions';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{


  users: User [] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch( loadUsers() );
  }

}
