import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  constructor() {
  }

  observer;

  registrated = [];

  loggedUser = [];

  login(email, pass) {
    const temp = JSON.parse(localStorage.getItem('registrated'));
    let result = [];
    if (temp !== null) {
      result = temp.filter(e => {
        return e.email === email && e.pass === pass;
      });
    }

    if (result.length) {
      this.loggedUser.push(email);
      localStorage.setItem('logged', 'true');
      this.observer.next(true);
    }
  }

  loginStatus() {
    return this.createObservable();
  }

  logout() {
    localStorage.setItem('logged', 'false');
    this.loggedUser = [];
    this.observer.next(false);
  }

  registrate(email, pass) {
    const temp = JSON.parse(localStorage.getItem('registrated'));
    let result = [];
    if (temp !== null) {
      result = temp.filter(e => {
        return e.email === email;
      });
    }
    if (!result.length) {
      this.registrated.push({'email': email, 'pass': pass});
      const regist = JSON.stringify(this.registrated);
      localStorage.setItem('registrated', regist);
    }
  }

  loginCheck() {
    if (localStorage.getItem('logged') === 'true') {
      return true;
    }
    return false;
  }

  removeMe() {
    const temp = JSON.parse(localStorage.getItem('registrated'));
    const result = temp.map(e => {
      return e.email === this.loggedUser[0] ? {} : e;
    });
    localStorage.clear();
    localStorage.setItem('registrated', JSON.stringify(result));
    this.logout();
  }

  createObservable() {
    return new Observable(observer => {
      this.observer = observer;
    });
  }
}




