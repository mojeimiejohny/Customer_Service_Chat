import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import {SharedModule} from '../shared/shared.module';
import {AuthenticationService} from '../services/authentication.service';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [RegistrationComponent],
  providers: [
    AuthenticationService
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
