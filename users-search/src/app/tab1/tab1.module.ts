import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
 
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { appReducers } from '../store/app.reducer';
import { EffectsArray } from '../store/effects';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    StoreModule.forRoot(appReducers), 
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production, // Restrict extension to log-only mode
  }),
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
