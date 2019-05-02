import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'My Angular App';
  public isAuthenticated: boolean;

  constructor() {
     this.oktaAuth.$authenticationState.subscribe(
    (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
  );
  }

  OktaAuthModule.initAuth({
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '{YourClientId}'
})

  login() {
  }

  logout() {
  }
}