import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'YODA Customer Service Chat';
  logged = true;
  toggleComponent = false;
  sub: Subscription;

  constructor(private authenticationService: AuthenticationService) {
  }

  toggle(event) {
    this.toggleComponent = !this.toggleComponent;
  }

  ngOnInit() {
    this.logged = this.authenticationService.loginCheck();

    this.sub = this.authenticationService.loginStatus()
      .subscribe(res => {
        this.logged = !!res;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  logout() {
    this.authenticationService.logout();
  }

  removeUser() {
    this.authenticationService.removeMe();
  }

}
