import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  @Output()
  registration = new EventEmitter();

  toggleFunc() {
    this.registration.emit('login');
  }

  registrate(e, email, pass) {
    e.preventDefault();
    this.authenticationService.registrate(email.value, pass.value);
  }
}
