import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
// import {WallComponent} from '../wall/wall.component';
import {WallModule} from '../wall/wall.module';
import {WallComponent} from '../wall/component/wall.component';
import {MenuModule} from '../menu/menu.module';
import {MenuComponent} from '../menu/component/menu.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, WallComponent, MenuComponent]
})
export class MainModule {
}
