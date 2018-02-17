import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WallComponent} from './component/wall.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    WallComponent
  ],
  exports: [
    WallComponent
  ]
})
export class WallModule { }
