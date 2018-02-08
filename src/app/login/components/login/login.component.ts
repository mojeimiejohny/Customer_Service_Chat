import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  title = 'Login';
  messages = [
    'Pole email jest wymagane',
    'Podaj poprawne hasło'
  ];

  constructor(private authenticationService: AuthenticationService) {
  }

  @Output()
  login = new EventEmitter();

  toggleFunc() {
    this.login.emit('registration');
  }

  logged(e, email, pass) {
    e.preventDefault();
    this.authenticationService.login(email.value, pass.value);
  }


}
