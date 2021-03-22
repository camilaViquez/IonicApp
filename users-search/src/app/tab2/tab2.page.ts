import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AppState } from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import {  loadSingleUserByName } from '../store/actions';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{


  singleUser: User = null;
  userName: string;

  constructor(private store: Store<AppState>, private activeRoute: ActivatedRoute,
    private inAppBrowser: InAppBrowser) {
    this.activeRoute.params.subscribe((res)=> {
      this.userName = res.userName; 
    })
  }
  ngOnInit(): void {
    this.store.select('singleUser').subscribe(({user}) => {
      this.singleUser = user;
      console.log(this.singleUser)
    })
    this.store.dispatch( loadSingleUserByName({ userName: this.userName }));    
  }

  onChangeFilter(word: string) {
    this.store.select('singleUser').subscribe(({user}) => {
      this.singleUser = user;
      console.log(this.singleUser)
    })
    this.store.dispatch( loadSingleUserByName({ userName: word }));    
  }


   openUrl(websiteUrl:string){
     this.inAppBrowser.create( websiteUrl);
  }
}
