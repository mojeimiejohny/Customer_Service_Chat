import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
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

