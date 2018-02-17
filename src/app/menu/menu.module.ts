import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './component/menu.component';
import {WallComponent} from '../wall/component/wall.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})

export class MenuModule { }
