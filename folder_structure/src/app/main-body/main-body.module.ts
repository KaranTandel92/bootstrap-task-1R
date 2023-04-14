import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainBodyRoutingModule } from './main-body-routing.module';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    MainBodyRoutingModule
  ]
})
export class MainBodyModule { }
