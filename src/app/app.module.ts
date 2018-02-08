// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components imports
import { AppComponent } from './app.component';
import { MenuComponent} from './menu/component/menu.component';

// module imports
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { SharedModule } from './shared/shared.module';
import { MenuModule} from './menu/menu.module';

// import serwisów
import {AuthenticationService} from './services/authentication.service';


// w tablicy declarations dajemy komponenty
// w tablicy imports dajemy moduły
// w tablicy providers dajemy serwisy

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RegistrationModule,
    SharedModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
