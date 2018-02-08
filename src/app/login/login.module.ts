import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from '../shared/shared.module';
import {AuthenticationService} from '../services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthenticationService
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {
}
