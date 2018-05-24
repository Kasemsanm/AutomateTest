import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes'
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { firebase_config } from './firebase.config';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AutomateTestComponent } from './automate-test/automate-test.component';
import { AuthenticationService } from './services/authentication.service';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    AutomateTestComponent
  ],
  imports: [
    BrowserModule,
    routes,
    AngularFireModule.initializeApp(firebase_config),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AuthenticationService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
